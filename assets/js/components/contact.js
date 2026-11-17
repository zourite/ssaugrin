const form = document.getElementById('contact-form');

if (form) {
  const status = document.getElementById('form-status');
  const button = form.querySelector('button[type="submit"]');
  const submitLabel = button ? button.querySelector('.submit-label') : null;
  const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/;

  // La validation native est remplacée par la nôtre : sans JavaScript,
  // les attributs required / minlength du HTML prennent le relais.
  form.setAttribute('novalidate', 'novalidate');

  const rules = {
    prenom: value => value.trim().length >= 2
      ? ''
      : 'Indique au moins 2 caractères.',
    email: value => {
      const email = value.trim();
      if (!email) return 'Indique ton email.';
      return emailPattern.test(email) ? '' : 'Cet email ne semble pas valide.';
    },
    message: value => value.trim().length >= 20
      ? ''
      : 'Ton message doit contenir au moins 20 caractères.',
    consentement: (value, input) => input.checked
      ? ''
      : 'Merci de cocher cette case pour continuer.',
  };

  const setError = (input, message) => {
    const error = document.getElementById(`${input.name}-error`);

    if (message) {
      input.setAttribute('aria-invalid', 'true');
      if (error) {
        error.textContent = message;
        error.hidden = false;
      }
    } else {
      input.removeAttribute('aria-invalid');
      if (error) {
        error.textContent = '';
        error.hidden = true;
      }
    }

    return !message;
  };

  const validate = input => {
    const rule = rules[input.name];
    return rule ? setError(input, rule(input.value, input)) : true;
  };

  const inputs = ['prenom', 'email', 'message', 'consentement']
    .map(name => form.elements.namedItem(name))
    .filter(Boolean);

  const showStatus = (message, type) => {
    if (!status) return;

    status.textContent = message;
    status.classList.remove('is-success', 'is-error');
    status.classList.add(type === 'error' ? 'is-error' : 'is-success');
    status.hidden = false;
    status.focus();
  };

  const setBusy = busy => {
    if (button) button.disabled = busy;
    form.setAttribute('aria-busy', String(busy));
    if (submitLabel) submitLabel.textContent = busy ? 'Envoi en cours…' : 'Envoyer';
  };

  inputs.forEach(input => {
    input.addEventListener('blur', () => validate(input));

    if (input.type === 'checkbox') {
      input.addEventListener('change', () => validate(input));
    } else {
      input.addEventListener('input', () => {
        if (input.getAttribute('aria-invalid') === 'true') validate(input);
      });
    }
  });

  form.addEventListener('submit', async event => {
    event.preventDefault();

    if (status) {
      status.hidden = true;
      status.textContent = '';
    }

    const invalid = inputs.filter(input => !validate(input));
    if (invalid.length) {
      invalid[0].focus();
      return;
    }

    setBusy(true);

    try {
      const body = new URLSearchParams();
      new FormData(form).forEach((value, key) => body.append(key, value));

      const response = await fetch('/', {
        method: 'POST',
        headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
        body: body.toString(),
      });

      if (!response.ok) throw new Error(`HTTP ${response.status}`);

      form.reset();
      inputs.forEach(input => setError(input, ''));
      showStatus('Merci ! Ton message est bien envoyé. Je te réponds dès que possible.', 'success');
    } catch (error) {
      showStatus("L'envoi n'a pas fonctionné. Réessaie dans un instant ou écris à me@ssaugrin.fr.", 'error');
    } finally {
      setBusy(false);
    }
  });
}

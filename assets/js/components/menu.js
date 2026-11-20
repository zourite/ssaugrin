// Menu principal : le burger n'est actif qu'en dessous de 976 px, le reste du
// temps le menu est affiché par la CSS. L'état actif des liens est posé côté
// Hugo (aria-current), plus besoin de le calculer ici.
const hamburger = document.getElementById('btn-burger');
const menu = document.getElementById('top-links');

if (hamburger && menu) {
  const label = hamburger.querySelector('.sr-only');
  const icon = hamburger.querySelector('.ham');

  const setState = (open) => {
    hamburger.setAttribute('aria-expanded', String(open));
    menu.classList.toggle('is-open', open);
    icon?.classList.toggle('active', open);
    document.body.classList.toggle('no-scroll', open);

    if (label) {
      label.textContent = open ? 'Fermer le menu' : 'Ouvrir le menu';
    }
  };

  const isOpen = () => hamburger.getAttribute('aria-expanded') === 'true';

  hamburger.addEventListener('click', () => setState(!isOpen()));

  // Échap ferme le menu et redonne le focus au bouton.
  document.addEventListener('keydown', (event) => {
    if (event.key === 'Escape' && isOpen()) {
      setState(false);
      hamburger.focus();
    }
  });

  // Un lien cliqué ferme le menu (utile si la cible est une ancre).
  menu.addEventListener('click', (event) => {
    if (event.target.closest('a') && isOpen()) {
      setState(false);
    }
  });

  // Passage en affichage bureau : on repart d'un état propre.
  window.matchMedia('(min-width: 976px)').addEventListener('change', (event) => {
    if (event.matches) {
      setState(false);
    }
  });
}

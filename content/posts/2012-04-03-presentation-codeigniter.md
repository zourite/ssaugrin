---
title: 'Présentation de #CodeIgniter'
author: Zourite
type: post
date: 2012-04-03T06:00:07+00:00
excerpt: "Je pense que pour chaque projet il y a un CMS ou un Framework qui lui est plus ou moins approprié. Comparer des Frameworks entre eux est selon moi quelque chose d'inutile. Le mieux est de connaitre les faiblesses et les points forts de chacun et savoir ce que l'on veut. C'est pour cela que je tiens à présenter CodeIgniter"
url: /presentation-codeigniter/
featured: 2012/04/codeigniter_logo.png
views:
  - 96
categories:
  - Open-Source
  - Programmation
tags:
  - CodeIgniter
  - Framework
  - POO

---
Je ne suis pas une super développeuse qui code d&rsquo;une main en jouant à WOW de l&rsquo;autre, qui connais tous les design pattern ou les principes de plusieurs algorithmes. Je débute en programmation et c&rsquo;est déroutant de commencer à manier un Framework avec des conventions strictes ou avec un système de configuration mis en place par des développeurs que je qualifierais de sadique. Bien évidement des tutoriels sont disponibles sur la toile, mais il suffit de manquer une étape pour être découragé et peut être perdre confiance en soi et en ses compétences.

<div id="attachment_996" style="width: 160px" class="wp-caption alignleft">
  <img aria-describedby="caption-attachment-996"  src="2012/04/codeigniter_logo-150x150.png" alt="codeigniter_logo" title="codeigniter_logo" width="150" height="150" class="size-thumbnail wp-image-996" />
  
  <p id="caption-attachment-996" class="wp-caption-text">
    Logo Codeigniter
  </p>
</div>

### Pourquoi CodeIgniter ?

CodeIgniter m&rsquo;a été présenté par Julien Tessier au cours de mon stage chez Cahri. Depuis ce jour CodeIgniter est devenu un outil indispensable dans la quasi-totalité de mes projets. Ce Framework n&rsquo;est pas indispensable à tout niveau. Je pense que ce serais de la bêtise incarnée de créer un formulaire ou un petit quizz avec CodeIgniter. Cependant il serait sage de créer un générateur de formulaire lié à vos besoins avec l&rsquo;aide de ce Framework.

Ce que j&rsquo;aime avec CodeIgniter, c&rsquo;est qu&rsquo;il n&rsquo;est pas nécessaire de connaitre la programmation objet sur les bouts des doigts, il m&rsquo;a aidé à mieux comprendre le principe de la POO en PHP et sa [documentation][1] est autosuffisante. La configuration de ce Framework se limite à quelques fichiers et il dispose de nombreux helpers et librairies qui facilite la programmation.

### Qu&rsquo;a t&rsquo;il sous le capot ?

CodeIgniter permet de <a href="http://codeigniter.com/user_guide/general/managing_apps.html" title="Multiapplication CodeIgniter" target="_blank">gérer plusieurs application</a> web avec une seule installation. Il se base sur une architecture MVC. Pour la génération des urls, il adopte le schéma de Ruby on Rails ce qui fait que l&rsquo;on dispose de vanity url sans pour autant configurer quoi que ce soit. Il est possible de modifier les urls générer en les configurant dans le fichier application/config/routes.php.

Comme je l&rsquo;ai dit plus haut codeigniter dispose de nombreuse librairies, les plus intéressantes de celle ci pour un développeur sont surement la librairie benchmark et unit\_test. La librairie benchmark permet de profiler son application web et ainsi avoir les retours de performances, sur l&rsquo;exécution d&rsquo;une requête SQL ou même la quantité de mémoire utilisé. Tandis que la librairie unit\_test comme son nom l&rsquo;indique permet de faire des tests unitaire, ce qui permet une meilleure vérification du résultat d&rsquo;une fonction. Enfin pour optimiser les performances d&rsquo;une application CodeIgniter dispose d&rsquo;un sytéme de cache déjà programmer.

### En conclusion 

Si vous débutez en programmation et si vous ne voulez pas vous prendre la tête tout en ayant la possibilité de créer une chouette petite application Web. Je vous conseil d&rsquo;adoptez CodeIgniter vous ne serez pas déçu. Cependant il à un défaut, par la simplicité de son architecture et le fait de ne pas avoir de réel convention, on peut vite se retrouver dans un code non architecturée et difficile à maintenir si on est pas un minimum discipliné et organisé.

### Recommandation

  * <a href="http://performancephp.developpez.com/" title="Présentation du framework CodeIgniter" target="_blank">Présentation du Framework CodeIgniter Developpez.com</a>
  * <a href="http://social.hecube.net/blog/2009/10/11/kohana-codeigniter-framework-php-un-comparatif-entre-kohana-et-codeigniter/" title="Kohana et CodeIgniter" target="_blank">Comparatif Kohana et CodeIgniter</a> 
  * <a href="http://www.siteduzero.com/tutoriel-3-370694-codeigniter-le-framework-au-service-des-zeros.html" title="CodeIgniter pour les Zéros" target="_blank">CodeIgniter pour les zéros </a>

 [1]: http://codeigniter.com/user_guide/ "Documentation de CodeIgniter"
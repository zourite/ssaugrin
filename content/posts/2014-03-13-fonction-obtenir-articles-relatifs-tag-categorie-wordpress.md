---
title: 'Fonction pour obtenir des articles relatifs par Tag et par Categorie #WordPress'
author: Zourite
type: post
date: 2014-03-13T06:52:39+00:00
excerpt: Les articles relatifs dans WordPress sont comme les suggestions de vidéos dans Youtube, ils sont parfois pertinents. Ce dont je suis sûre et certaine, c’est qu’ils sont devenus incontournable pour un blog.
url: /fonction-obtenir-articles-relatifs-tag-categorie-wordpress/
pdrp_attributionLocation:
  - end
categories:
  - Programmation
  - Wordpress
tags:
  - PHP

---
Les articles relatifs dans WordPress sont comme les suggestions de vidéos dans Youtube, ils sont parfois pertinents. Ce dont je suis sûre et certaine, c’est qu’ils sont devenus incontournable pour un blog. Il y a des années de cela, j’utilisais une fonction toute pourrie et assez compliquée, qui se basait sur les variables `global $wpdb` ou encore `global $posts`, pour afficher **ces fichus articles relatifs.** Une fonction est faite pour être améliorée donc j’ai décidé de refaire cette super fonction qui faisait 1Km.

Cette fonction a pour but, d’**afficher un nombre donné d’article** qui se base d’abord sur **les tags,** si le nombre d’article qui détiennent ce tag est inférieur au nombre d’articles relatifs que vous voulez, alors la fonction va compléter la différence en choisissant **des articles de la même catégorie.** C’est bon vous avez suivi ?

Pour faire cette fonction nous avons besoin de quelques fonctions propres à **WordPress** :

`get_the_tags()` – Récupère les tags d’un article
  
`get_the_id()` – Obtient l’ID du post en cours
  
`get_the_terms()` – Permet d’obtenir les catégories de l’article en cours de lecture
  
`get_posts()` – Fonctionne comme WP_Query

Je sais que vous voulez seulement copier-coller la fonction donc la voici, la voilà. Comme je l’ai toujours dit je ne suis pas une serial codeuse donc si vous trouvez des choses à améliorer n’hésitez pas c’est Open Source. Dernière précision, cette fonction est à utiliser dans single.php ou la sidebar qui est à côté de l’article. Ou veux-tu afficher des articles relatifs, si ce n’est pas dans un article ?
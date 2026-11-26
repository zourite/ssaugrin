---
title: 'Comment mon #serveur #web est organisé'
author: Zourite
type: post
date: 2017-03-28T05:57:43+00:00
description: 'Un serveur web est par définition un ordinateur qui te permet de visualiser un site web grâce à Firefox ou Chrome. '
url: /configuration-serveur-web/
featured: 2017/03/serveur-web-nginx-php.jpg
hero : /img/hero/serveur-dedie-configuration.jpg
categories:
  - SysAdmin
tags:
  - debian
  - nginx
---
Il y a maintenant une ou deux année de cela, j&rsquo;ai pris la décision de ne plus utiliser des serveurs mutualisés. 

J&rsquo;ai fait ce choix principalement pour avoir le contrôle absolue sur ce que je fais _(I&rsquo;m ROOT, I&rsquo;m GOD)_ et expérimenter des nouvelles technologies, sans attendre le bon vouloir de mon hébergeur pour les intégrer à ses serveurs.

Le système d&rsquo;exploitation que je choisi pour un serveur web, est [Debian][1] et si ce ne serait pas Debian ça aurait été Ubuntu. Il y à énormément de ressources et de tutaux pour ces systèmes d&rsquo;exploitations. **Grande est la communauté du .deb** 😀

**Un serveur web** est par définition un ordinateur qui te **permet de visualiser un site web** grâce à Firefox ou Chrome. Je te propose de regarder cette vidéo de deux minutes qui t&rsquo;explique comment fonctionne un serveur web.

{{< youtube msB9AvJ4bTM >}}

Entrons donc dans le vif du sujet, le schéma ci dessous te montre comment mon serveur est organisé. Je partitionne _(séparer en plusieurs partie)_ mon serveur en deux. Les fichiers qui constituent **le site web sont stockés dans le répertoire /home et les applicatifs sont à la racine /(racine).** Je préfère séparer ces deux types de données si un site est trop gourmand en stockage d&rsquo;images, de pdf ou de vidéos, et sature l&rsquo;espace disponible, mon serveur continuera de fonctionner sans encombre.

{{< img src="/img/2017/03/serveur-nginx-php-mysql.jpg" alt="" class="aligncenter" sizes="(min-width: 791px) 791px, 100vw" >}}

## **Le serveur HTTP** 

Sans un serveur HTTP d&rsquo;installé rien ne fonctionne, il est le pilier principal d&rsquo;un serveur web. Parmi les serveurs HTTP les plus utilisés, il y a Apache, NGINX et IIS. J&rsquo;ai utilisé Apache pendant très longtemps sur mes serveurs web mais depuis j&rsquo;ai rencontré Nginx. Je suis tombé amoureuse et je ne veux rien d&rsquo;autre que du Nginx sur mon serveur.

A la base NGINX est utilisé en tant que reverse proxy en complément d&rsquo;Apache. Cependant je trouve que NGINX rempli très bien son rôle de serveur HTTP sans pour autant avoir besoin d&rsquo;Apache. Mis à part sa légèreté et sa rapidité d’exécution. Je trouve que la syntaxe de NGINX est plus simple et plus intuitive, ce n&rsquo;est que mon avis. Plus bas, tu trouveras un graphique qui représente la part de marché des différents serveurs HTTP. NGINX prend de plus en plus de part au fil des années.

<div id="attachment_3078" class="wp-caption aligncenter">
  {{< img src="/img/2017/03/Sélection_239.png" alt="" class="size-full" sizes="(max-width: 720px) 100vw, 720px" >}}
  
  <div class="caption-text">
    <a href="https://trends.builtwith.com/web-server" target="_blank">https://trends.builtwith.com/web-server</a>
  </div>
</div>

## **Language de scripts** 

Si tu décides d&rsquo;avoir ton propre serveur, je ne pense pas que c&rsquo;est uniquement pour y déposer des fichiers HTML. Si tu veux au moins un formulaire de contact sur ton site, il te faudra nécessairement installer un language de scripts. J&rsquo;ai débuter avec PHP et pour le moment il me convient. Le serveur Nginx se charge d’interpréter le PHP pour le renvoyer sous forme HTML à ton navigateur.

## **La base de données** 

En ce qui concerne la gestion de base de données, j&rsquo;utilise principalement **MySql** par ce que comme PHP c&rsquo;est l&rsquo;une des technologies les plus utilisées pour le web. La majorité des CMS fonctionnement avec MySQL. Cependant d&rsquo;autres systèmes de gestion de base de données existent. Tu as le choix entre **MariaDB, Sqlite et PostgreSQL.**

Tu peux stocker tes informations dans des fichiers .txt que tu enregistrera sur ton serveur et dont tu feras appel quand tu auras besoin. Tu peux le faire ce n&rsquo;est pas interdit, mais pour une question de performance, je te conseille de choisir un applicatif qui est spécialement conçu pour le stockage de données. 😀 Je dis ça, je dis rien tu peux faire ton _frappadingue_ et tout enregistrer dans des fichiers, c&rsquo;est pas un soucis.

Pour conclure, j&rsquo;évoque le fait que cette configuration est basique et me convient pour ce que j&rsquo;ai à faire. Je pense plus tard ajouter un système de cache avec Varnish qui est un serveur de cache qui se place avant Nginx et pourquoi pas installer MemCached pour améliorer les performances du serveur.

 [1]: https://www.debian.org/index.fr.html
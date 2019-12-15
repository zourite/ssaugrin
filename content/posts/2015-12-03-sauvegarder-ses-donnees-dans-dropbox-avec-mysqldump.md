---
title: Sauvegarder ses données dans Dropbox avec mysqldump
author: Zourite
type: post
date: 2015-12-03T05:36:17+00:00
description: "Tous les disques durs de mon serveur sont tombés en panne, j'ai perdu près de deux ans de travail pour l'un de mes sites. Je suis paresseuse et faire des backups hebdomadaire via une interface ne m'enchante guère. Ça ne me tente pas d'écrire un script pour automatiser l'envoie de mes données vers un serveur FTP."
url: /sauvegarder-ses-donnees-dans-dropbox-avec-mysqldump/
featured: 2017/02/dropbox-backup.jpg
pdrp_attributionLocation:
  - end
kdc_metadata:
  - 'a:1:{s:4:"lang";s:2:"fr";}'
categories:
  - SysAdmin
tags:
  - cloud
  - cron
  - debian
  - dropbox
  - ifttt
  - mysql

---
J&rsquo;écris cet article suite à une mésaventure. Tous les disques durs de mon serveur sont tombés en panne, j&rsquo;ai perdu près de deux ans de travail pour l&rsquo;un de mes sites. Je suis paresseuse et faire des backups hebdomadaire via une interface ne m&rsquo;enchante guère.

La solution qui permettra à cette mésaventure de ne plus se reproduire, c&rsquo;est d&rsquo;utiliser cron et mysqldump, ça ne me tente pas d&rsquo;écrire un script pour automatiser l&rsquo;envoie de mes données vers un serveur FTP. Le FTP _is so hasbeen now_, donc transférer tout ceci vers le cloud me parait être une bonne idée.

J&rsquo;ai choisi Dropbox car le site fourni une application officielle pour Debian et son installation est très simple. Si vous n&rsquo;avez pas de compte, je vous invite à vous inscrire : <a href="https://db.tt/dqtAxlx" target="_blank">Se créer un compte Dropbox</a>. Je pense ne pas être la seule à vouloir stocker mes backups dans Google Drive, plus loin dans l&rsquo;article je vous dirais la solution que j&rsquo;ai choisi pour transférer tout ceci vers Google Drive depuis Dropbox.

Les commandes ci-dessous vous permettent d&rsquo;installer Dropbox et de sauvegarder vos données vers ce dernier. Il est important de démarrer Dropbox en arrière plan, si vous tuer le processus vos fichiers ne se synchroniseront plus.



Garder mes données uniquement dans Dropbox c&rsquo;est prendre le risque de les perdres si il arrive un désastre de n&rsquo;importe quel nature chez Dropbox. Donc pour bien consolider mon processus j&rsquo;envoie mes données à Google Drive, grâce à IFTTT : <a href="https://ifttt.com/recipes/54687-sync-new-files-added-to-dropbox-to-google-drive" target="_blank">Sync new files added to Dropbox to Google Drive</a>

Source :

[How to run Dropbox daemon in background?][1]

 [1]: https://unix.stackexchange.com/questions/35624/how-to-run-dropbox-daemon-in-background
---
title: Sauvegarder ses données en 2026
author: Zourite
type: post
date: 2026-11-19T07:00:00+01:00
description: "En 2015, j'ai perdu deux ans de données. Depuis, j'ai changé de méthode : voici comment je sauvegarde mes fichiers aujourd'hui, sans y passer mes soirées."
url: /sauvegarder-ses-donnees-en-2026/
featured: 2017/03/serveur-web-nginx-php.jpg
hero: /img/hero/serveur-dedie-configuration.jpg
categories:
  - SysAdmin
tags:
  - sauvegarde
  - restic
  - stockage
---
En 2015, tous les disques durs de mon serveur sont tombés en panne. Pas un, pas deux : tous. J’ai perdu près de deux ans de travail pour l’un de mes sites. Sur le moment, j’aurais pu pleurer toutes les larmes de mon corps, mais j’ai préféré écrire un article sur Dropbox et mysqldump. 🙂

Sauf que voilà. Depuis, Dropbox a fermé son dossier Public (en 2017, paix à son âme) et IFTTT a transformé ses Recipes en Applets. La méthode que je te proposais ne fonctionne plus. Ça m’apprendra à écrire des tutos qui dépendent de services tiers.

Aujourd’hui, je fais autrement. Et franchement, c’est mieux.

## Sauvegarder n’est pas synchroniser

C’est la confusion qui coûte le plus cher, et je parle en connaissance de cause.

Un jour, tu supprimes un dossier par erreur. Sur ton ordinateur, il disparaît. Dans Dropbox aussi. Sur ton téléphone aussi. Et le lendemain, tu te rends compte que ce dossier contenait tes photos de vacances. Bonne chance.

La synchronisation, c’est génial pour passer d’un appareil à l’autre sans se poser de question. Mais ce n’est pas une sauvegarde. Une sauvegarde, c’est une copie datée : elle ne suit pas tes suppressions, elle ne suit pas tes erreurs, et surtout elle ne suit pas un ransomware qui chiffre tout ce qu’il trouve.

## La règle 3-2-1

Trois copies, deux supports, dont une hors site. C’est la base, et ça marche pour tout le monde.

Chez moi, ça donne : mes fichiers sur l’ordinateur, une copie sur un disque externe, et une copie chiffrée chez un hébergeur. Si mon appartement prend feu, il me reste l’hébergeur. Si l’hébergeur ferme, il me reste le disque. Et si mon disque rend l’âme… j’ai intérêt à ce que l’hébergeur soit toujours là. 😉

Je sauvegarde mes documents, mes photos, mes projets, les fichiers de configuration du serveur et les bases de données. Ce qui est déjà sur GitHub n’a pas besoin d’être dupliqué : c’est déjà une copie hors site. Inutile de payer deux fois.

## Pourquoi j’ai choisi restic

J’ai testé pas mal de choses avant de tomber sur [restic](https://restic.net/). C’est un outil en ligne de commande, libre, écrit en Go. Ce qui m’a convaincue :

- un seul binaire, pas de dépendance, pas d’usine à gaz ;
- le chiffrement se fait sur ma machine : l’hébergeur ne voit que des blocs illisibles ;
- la déduplication fait que la deuxième sauvegarde est beaucoup plus rapide que la première ;
- il s’entend avec à peu près tous les stockages : disque local, SFTP, S3, Backblaze B2, via rclone…

Mais le vrai argument, c’est qu’il ne synchronise pas. Il écrit des instantanés. Une erreur sur ma machine ne se propage pas dans le dépôt. Pour moi, ça n’a pas de prix.

## Comment je fais

Chez Backblaze B2, je crée un bucket privé, puis une clé d’application limitée à ce bucket. Et je range les variables dans un petit fichier que je protège :

```bash
export RESTIC_REPOSITORY="b2:mon-bucket-restic:/sauvegardes"
export B2_ACCOUNT_ID="mon-identifiant"
export B2_ACCOUNT_KEY="ma-cle"
export RESTIC_PASSWORD_FILE="$HOME/.restic-password"
chmod 600 "$HOME/.restic-password"
```

Le mot de passe du dépôt, lui, ne doit jamais aller dans le bucket. Si tu le perds, tes données sont perdues. Si tu le stockes à côté, tu perds l’intérêt du chiffrement. Range-le dans un gestionnaire de mots de passe et garde une copie hors ligne. Oui, c’est pénible. C’est le prix à payer.

```bash
sudo apt install restic
restic init
restic backup ~/Documents ~/Photos ~/Projets --exclude-caches
restic snapshots
```

`--exclude-caches` évite de sauvegarder les `node_modules` et autres caches. Tu me remercieras quand ton dépôt fera quelques giga au lieu de plusieurs centaines.

Je suis paresseuse, je l’ai déjà dit. Une sauvegarde manuelle, très peu pour moi : la mienne tourne toutes les nuits à 3 h 15. Pas parce que je suis une lève-tôt, mais parce que personne ne me dérange à cette heure-là.

```cron
15 3 * * * . $HOME/.restic-env && /usr/bin/restic backup $HOME/Documents $HOME/Photos $HOME/Projets --exclude-caches >> $HOME/.restic.log 2>&1
```

Et une fois par mois, je fais le ménage :

```bash
restic forget --keep-daily 7 --keep-weekly 4 --keep-monthly 12 --prune
```

Une sauvegarde par jour sur une semaine, une par semaine sur un mois, une par mois sur un an. `--prune` supprime les blocs qui ne servent plus.

### La partie que tout le monde oublie

Une sauvegarde que tu n’as jamais restaurée n’est pas une sauvegarde. C’est une hypothèse. Et le jour où tu en as besoin, il est trop tard pour découvrir que le dépôt est corrompu.

```bash
restic check
restic restore latest --target /tmp/restauration
```

Je fais cet exercice une fois par trimestre, sur un dossier au hasard. Ça prend cinq minutes et ça évite de très mauvaises surprises. Pour fouiller sans tout restaurer, `restic mount /mnt/restic` monte le dépôt en lecture seule (il faut FUSE).

## Et la base de données ?

Un dump directement dans la sauvegarde, sans passer par un fichier temporaire :

```bash
mysqldump --single-transaction --quick -u blog -p blog \
  | gzip \
  | restic backup --stdin --stdin-filename blog.sql.gz
```

`--single-transaction` évite de bloquer les tables pendant l’export. Pour PostgreSQL, `pg_dump` fait le même travail.

## Combien ça coûte ?

Backblaze B2 facture 6,95 $ par To et par mois, avec 10 Go gratuits et l’egress gratuit jusqu’à trois fois le volume stocké. Pour 100 Go, compte environ 0,70 $ par mois. Moins cher qu’un café, et ça sauvegarde un peu plus que ton humeur du matin. 😀

Si tu préfères éviter le dollar, il y a Hetzner Storage Box, Infomaniak, un NAS chez toi, ou un disque branché chez un proche en SFTP. Le prix change, la méthode reste la même.

## Pour conclure

La sauvegarde, c’est un peu comme les lunettes : tout le monde en a besoin, mais personne ne s’en occupe avant d’avoir cassé les siennes. 😉

Mes deux ans perdus m’ont appris une chose : deux copies, ce n’est pas assez, et la synchronisation n’est pas une sauvegarde. Si tu as déjà perdu des données, tu sais pourquoi cet article existe. Si ce n’est pas encore arrivé, tu as de la chance : profites-en pour installer restic ce week-end.

Et toi, tu sauvegardes comment ? Si tu as une méthode qui tient la route, ou une catastrophe à raconter, [écris-moi](/contact/) : ça m'intéresse toujours. 🙂

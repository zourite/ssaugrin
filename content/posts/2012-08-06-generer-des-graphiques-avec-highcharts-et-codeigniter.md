---
title: 'Générer des graphiques avec Highcharts et #CodeIgniter'
author: Zourite
type: post
date: 2012-08-06T05:10:04+00:00
excerpt: " Pour générer des graphiques assez sympa, il y a Google Chart et Highcharts. Cet article vous présente un moyen de générer des graphiques  avec Codeigniter et d'Highcharts grâce à une librairie."
url: /generer-des-graphiques-avec-highcharts-et-codeigniter/
featured: 2012/08/Sélection_023.png
views:
  - 1020
kdc_metadata:
  - 'a:1:{s:4:"lang";s:2:"fr";}'
categories:
  - Programmation
tags:
  - CodeIgniter
  - highcharts
  - Javascript
  - Librairie
  - PHP

---
Highcharts est une librairie Javascript, qui permet de faire de beaux graphiques. Si quelqu&rsquo;un me dit d&rsquo;utiliser Google Chart, car c&rsquo;est plus simple, je le tue. Plus sérieusement je n&rsquo;utilise pas Google Chart pour générer des graphiques puisque rien m&rsquo;assure que le service sera toujours accessible 24H/24H, je n&rsquo;aime pas dépendre d&rsquo;application tierce. Pour certains services on ne peut faire autrement, pour exemple je ne citerais que Google Map. Si une personne me dit qu&rsquo;il peut se passer aisément de Google Maps quand il à besoin de représenter des données sur une map qu&rsquo;il me donne sa solution.

Passons à l&rsquo;éssentiel dans un premier temps téléchargez l&rsquo;archive <a href="https://github.com/ronan-gloo/codeigniter-highcharts-library" title="CodeIgniter Highcahrts Library" rel="bookmarks" target="_blank">CodeIgniter Highcahrts Library</a> sur Github. Ensuite placez les fichiers dans les différents dossiers de votre application. Pour cet article nous allons prendre le cas suivant :

> Nous avons une table `livres` et une table `avis`, nous voulons représenter sous forme de graphique les différents avis par livres

### Configuration

Le fichier `config/highcharts.php` permet de personnaliser le rendu des graphiques. Il est possible de configurer des élèments qui seront appliqués à tous les graphiques ou de creer une template personnaliser. Pour choisir une template, il suffit de l&rsquo;initialiser `$this->highcharts->initialize('nom_template')`

### Intégration

Si vous êtes ici, c&rsquo;est que vous savez utiliser les models, je ne vais pas vous insulter en vous disant comment faire une requête ou comment charger une librairie, donc on vas passer directement à la génération des graphiques que je fais dans une vue.

Je part du fait que le model gènere un `array()` multidimensionnel qui ressemble à :

~~~~php
Array
(
    [wordpress] => Array
        (
            [0] => Array
                (
                    [0] => Negatif // Type des votes
                    [1] => 1 // Nombre de vote
                )

            [1] => Array
                (
                    [0] => Positif
                    [1] => 1
                )

            [2] => Array
                (
                    [0] => Neutre
                    [1] => 1
                )

        )
...
)
~~~~

#### View

Ce qui fait que pour générer les graphiques il faut faire le traitement suivant :

~~~~php
<?php

    foreach($tags as $key => $tag):

       $labels = array_keys($tag); // récupère les avis ( + , - , Neutre)

       $serie['data'] = $tag; // Les résultats à analyser


        $totaux = 0;

        $nbArray = count($tag);

        // Fonction qui totalise le total de personne qui ont données leur avis
        for ($i = 0; $i &lt; $nbArray; $i++) {

              $totaux += $tag[$i][1];

        }

        $title = ucfirst($key).' - '.$totaux.' occurences'; // Titre du Graphique

        $callback = "function() { return '

<b>'+ this.point.name +'</b>: '+ Math.round(this.percentage*100)/100 +' %'}";

        $tool->formatter = $callback; // Legende au survol de la souris
        $plot->pie->dataLabels->formatter = $callback; // Legende
        $this->highcharts
            ->set_type('pie')
            ->set_serie($serie)
            ->set_tooltip($tool)
            ->set_dimensions('', 300)
            ->set_title($title, '')
            ->set_plotOptions($plot);

        echo $this->highcharts->render();

    endforeach;
?>
~~~~

### Rendu

<div id="attachment_1176" style="width: 310px" class="wp-caption alignleft">
  <a href="2012/08/Sélection_023.png"><img aria-describedby="caption-attachment-1176" src="2012/08/Sélection_023-300x88.png" alt="Codeigniter - Highcharts" title="Codeigniter - Highcharts" width="300" height="88" class="size-medium wp-image-1176" /></a>
  
  <p id="caption-attachment-1176" class="wp-caption-text">
    Résultats pour la génération de graphique
  </p>
</div> Si tout c&rsquo;est bien passé vous devez avoir un rendu comme l&rsquo;image ci-contre. Je vous conseil de faire un tour sur le 

<a href="http://www.highcharts.com/" title="site officiel de HighCharts" target="_blank">site officiel de Highcharts</a> pour connaitre l&rsquo;étendue des possibilités offertes.
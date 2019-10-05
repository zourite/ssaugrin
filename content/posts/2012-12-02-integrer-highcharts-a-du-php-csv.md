---
title: 'Intégrer #Highcharts à du #PHP / #CSV'
author: Zourite
type: post
date: 2012-12-02T13:11:52+00:00
excerpt: "Comme on me l'a gentille-ment demandé, j'ai écrit un petit tutoriel sur le moyen d'intégrer Highcharts à du PHP sans passer par un framework. Donc je vais vous montrer comment générer un graphique à l'aide d'un csv."
url: /integrer-highcharts-a-du-php-csv/
featured: 2012/11/csv.png
views:
  - 515
categories:
  - Programmation
tags:
  - csv
  - highcharts
  - Javascript
  - Librairie
  - PHP

---
[<img src="2012/11/csv.png" alt="csv" title="csv" width="128" height="128" class="alignright size-full wp-image-2423" />][1]

Comme on me l&rsquo;a gentiment demandé, j&rsquo;ai écrit un petit tutoriel sur le moyen d&rsquo;intégrer **Highcharts** à du PHP sans passer par un framework. Donc je vais vous montrer comment générer un graphique à l&rsquo;aide d&rsquo;un csv. Dans un premier temps, vous devez télécharger la librairie <a href="https://github.com/ghunti/HighchartsPHP/" target="_blank">PHP &#8211; Highcharts de Ghunti.</a>

### Transformer un CSV en Array()

Pour transformer un CSV en `array()` on va utiliser la fonction `fgetcsv()`

<pre>function get_array() {

		$file = fopen('highcharts_demo.csv', 'r');
			
			while (($line = fgetcsv($file,'',';')) !== FALSE) {
	
  				$array_data[] = $line;
			
			}
		
	fclose($file);

	unset($array_data[0]);

	return $array_data;


	}
</pre>

Ce qui vous donnera un `array()` de cette forme

<pre>Array
(
    [0] => Array
        (
            [0] => Livre
            [1] => Nombre de fois lue
            [2] => Mois de lecture
            [3] => Lecteur
        )

    [1] => Array
        (
            [0] => WordPress
            [1] => 2
            [2] => janvier
            [3] => Mickaël
        )

    [2] => Array
        (
            [0] => PHP
            [1] => 3
            [2] => janvier
            [3] => Raphaël
        )

    [3] => Array
        (
            [0] => SQL
            [1] => 1
            [2] => fevrier
            [3] => Virginie
        )

    [4] => Array
        (
            [0] => Jquery
            [1] => 5
            [2] => mars
            [3] => Mickaël
        )
)</pre>

[<img src="2012/12/Sélection_012-300x200.jpg" alt="Graphique Highcharts PHP" title="Graphique Highcharts PHP" width="300" height="200" class="alignright size-medium wp-image-2436" />][2]

### Transformation de l&rsquo;array

Nous allons voir comment obtenir un graphique comme celui de droite. Tout d&rsquo;abord il faudra impérativement modifier le tableau, pour qu&rsquo;il nous renvoie ce que nous voulons, ce sera un tableau multidimensionnel, contenant la valeur et le libellé. On va donc récupérer les livres qui sont les plus lus. Pour qu&rsquo;une portion du camembert soit détaché au moment de la visualisation, il faut insérer deux valeurs au tableau `sliced => true` et `selected => true`.

<pre>function get_livres() {

		$array = get_array();


		foreach ($array as $value) :
				
				$totaux[$value[0]] += $value[1];

		endforeach;

		foreach ($totaux as $key => $value) :

			if($value > 30) :

				$livres[] = array(

								'name' => $key , 
								'sliced' => true,
                                'selected' => true, 
                                'y' => intval($value)

                                ); 
			else :

				$livres[] = array(utf8_decode($key),intval($value));
			
			endif;	

		endforeach;

		
		return $livres;

	}</pre>

### Générer le graphique 

Maintenant, il manque juste à incorporer la fonction `get_livres()` au code pour que le graphique prenne forme.

<pre>function pie_chart() {

$chart1 = new Highchart();

$chart1->chart->renderTo = "contain";
$chart1->chart->plotBackgroundColor = null;
$chart1->chart->plotBorderWidth = null;
$chart1->chart->plotShadow = false;
$chart1->title->text = "Pourcentage de lecture par livre";

$chart1->tooltip->formatter = new HighchartJsExpr("function() {
    return '<b>'+ this.point.name +'</b>: '+ Math.round(this.percentage*100)/100 +' %';}");

$chart1->plotOptions->pie->allowPointSelect = 1;
$chart1->plotOptions->pie->cursor = "pointer";
$chart1->plotOptions->pie->dataLabels->enabled = 1;
$chart1->plotOptions->pie->dataLabels->color = "#000000";
$chart1->plotOptions->pie->dataLabels->connectorColor = "#000000";

$chart1->plotOptions->pie->dataLabels->formatter = new HighchartJsExpr("function() {
    return '<b>'+ this.point.name +'</b>: '+ Math.round(this.percentage*100)/100 +' %'; }");

$chart1->series[] = array('type' => "pie",
                         'name' => "Lecture de Livre",
                         'data' =>  get_livres());

return $chart1->render();




}
</pre>

### Démonstration et téléchargement

Vous pouvez télécharger les fichiers et avoir un aperçu de ce qu&rsquo;on peut faire dans [mon labo][3]. Il y à deux fichiers important, `chart.php` qui regroupe les fonctions pour créer le graphique, `functions.php` contient toutes les fonctions pour modifier l&rsquo;array obtenu à partir du CSV. Maintenant c&rsquo;est à vous d&rsquo;adapter cet exemple.

 [1]: 2012/11/csv.png
 [2]: 2012/12/Sélection_012.jpg
 [3]: http://labo.saugrin-sonia.fr/highcharts-php/
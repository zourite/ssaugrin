---
title: Creer un flux RSS avec DOMDocument
author: Zourite
type: post
date: 2012-09-12T08:47:11+00:00
description: "Depuis un certains temps, j'utilise DOMDocument pour générer mais fichier XML. Je vais donc vous montrer la voie sur le moyen de générer un Flux RSS à l'aide de cette librairie."
url: /creer-un-flux-rss-avec-domdocument/
featured: featured/creer-fluxrss-domdocument.jpg
hero: /img/hero/creer-fluxrss-domdocument.jpg
views:
  - 171
categories:
  - Programmation
tags:
  - Librairie
  - PHP
  - POO
  - RSS

---
### Qu&rsquo;est ce que DOMDocument ? 

DOMDocument est une librairie PHP, qui à fait son entrer avec PHP5. Cette librairie permet de créer ou de modifier un fichier **XML** ou **HTML**. DOMDocument est très semblable à Javascript aussi bien par le biais de ses fonctions ou par son fonctionement. Nous retrouvons donc le concept des **noeuds** ou encore la fameuse fonction `getElementById()`. 

**Plus besoin de faire :**

```php
 $xml = '<?xml version="1.0" encoding="UTF-8"?>';
 $xml .= '&lt;rss version="2.0">'; 
 $xml .= '&lt;channel>'; 
 $xml .= '

<title>
  Titre du flux
</title>';
```

 **Il suffit d&rsquo;écrire :**

```php
$file = new DOMDocument("1.0");
$root = $file->createElement("rss");
$root->setAttribute("version", "2.0"); 
$root = $file->appendChild($root); 
$element_channel = $file->createElement("channel"); 
$element_channel = $root->appendChild($element_channel);
```

Ok ! J&rsquo;admets que c&rsquo;est plus long de procéder ainsi, mais c&rsquo;est plus sexy, le code est plus agréable à lire et la procédure de maintenance en est simplifier. Il faudra au préalable respecter certains concepts de la POO, pour réellement trouver un intérêt à utiliser cette librairie. Je pense que l&rsquo;avantage principal de DOMDocument, ce situe dans le fait qu&rsquo;on à plus besoin d&rsquo;utiliser des fonctions tel que `fwrite()` ou `fopen()`, DOMDocument se charge de tout.

### Comment faire un Flux RSS ? 

C&rsquo;est très simple ! Il suffit de lire le tuto de [Baptiste Witch sur développez.net][2]. Non, je déconne ! Enfin pas tout à fait ce tuto est très bien fait, sauf qu&rsquo;il y à une erreur dans son script. J&rsquo;ai eu droit à `Fatal error: Call to a member function appendChild() on a non-object in`. Donc on reprend depuis le début, [téléchargez le fichier qu&rsquo;il fourni à la fin de son tuto][3].

Modifiez la fonction `createXML()` 

**Remplacer :**

```php
// Création du noeud channel 
$element_channel = $file->createElement("channel");//On crée un élément channel
$element_channel->setAttribute("id", "news"); //On donne un attribut id à notre channel
$element_channel = $root->appendChild($element_channel);//On ajoute cet élément à la racine
```

**Par :**

```php
// Création du noeud channel 
	 $element_channel = $file->createElement("channel");//On crée un élément channel 
	 $element_channel = $root->appendChild($element_channel);//On ajoute cet élément à la racine 
	 $element_id = $file->createAttribute("xml:id");
	 $element_id = $element_channel->appendChild($element_id); 
	 $element_idt = $file->createTextNode("news"); //On donne un attribut id à notre channel 
	 $element_idt = $element_id->appendChild($element_idt); 
	 $element_idt = $element_channel->setIdAttribute("xml:id", true);
``` 

Voila ! Vous pouvez maintenant suivre le reste de son tuto.

 [2]: http://baptiste-wicht.developpez.com/tutoriels/php/rss/ "Flux RSS PHP4 et PHP5"
 [3]: ftp://ftp-developpez.com/baptiste-wicht/tutoriel/php/rss/fichiers/RSSPHP5.php "Fichier de fonction PHP5 Flux RSS"
# CREATIS-OHIFViewer
OHIF zero-footprint DICOM viewer with segmentation plug-in https://docs.ohif.org/

﻿# Installation du viewer OHIF et outils de développement 

L'installation du **viewer OHIF** en version 2 est beaucoup plus simple et rapide que celle de la version 1.

## Installation
#### Prérequis 
* Node.js et NPM
* Yarn


Après avoir fork & clone le  repository [CREATIS-OHIFViewer](https://github.com/MathisGuilhin/CREATIS-OHIFViewer), naviguer dans le dossier root du projet (Viewers). 
On lance alors le script batch suivant, qui va rétablir les dépendances et lier les sous-modules

```shell
install
```
L'installation prend environ une demi-heure, le viewer est ensuite disponible à l'adresse http://localhost:5000/ en rentrant la commande 
```shell
yarn start
```
## Ajout de fonctionnalités
Ce qu'il est nécessaire d'avoir compris avant de continuer, c'est que tout ce qui se trouve en dehors du fichier `/src` de Viewer a un processus de build séparé. Si on veut avoir un impact sur le contenu de ces fichiers librairies/extensions ( [ohif-core](https://github.com/OHIF/ohif-core), [reactviewerbase](https://github.com/OHIF/react-viewerbase), [react-cornerstone-viewport](https://github.com/cornerstonejs/react-cornerstone-viewport), etc..), il faut nécessairement utiliser yalc.

### Installer Yalc

Il a été normalement installé lors de l'éxécution du script.
Sinon,

```shell
#Dans le repertoire Viewer par exemple
yarn global add yalc
```
### Modifications d'un sous module déjà lié (cornerstoneTools, react-viewerbase, ohif-core)
Admettons que je souhaite modifier un fichier de ohif-core. Après avoir navigué dans le dossier correspondant, je rentre les commandes suivantes :

```shell
yarn build 
yalc push
```
puis dans Viewer, j'exécute à nouveau :
```shell 
yarn run dev
```
### Modifications d'un nouveau sous module non lié

Admettons que je souhaite modifier un fichier de react-cornerstone-viewport, qui est déjà utilisé par le viewer, mais qui n'est pas localement sur ma machine. Après avoir navigué dans le dossier correspondant (que j'ai au préalable fork & clone dans Viewer), je rentre les commandes suivantes :
```shell
yarn install 
yalc publish
```
Je retourne ensuite dans le dossier Viewer et j’exécute : 
```shell
yarn install 
yalc add react-cornerstone-viewport 
yarn run dev
```
Dès a présent, yarn start lancera l'application avec ma version locale de react-cornerstone-viewport.
Cependant, à chaque modification de react-cornerstone-viewport, il faut exécuter (dans le dossier extension/librairie) :

```shell
yarn build 
yalc push
```
puis dans Viewer, exécuter de nouveau :
```shell 
yarn run dev
```

## Sécurisation par authentification 
#### Prérequis 
* docker

La [doc OHIF](https://docs.ohif.org/deployment/recipes/user-account-control.html) est complète à ce sujet.
Complément : il faut re-build à chaque modification pour update la version avec docker. Il est donc mieux de travailler sur la version "normale" et de build à la fin, car le build est (TRES) long.


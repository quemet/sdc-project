# sdc-project

## Dépendances pour ce projet

- ### Docker
  - Aller sur le site officiel de [Docker](https://www.docker.com/products/docker-desktop/)
  - Cliquer sur l'installer qui correspond à votre OS
  - Suiver l'installer et voila Docker est installé
- ### Node
  - Aller sur le site officiel de [Node](https://nodejs.org/fr)
  - Cliquer sur l'installer LTS
  - Suiver le guide et voila Node est installé

- ### Framework Adonis.js
  - Ouvre un terminal est tapé **npm i -g @adonisjs/cli**

## Setup

Clone le répertoire pour en faire une copie locale :  
**git clone https://github.com/quemet/sdc-project.git**

Se met dans le bon directory pour éxecuter les commandes :  
**cd sdc-project**

Build le Dockerfile qui est présent dans le repo :  
**docker build -t db:v1.0.0**

Run l'image crée précedemment pour en faire un container mysql :  
**docker run --name db -d -p 3306:3306 db:v1.0.0**

Execute l'application sur le port 3333 :  
**npm run dev**

Ouvrir le navigateur par défaut de la machine sur l'adresse localhost:3333 :  
**open https://localhost:3333**

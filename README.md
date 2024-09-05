# sdc-project

## Dépendances pour ce projet

- ### Docker
  - Go on the official Docker [website]()
- ### Node
  - Go on the official Node [website](https://nodejs.org/fr)
  - Click on the installer LTS
  - Follow the guide and here we are node is installed

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

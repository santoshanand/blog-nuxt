---
title: Deploy Angular Application To Firebase
description: 'How to deploy angular application to google fire store'
thumbnail: /gallery/firebase-hosting.jpg
tags:
  Angular
  Firebase
  AntDesign
---

Let's install some of the cli tools for the development and deployment.

>If you have already installed `angular cli` and `firebase tools` skip CLI installation.

<!--more-->
## CLI Installation
Install Angular Cli
```bash
npm i -g @angular/cli
```
Firebase Tools Cli
```bash 
npm i -g firebase-tools
```

After the installation generate the new Angular project using following command 
```bash
ng new angular-deploy
```
Go to project directory using 
```bash
cd angular-deploy
```
Till now we have complete angular part. To deploy the application into firebase hosting you should make a prod build.

Use following command to make a production build for the application.

```bash
ng build --prod
```
![Angular Build ](/gallery/angular-build.JPG "Angular Build")

It will transcompile all the js, html, css etc. You would see a new directory called `dist/angular-deploy` into the `angular-deploy` project.


## Firebase Login

If you are using `firebase-tools` very first time then you must need to login. Use following command to login into firebase.

```bash
firebase login
```
Above command will open a link into browser to login into your gmail account.

>Note: If you are already logged in into firebase-tool then it will not open any link.

I am assuming that you are in your project directory.

Let's setup firebase using following command
```bash
firebase init
```
It will ask `Are you ready to proceed?` then type `y` and hit enter

![Firebase Init ](/gallery/firebaseinit_1.JPG "Angular Init")

After that it will ask you to choose some option. In my case I have selected `Database` and `Hosting` using space bar of keyboard.

![Firebase option ](/gallery/firebaseinit_2.JPG "Firebase option")

Once you have selected the options (Database and Hosting) hit enter to continue.

Now it will ask you to choose existing project or create new project.

In my case I have choose to create new project.
and entered the `angular-deploy-25-12-2019`

>I have added date with project name because some time its not avaible because google keeping this name across the world. So if it will not be available project will not create.

![Firebase Project ](/gallery/firebaseinit_3.JPG "Firebase Project")

You need to specify the database rule file. In my case I have not specified anything and hit enter.

It will ask public director to deploy.

`? What do you want to use as your public directory?`

You should enter `dist/angular-deploy`
>You can always has an option to change these setting using `.firebaserc`

Finally it will ask you to `? Configure as a single-page app (rewrite all urls to /index.html)?`
Type `No` and hit enter.

![Firebase setup ](/gallery/firebaseinit_4.JPG "Firebase setup")

Once it has initialise successfully you would see above screen.

## Firebase Deploy

We went through several configuration now it time to deploy our application.

>Before deploying if you want to see change at local you can use `firebase serve` command.

```bash
firebase deploy
```
After successfully deploy you would see following screen.

![Firebase deploy ](/gallery/firebaseinit_5.JPG "Firebase deploy")

Used `Hosting URL` value to see the live application.

https://angular-deploy-25-12-2019.firebaseapp.com/

Great! now you and me have deployed a application on Firebase hosting.

GitHub source code https://github.com/santoshanand/angular-deploy










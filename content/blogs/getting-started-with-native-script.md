---
title: Getting Started With Native Script
description: 'Very basic tutorial for Native script developer'

tags: 
  - Native Script
  - Type Script
  - Android
  - iOS
category:
  - Native Script
thumbnail: /gallery/post3.png

---

<!-- <a href="https://github.com/santoshanand/helloworld/archive/master.zip" class="download">Download Code</a> -->

This tutorial help you to install NativeScript (https://www.nativescript.org/) on your machine. After completing this tutorial you will be able to run a basic project of Native Script. <a href="https://github.com/santoshanand/helloworld/archive/master.zip">Download Code</a>
<!--more-->
* <b>Introduction</b>
* <b>Prerequisites</b>
* <b>Installation</b>
* <b>Hello World</b>
* <b>Result</b>


**Introduction**
------------
NativeScript is free open source famework to building native **Android** and **iOS** app using Javascript and css. It is renders UI's with the native platform's rendering engine, so NativeScript does not have WebViews. It is pure native code.

**Prerequisites**
-------------
NativeScript CLI build on Nodejs so you must have to install Nodejs before using it. If you are using Mac and you have alredy installed brew (https://brew.sh) then open terminal and type following command to install Nodejs

``` bash
brew install nodejs
```

For other platform installation please check <a href="https://nodejs.org/">https://nodejs.org/</a>

**Installation**
------------
*I am assuming that you are using Mac*

``` bash
npm install -g nativescript
```

You may need to use sudo to install native script globally on Mac. For on the other platform installation of NativeScript please check there documentation (http://docs.nativescript.org/start/quick-setup)

**Hello World**
--------------

To create a Hello World project open the terminal and type following command

```bash
tns create HelloWorld
```
If you want to use TypeScript or Angular template please use following tags to create your project.

```bash
tns create HelloWorld --tsc // for TypeScript
 tns create HelloWorld --ng // for Angular
```
Go to HelloWorld project and using terminal and type following and hit enter to run the project on iOS emulator.

```bash
cd HelloWorld
```

```bash
tns run android --emulator // it will run into Android emulator
 tns run ios --emulator it will run into iOS emulator
```
It should launch an Android or iPhone emulator base on above command and run the project.

**Result**
-----------------------

![Native Script Hello World ](/gallery/output2.gif?raw=true "Hello World")

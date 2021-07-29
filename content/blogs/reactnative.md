---
title: React Native With Salesforce
description: 'Create react native application with Salesforce'

tags:
  - react native
  - salesforce mobile sdk
category:
  - React Native
thumbnail: /gallery/react_native_banner.jpg
---
In this tutorial you will learn to setup development environment, and we will install several tools like (**[homebrew](http://brew.sh/), [node](https://nodejs.org/en/), [cocoapods](https://cocoapods.org/)** etc). And after that, you'll be able to build Native apps using mainly React Native, JavaScript, CSS knowledge.

<!--more-->
> I am assuming that you have already installed [Xcode](https://developer.apple.com/xcode/download/).

**Install Homebrew**
``` bash
$ /usr/bin/ruby -e "$(curl -fsSL https://raw.githubusercontent.com/Homebrew/install/master/install)"

```
**Install Node**

``` bash
$ brew install node
```
**Install Cocoapods**

``` bash
$ sudo gem install cocoapods
```

**Install the forceios Package**

``` bash
$ sudo npm install forceios -g
```
**Create React Native project**

``` bash
$ forceios create
```

![please be patience it will take time to install npm dependency ](/gallery/terminal_force_create.png?raw=true "forceios create")

On terminal run following command.
``` bash
$ cd SalesforceReactHelloWorld
$ npm start
```

And now go to ios (**cd ios**) folder, open .xcworkspace file and hit play button to run project. In my case project file is "_SalesforceReactHelloWorld.xcworkspace_"

![React native salesforce output ](/gallery/output.gif?raw=true "React native salesforce output")

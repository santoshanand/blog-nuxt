---
title: Create Custom Component using Google Flutter
description: 'This tutorial will explain you to create the custom component using google flutter'

tags:
  - Flutter
  - iOS
  - Android
category:
  - Flutter
thumbnail: /gallery/custom_component.jpeg
---

In this very first Google Flutter blog I am going to build above login screen,
UI inspiration taken from <a href="https://www.uplabs.com/posts/unsplash-app-concept-9544f2ac-2ef9-4a10-8c46-d2958781b5e9">https://uplabs.com</a>

To make a generic component we have to identify the common components in the screen. If we take a closer look at screen, UI itself explaining two input (username, password) and two button ('Login with Facebook' and 'Login') are having similar UI.

<!--more-->

![InputComponent and ButtonComponent ](/gallery/custom1.jpeg "InputComponent and ButtonComponent")

Now you and me going to create above two components (Input and Button).

## Input Component

To create input component I have to extended the StatelessWidget or StatefulWidget. I choose to extend StatelessWidget because I do not need to maintain any state into this component. Input component constructor takes two parameters to get Placeholder and Input type values.

``` dart
import "package:flutter/material.dart";

class Input extends StatelessWidget {
  final String placeHolder;
  final bool isPassword;
  const Input({
    Key key,
    this.placeHolder,
    this.isPassword,
  }) : super(key: key);


  @override
  Widget build(BuildContext context) {
    return TextField(
      obscureText: this.isPassword == null ? false : this.isPassword,
      decoration: InputDecoration(
        filled: true,
        fillColor: Color(0xffEDEDED),
        hintText: this.placeHolder == null ? '' : this.placeHolder,
        focusedBorder: OutlineInputBorder(
          borderSide: BorderSide(color: Colors.black),
          borderRadius: BorderRadius.all(
            Radius.circular(50),
          ),
        ),
        border: OutlineInputBorder(
          borderRadius: BorderRadius.all(
            Radius.circular(50),
          ),
          borderSide: BorderSide(color: Color(0xffEDEDED), width: 0.0),
        ),
        contentPadding: EdgeInsets.all(18),
      ),
    );
  }
}
```

## Button Component

Button component is very similar to input component. it took color, borderRadius and label as a constructor parameters.
If you are not going to provide label value in constructor it will display "My Button" as a button label.

``` dart
import "package:flutter/material.dart";

class Button extends StatelessWidget {
  final String label;
  final Color color;
  final double borderRadius;
  const Button({
    Key key,
    this.label,
    this.color,
    this.borderRadius,
  }) : super(key: key);


  @override
  Widget build(BuildContext context) {
    return SizedBox(
      width: double.infinity,
      height: 60,
      child: FlatButton(
        color: this.color == null ? Colors.transparent : this.color,
        shape: RoundedRectangleBorder(
          borderRadius: BorderRadius.all(
            Radius.circular(this.borderRadius == null ? 0 : this.borderRadius),
          ),
        ),
        child: Text(
          this.label == null ? "My Button" : this.label,
          style: TextStyle(
              color: this.color == null ? Colors.black : Colors.white),
        ),
        onPressed: () {},
      ),
    );
  }
}
```

To create a vertical space between the component I have created VGap component.

``` dart
import "package:flutter/material.dart";

class VGap extends StatelessWidget {
  final double gap;
  const VGap({Key key, this.gap}) : super(key: key);
  @override
  Widget build(BuildContext context) {
    return SizedBox(
      height: (this.gap == null || this.gap.isNaN) ? 20 : this.gap,
    );
  }
}
```

Following are the full source code of Login page.

``` dart
import "package:flutter/material.dart";
import "package:unsplash/src/pages/login/widgets/button.dart";
import "package:unsplash/src/pages/login/widgets/input.dart";
import "package:unsplash/src/shared/widgets/v-gap.dart";
import "package:flutter_svg/flutter_svg.dart";

class Login extends StatefulWidget {
  @override
  _LoginState createState() => _LoginState();
}

class _LoginState extends State<Login> {
  @override
  Widget build(BuildContext context) {
    return Scaffold(
      body: Container(
        padding: EdgeInsets.all(20),
        child: Center(
          child: SizedBox(
            height: MediaQuery.of(context).size.height,
            width: double.infinity,
            child: SingleChildScrollView(
              child: Flex(
                direction: Axis.vertical,
                children: <Widget>[
                  VGap(
                    gap: 100,
                  ),
                  SvgPicture.asset('assets/images/svg/logo.svg'),
                  VGap(
                    gap: 50,
                  ),
                  Button(
                    color: Color(0xff3C5080),
                    borderRadius: 60,
                    label: 'Login with Facebook',
                  ),
                  VGap(),
                  Text('or'),
                  VGap(),
                  Input(
                    placeHolder: 'Username or email',
                  ),
                  VGap(),
                  Input(
                    placeHolder: 'Password',
                    isPassword: true,
                  ),
                  VGap(),
                  Button(
                    color: Colors.black,
                    borderRadius: 60,
                    label: 'Login',
                  ),
                  VGap(),
                  Text('Forgot password?'),
                  VGap(),
                  Flex(
                    mainAxisAlignment: MainAxisAlignment.center,
                    direction: Axis.horizontal,
                    children: <Widget>[
                      Text('Do not have an account?'),
                      Text(
                        'Join',
                        style: TextStyle(fontWeight: FontWeight.bold),
                      ),
                    ],
                  )
                ],
              ),
            ),
          ),
        ),
      ),
    );
  }
}

```

If you still wanted to see full source code of this page.
Please visit this link https://github.com/santoshanand/unsplash

Stay tune for more blogs!
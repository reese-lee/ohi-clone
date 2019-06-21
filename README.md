# _Ocean Health Index Site Clone_

#### _A website rebuilt from the original [Ocean Health Index](http://www.oceanhealthindex.org/) website, June 14, 2019._

#### By _**Reese Lee**_

## Description

_A website that is rebuilt from the OHI website to practice Angular._

## Setup/Installation Requirements

* _First, clone from [GitHub repo](https://github.com/reese-lee/ohi-clone.git)_
* _$cd ohi-clone_
* _$npm install_
* _Set up your own Firebase credentials, as listed below_

## Firebase Setup Instructions

* _Login to Firebase, or create a new account_
* _Click Create a New Project_
* _Provide a name for this project, "OHI-Clone"_
* _Select your country/region from the drop-down menu_
* _Select Add Firebase to your web app_
* _$ npm install angularfire2@4.0.0-rc.0 firebase@^3.6.6 --save_
* _In your tsconfig.json file, add "types": [ "firebase" ] at the bottom_
* _Create a file named api-keys.ts at the top of your project directory, and add it to the .gitignore file_
* _Copy and past the following information into that file, replacing all "xxxx" placeholders with information from your Firebase project overview:_

| copy and paste the code below |
| --- |
| { export const masterFirebaseConfig = {
    apiKey: "xxxx",
    authDomain: "xxxx.firebaseapp.com",
    databaseURL: "https://xxxx.firebaseio.com",
    storageBucket: "xxxx.appspot.com",
    messagingSenderId: "xxxx"
  }; }|

* _In your app.module.ts file, copy and paste the following to replace the entire file:_



* _4. $ng serve --o (this will automatically open the page)_

## Specs

| Current Functionality        |
| ------------- |
| 1. The user can view the first half of the splash page |
| 2. The top navigation bar hosts drop-down menus |
| 3. The jellyfish element is the same one as the official site |

| Functionality to be added        |
| ------------- |
| Hyperlink all links    |
| Firebase implementation |
| Jellyfish animation |
| Hover effect for top nav-bar |
| Add footer |

## Support and contact details

_Please contact reese.lee.cy@gmail.com if you run into any issues or have questions, ideas or feedback._

## Technologies Used

_JavaScript, HTML, CSS, Angular, Material, Bootstrap_

### License

*MIT license.*

Copyright (c) 2019 **_Reese Lee_**

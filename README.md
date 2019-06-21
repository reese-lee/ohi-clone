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
```typescript
 export const masterFirebaseConfig = {
      apiKey: "xxxx",
      authDomain: "xxxx.firebaseapp.com",
      databaseURL: "https://xxxx.firebaseio.com",
      storageBucket: "xxxx.appspot.com",
      messagingSenderId: "xxxx"
    };
```

* _In your app.module.ts file, copy and paste the following to replace the entire file:_
```typescript
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { routing } from './app.routing';
import { AppComponent } from './app.component';
import { WelcomeComponent } from './welcome/welcome.component';
import { AboutComponent } from './about/about.component';
import { MarketplaceComponent } from './marketplace/marketplace.component';
import { AlbumDetailComponent } from './album-detail/album-detail.component';
import { masterFirebaseConfig } from './api-keys';
import { AngularFireModule } from 'angularfire2';
import { AngularFireDatabaseModule } from 'angularfire2/database';

export const firebaseConfig = {
  apiKey: masterFirebaseConfig.apiKey,
  authDomain: masterFirebaseConfig.authDomain,
  databaseURL: masterFirebaseConfig.databaseURL,
  storageBucket: masterFirebaseConfig.storageBucket
};

@NgModule({
  declarations: [
    AppComponent,
    WelcomeComponent,
    AboutComponent,
    MarketplaceComponent,
    AlbumDetailComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    routing,
    AngularFireModule.initializeApp(firebaseConfig),
    AngularFireDatabaseModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
```
* _Return to your Firebase console, and go to the Database section. Select Realtime Database, and click on the Rules tab. Switch the "false" values to "true" on both properties (as seen below):_
```
{
  "rules": {
    ".read": "true",
    ".write": "true"
  }
}
```
* _$ng serve --o (this will automatically open the page)_

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

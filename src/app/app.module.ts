import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { MDBBootstrapModule } from 'angular-bootstrap-md';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { AppComponent } from './app.component';
// import { routing } from './app.routing';
import { ParallaxBannerComponent } from './parallax-banner/parallax-banner.component';
import { FooterComponent } from './footer/footer.component';
import { NewsComponent } from './news/news.component';
// import { Component } from '@angular/core';
// import { AngularFirestore } from '@angular/fire/firestore';
// import { Observable } from 'rxjs';
//
//
// @Component({
//   selector: 'app-root',
//   template: `
//   <ul>
//     <li *ngFor="let item of items | async">
//       {{ item.name }}
//     </li>
//   </ul>
//   `
// })
// export class MyApp {
//   items: Observable<any[]>;
//   constructor(db: AngularFirestore) {
//     this.items = db.collection('items').valueChanges();
//   }
// }
import { masterFirebaseConfig } from './api-keys';
import { AngularFireModule } from '@angular/fire';
import { AngularFireDatabaseModule } from '@angular/fire/database';

export const firebaseConfig = {
  apiKey: masterFirebaseConfig.apiKey,
  authDomain: masterFirebaseConfig.authDomain,
  databaseURL: masterFirebaseConfig.databaseURL,
  storageBucket: masterFirebaseConfig.storageBucket
};

@NgModule({
  declarations: [
    AppComponent,
    ParallaxBannerComponent,
    FooterComponent,
    NewsComponent
  ],
  imports: [
    BrowserModule,
    MDBBootstrapModule.forRoot(),
    FormsModule,
    HttpModule,
    AngularFireModule.initializeApp(firebaseConfig),
    AngularFireDatabaseModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

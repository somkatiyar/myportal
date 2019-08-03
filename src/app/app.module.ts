import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AngularFireModule } from '@angular/fire';
import { AngularFirestoreModule } from '@angular/fire/firestore';
import { AngularFireStorageModule, } from '@angular/fire/storage';
import { AngularFireAuthModule } from '@angular/fire/auth';
import { environment } from '../environments/environment';



import { AppComponent } from './app.component';
import { CoreModule } from './core/core.module';
import { SharedModule } from './shared/shared.module';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import { PostsModule } from './posts/posts.module';
import { RouterModule, Routes } from '@angular/router';
import { EmailComponent } from './Email/email.component';

const routes: Routes = [
  { path: "",  redirectTo:"/blog", pathMatch:"full" },
  { path: "contact",  component:EmailComponent},
  { path: "", loadChildren: "./posts/posts.module#PostsModule" },
]


@NgModule({
  declarations: [
    AppComponent,
    EmailComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    RouterModule.forRoot(routes),
    CoreModule,
    SharedModule,
    PostsModule,
    AngularFireModule.initializeApp(environment.firebaseConfig), // imports firebase/app needed for everything
    AngularFirestoreModule, // imports firebase/firestore, only needed for database features
    AngularFireAuthModule, // imports firebase/auth, only needed for auth features,
    AngularFireStorageModule, PostsModule ,
   
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

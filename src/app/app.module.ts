import {BrowserModule} from '@angular/platform-browser';
import {ErrorHandler, NgModule} from '@angular/core';
import {IonicApp, IonicErrorHandler, IonicModule} from 'ionic-angular';
import {SplashScreen} from '@ionic-native/splash-screen';
import {StatusBar} from '@ionic-native/status-bar';
import {Camera} from '@ionic-native/camera';
import {AngularFireModule} from 'angularfire2';
import {AngularFireDatabaseModule} from 'angularfire2/database';

import {SpeechRecognition} from '@ionic-native/speech-recognition';

import {Geolocation} from '@ionic-native/geolocation';
import {BackgroundGeolocation} from '@ionic-native/background-geolocation';
import {Geofence} from '@ionic-native/geofence';

import {MyApp} from './app.component';
import {HomePage} from '../pages/home/home';
import {VeiculoCadastro} from '../pages/veiculoCadastro/veiculoCadastro';
import {VeiculoView} from '../pages/veiculoView/veiculoView';

export const firebaseConf = {
  apiKey: "AIzaSyAIK9Vc_ZFque4PKKXLyaHj3yTfWYXZpmk",
  authDomain: "kmmed-a7b91.firebaseapp.com",
  databaseURL: "https://kmmed-a7b91.firebaseio.com",
  projectId: "kmmed-a7b91",
  storageBucket: "kmmed-a7b91.appspot.com",
  messagingSenderId: "830000956131"
};

@NgModule({
  declarations: [
    MyApp,
    HomePage,
    VeiculoCadastro,
    VeiculoView
  ],
  imports: [
    BrowserModule,
    IonicModule.forRoot(MyApp),
    AngularFireModule.initializeApp(firebaseConf),
    AngularFireDatabaseModule
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    HomePage,
    VeiculoCadastro,
    VeiculoView
  ],
  providers: [
    StatusBar,
    SplashScreen,
    Geolocation,
    BackgroundGeolocation,
    Geofence,
    Camera,
    SpeechRecognition,
    {provide: ErrorHandler, useClass: IonicErrorHandler}
  ]
})
export class AppModule {
}

import {Component, NgZone} from '@angular/core';
import {NavController, ModalController} from 'ionic-angular';
import {AngularFireDatabase, FirebaseListObservable} from 'angularfire2/database';
import {Camera, CameraOptions} from '@ionic-native/camera';
import {SpeechRecognition, SpeechRecognitionListeningOptionsAndroid} from '@ionic-native/speech-recognition';

import {VeiculoCadastro} from '../veiculoCadastro/veiculoCadastro';
import {VeiculoView} from '../veiculoView/veiculoView';

import {BackgroundGeolocation} from '@ionic-native/background-geolocation';
import {Geolocation, Geoposition} from '@ionic-native/geolocation';
import {Geofence} from '@ionic-native/geofence';

import * as resemble from 'resemblejs/resemble.js';

import 'rxjs/Rx';
import {Observable} from "rxjs/Observable";

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {
  veiculos: FirebaseListObservable<any>;

  watch: any;
  history: any;
  latBack: number = 0;
  lngBack: number = 0;

  lat: number = 0;
  lng: number = 0;

  getraios: Array<any> = [];

  public teste = ['teste', 'rrr', 'tesdaste', 'rrdasdr'];

  tese: string;

  constructor(public navCtrl: NavController,
              private modalCtrl: ModalController,
              private af: AngularFireDatabase,
              private zone: NgZone,
              private backgroundGeolocation: BackgroundGeolocation,
              private geolocation: Geolocation,
              private geofence: Geofence,
              private speech: SpeechRecognition,
              private camera: Camera) {
    // this.veiculos = af.list('/veiculos');

    // let options = {
    //   frequency: 3000,
    //   enableHighAccuracy: true
    // };
    //
    // this.geolocation.watchPosition(options).filter((p: any) => p.code === undefined).subscribe((position: Geoposition) => {
    //   this.zone.run(() => {
    //     this.lat = position.coords.latitude;
    //     this.lng = position.coords.longitude;
    //   });
    // });
    //
    // geofence.initialize().then(() => {
    //     geofence.onTransitionReceived().subscribe((res) => {
    //       this.zone.run(() => {
    //         this.getraios.push(res[0]);
    //         console.log('onTransitionReceived');
    //         console.log(res);
    //       })
    //     });
    //   }, (err) => console.log(err)
    // );
    // this.addGeofence();

    speech.hasPermission()
      .then((hasPermission: boolean) => {
        console.log(hasPermission);
        if (!hasPermission) {
          speech.requestPermission()
            .then(
              () => console.log('Granted'),
              () => console.log('Denied')
            )
        }

      });
  }

  listSpeech() {
    let op = {
      language: 'pt-BR',
      showPopup: false
    };

    this.speech.startListening(op)
      .subscribe(
        (matches) => {
          console.log(matches);
        },
        (onerror) => console.log('error:', onerror)
      )
  }

  press() {
    console.log('press');
  }

  upp(){
    console.log('up');
  }

  //pt-BR

  // getStores() {
  //   setTimeout(() => {
  //     this.tese = 'testes';
  //     console.log(this.tese);
  //   }, 2000);
  //
  // }
  //
  // addGeofence() {
  //   //options describing geofence
  //   let fence = {
  //     id: 'teste', //any unique ID
  //     latitude: -15.850955, //center of geofence radius
  //     longitude: -47.950515,
  //     radius: 20, //radius to edge of geofence in meters
  //     transitionType: 3, //see 'Transition Types' below
  //   };
  //
  //   this.geofence.addOrUpdate(fence).then(() => {}, (err) => console.log('Geofence failed to add'));
  // }
  //
  // start() {
  //   let config = {
  //     desiredAccuracy: 0,
  //     stationaryRadius: 20,
  //     distanceFilter: 10,
  //     debug: true,
  //     interval: 2000
  //   };
  //
  //   this.backgroundGeolocation.configure(config).subscribe((location) => {
  //
  //     console.log('BackgroundGeolocation:  ' + location.latitude + ',' + location.longitude);
  //
  //     this.zone.run(() => {
  //       this.latBack = location.latitude;
  //       this.lngBack = location.longitude;
  //     });
  //   }, (err) => {
  //     console.log(err);
  //   });
  //
  //   this.backgroundGeolocation.start();
  //
  //   let options = {
  //     frequency: 3000,
  //     enableHighAccuracy: true
  //   };
  //
  //   this.watch = this.geolocation.watchPosition(options).filter((p: any) => p.code === undefined).subscribe((position: Geoposition) => {
  //
  //     console.log(position);
  //
  //     // Run update inside of Angular's zone
  //     this.zone.run(() => {
  //       this.lat = position.coords.latitude;
  //       this.lng = position.coords.longitude;
  //     });
  //
  //   });
  //   console.log('start');
  // }
  //
  // getgeo() {
  //   console.log('get');
  //   this.backgroundGeolocation.getLocations().then((res) => {
  //     this.history = res;
  //     console.log(res);
  //   });
  // }
  //
  // stop() {
  //   console.log('stop');
  //
  //   this.backgroundGeolocation.finish();
  //   this.watch.unsubscribe();
  // }
  //
  // cadastroVeiculo() {
  //   this.navCtrl.push(VeiculoCadastro);
  // }
  //
  // remover(id) {
  //   this.af.object('/veiculos/' + id).remove();
  // }
  //
  // view(veiculo) {
  //   let modal = this.modalCtrl.create(VeiculoView, {veiculo: veiculo});
  //   modal.present();
  // }
  //
  // openCam1() {
  //   let options: CameraOptions = {
  //     quality: 100,
  //     destinationType: this.camera.DestinationType.DATA_URL,
  //     encodingType: this.camera.EncodingType.JPEG,
  //     mediaType: this.camera.MediaType.PICTURE
  //   };
  //
  //   this.camera.getPicture(options).then((imageData) => {
  //     this.img1 = imageData;
  //   });
  // }
  //
  // openCam2() {
  //   let options: CameraOptions = {
  //     quality: 100,
  //     destinationType: this.camera.DestinationType.DATA_URL,
  //     encodingType: this.camera.EncodingType.JPEG,
  //     mediaType: this.camera.MediaType.PICTURE
  //   };
  //
  //   this.camera.getPicture(options).then((imageData) => {
  //     this.img2 = imageData;
  //   });
  // }
  //
  // compCam() {
  //   resemble('data:image/png;base64,' + this.img1)
  //     .compareTo('data:image/png;base64,' + this.img2)
  //     .ignoreColors()
  //     .onComplete(function (data) {
  //       console.log(data);
  //     });
  // }
}

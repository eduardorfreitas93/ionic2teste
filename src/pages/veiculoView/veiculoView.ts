import {Component} from '@angular/core';
import {LoadingController, NavController, NavParams, ViewController} from 'ionic-angular';
import {AngularFireDatabase, FirebaseListObservable} from "angularfire2/database";

import {Veiculo, Km} from '../../model/index';

@Component({
  selector: 'veiculo-view',
  templateUrl: 'veiculoView.html'
})
export class VeiculoView {
  veiculo: Veiculo;
  km: Km;
  listKm: FirebaseListObservable<any>;

  constructor(public navCtrl: NavController,
              private params: NavParams,
              private viewCtrl: ViewController,
              private loadingCtrl: LoadingController,
              private af: AngularFireDatabase) {
    this.veiculo = params.get('veiculo');
    this.listKm = af.list('/km');
    this.km = new Km();
  }

  salvar() {
    this.km.data = new Date().getTime();
    this.km.idVeiculo = this.veiculo.$key;

    this.listKm.push(this.km).then(() => {
      this.km.km = '';
    })
  }

  fechar(){
    this.viewCtrl.dismiss();
  }

}

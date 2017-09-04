import {Component} from '@angular/core';
import {LoadingController, NavController, ViewController} from 'ionic-angular';
import {AngularFireDatabase} from 'angularfire2/database';

import {Veiculo} from '../../model/index';

@Component({
  selector: 'veiculo-cadastro',
  templateUrl: 'veiculoCadastro.html'
})
export class VeiculoCadastro {
  veiculo: Veiculo;
  refVeiculo;

  constructor(public navCtrl: NavController,
              private viewCtrl: ViewController,
              private loadingCtrl: LoadingController,
              private af: AngularFireDatabase) {
    this.refVeiculo = af.database.ref('/veiculos');

    this.veiculo = new Veiculo();
  }

  salvar() {
    let load = this.loadingCtrl.create({
      content: 'carregando...'
    });
    load.present();
    this.refVeiculo.push(this.veiculo).then(() => {
      this.veiculo = new Veiculo();
      load.dismiss();
      this.viewCtrl.dismiss();
    })
  }

}

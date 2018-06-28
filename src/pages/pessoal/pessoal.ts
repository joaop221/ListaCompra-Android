import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { Lista1Page } from '../lista1/lista1';

@Component({
  selector: 'page-pessoal',
  templateUrl: 'pessoal.html'
})
export class PessoalPage {

  constructor(public navCtrl: NavController) {
  }
  goToLista1(params){
    if (!params) params = {};
    this.navCtrl.push(Lista1Page);
  }
}

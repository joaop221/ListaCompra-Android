import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { CadItemPage } from '../cad-item/cad-item';

@Component({
  selector: 'page-lista1',
  templateUrl: 'lista1.html'
})
export class Lista1Page {

  constructor(public navCtrl: NavController) {
  }
    goToCadItem(params){
    if (!params) params = {};
    this.navCtrl.push(CadItemPage);
  } 
}
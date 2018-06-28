import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { PessoalPage } from '../pessoal/pessoal';
import { AddGroupPage } from '../add-group/add-group';

@Component({
  selector: 'page-meus-grupos',
  templateUrl: 'meus-grupos.html'
})
export class MeusGruposPage {
  public retorno_grupo:string;
  public nome_grupo:string ="Aqui";

  constructor(public navCtrl: NavController) {
  }
  goToPessoal(params){
    if (!params) params = {};
    this.navCtrl.push(PessoalPage);
  }goToAddGroup(params){
    if (!params) params = {};
    this.navCtrl.push(AddGroupPage);
  }
}

import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { SignupPage } from '../signup/signup';
import { LoginPage } from '../login/login';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  constructor(public navCtrl: NavController) {

  }

  goToLogin(params){
    if (!params) params = {};
    this.navCtrl.push(LoginPage);
  }
   goToSignUp(params){
    if (!params) params = {};
    this.navCtrl.push(SignupPage);
  }

}

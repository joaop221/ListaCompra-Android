import { Component } from '@angular/core';
import { SignupPage } from '../signup/signup';
import {UsersProvider} from '../../providers/users/users';
import {IonicPage, NavController, NavParams, ToastController} from 'ionic-angular';

@Component({
  selector: 'page-login',
  templateUrl: 'login.html'
})
export class LoginPage {

  user = { email: '', password: ''};

  constructor(public navCtrl: NavController, public navParams: NavParams, public usersProvider: UsersProvider, private toast: ToastController ) {
  }
  goToForgetMyPwd(params){
    if (!params) params = {};
    this.navCtrl.push(SignupPage);
  }

  saveUser() {
    this.usersProvider.login
    (this.user.email, this.user.password).then((result) => {
      console.log(result);
    }, (err) => {
      console.log(err);
      this.toast.create({ message: 'Erro ao fazer o login.', duration: 3000, position: 'botton' }).present();
    });
  }
}

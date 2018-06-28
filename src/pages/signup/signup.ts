import { UsersProvider } from './../../providers/users/users';
import { Component } from '@angular/core';
import { NavController, NavParams, ToastController } from 'ionic-angular';

@Component({
  selector: 'page-signup',
  templateUrl: 'signup.html'
})

export class SignupPage {
  model: User;
 
  constructor(public navCtrl: NavController, public navParams: NavParams, private toast: ToastController, private userProvider: UsersProvider) {
    this.model = new User();
    this.model.nome = 'nome';
    this.model.email = 'sydney@fife';
    this.model.password = 'pistol';
  }
  createAccount() {
    this.userProvider.createAccount(this.model.nome, this.model.email, this.model.password)
      .then((result: any) => {
        this.toast.create({ message: 'Usuário criado com sucesso. Token: ' + result.token, position: 'botton', duration: 3000 }).present();
 
        //Salvar o token no Ionic Storage para usar em futuras requisições.
        //Redirecionar o usuario para outra tela usando o navCtrl
        //this.navCtrl.pop();
        //this.navCtrl.setRoot()
      })
      .catch((error: any) => {
        this.toast.create({ message: 'Erro ao criar o usuário. Erro: ' + error.error, position: 'botton', duration: 3000 }).present();
      });
  }
}
 
export class User {
  nome: string;
  email: string;
  password: string;
}
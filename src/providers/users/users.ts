import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import {IonicPage, NavController, NavParams, ToastController} from 'ionic-angular';

/*
  Generated class for the UsersProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
@Injectable()
export class UsersProvider {
  private API_URL = 'https://reqres.in/api/'
 
  constructor(public http: HttpClient, private toast: ToastController) { }
 
  createAccount(nome: string, email: string, senha: string) {
    return new Promise((resolve, reject) => {
      var data = {
        nome: nome,
        email: email,
        senha: senha
      };
      this.http.post(this.API_URL+'/users', data, {
        headers: new HttpHeaders().set('Authorization', 'my-auth-token')
      })
      .subscribe(res => {
        resolve(res);
      }, (err) => {
        reject(err);
      });
    });
  }
    
 
  login(email: string, password: string) {
    return new Promise((resolve, reject) => {
      var data = {
        email: email,
        password: password
      };
 
      this.http.post(this.API_URL + 'login', data)
        .subscribe((result: any) => {
          resolve(result.json());
        },
        (error) => {
          this.toast.create({ message: 'Erro ao realizar o login.', duration: 3000, position: 'botton' }).present();
          reject(error.json());
        });
    });
  }
 
  getAll(page: number) {
    return new Promise((resolve, reject) => {
 
      let url = this.API_URL + 'users/?per_page=10&page=' + page;
 
      this.http.get(url)
        .subscribe((result: any) => {
          resolve(result.json());
        },
        (error) => {
          reject(error.json());
        });
    });
  }
 
  get(id: number) {
    return new Promise((resolve, reject) => {
      let url = this.API_URL + 'users/' + id;
 
      this.http.get(url)
        .subscribe((result: any) => {
          resolve(result.json());
        },
        (error) => {
          reject(error.json());
        });
    });
  }
 
  insert(user: any) {
    return new Promise((resolve, reject) => {
      let url = this.API_URL + 'users/';
 
      this.http.post(url, user)
        .subscribe((result: any) => {
          resolve(result.json());
        },
        (error) => {
          reject(error.json());
        });
    });
  }
 
  update(user: any) {
    return new Promise((resolve, reject) => {
      let url = this.API_URL + 'users/' + user.id;
      let data = {
        "first_name": user.first_name,
        "last_name": user.last_name
      }
 
      this.http.put(url, user)
        .subscribe((result: any) => {
          resolve(result.json());
        },
        (error) => {
          reject(error.json());
        });
    });
  }
 
  remove(id: number) {
    return new Promise((resolve, reject) => {
      let url = this.API_URL + 'users/' + id;
 
      this.http.delete(url)
        .subscribe((result: any) => {
          resolve(result.json());
        },
        (error) => {
          reject(error.json());
        });
    });
  }
}

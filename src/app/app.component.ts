import { Component, ViewChild } from '@angular/core';
import { Nav, Platform } from 'ionic-angular';
import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';

import { HomePage } from '../pages/home/home';
import { MeusGruposPage } from '../pages/meus-grupos/meus-grupos';
import { PessoalPage } from '../pages/pessoal/pessoal';
import { Lista1Page } from '../pages/lista1/lista1';
import { ListasPage } from '../pages/listas/listas';
import { ConfiguraEsPage } from '../pages/configura-es/configura-es';
import { AjudaPage } from '../pages/ajuda/ajuda';

@Component({
  templateUrl: 'app.html'
})
export class MyApp {
  @ViewChild(Nav) nav: Nav;

  rootPage: any = HomePage;

  pages: Array<{title: string, component: any}>;

  constructor(public platform: Platform, public statusBar: StatusBar, public splashScreen: SplashScreen) {
    this.initializeApp();

    // used for an example of ngFor and navigation
    this.pages = [
      { title: 'Home', component: HomePage }
    ];

  }

  goToMeusGrupos(params){
    if (!params) params = {};
    this.nav.setRoot(MeusGruposPage);
  }goToPessoal(params){
    if (!params) params = {};
    this.nav.setRoot(PessoalPage);
  }goToLista1(params){
    if (!params) params = {};
    this.nav.setRoot(Lista1Page);
  }goToListas(params){
    if (!params) params = {};
    this.nav.setRoot(ListasPage);
  }goToConfiguraEs(params){
    if (!params) params = {};
    this.nav.setRoot(ConfiguraEsPage);
  }goToAjuda(params){
    if (!params) params = {};
    this.nav.setRoot(AjudaPage);
  }

  //verifica se usuario esta logado ou se for primeiro acesso
  // checkPreviousAuthorization(): void { 
  //   if((window.localStorage.getItem('username') === "undefined" || window.localStorage.getItem('username') === null) && 
  //      (window.localStorage.getItem('password') === "undefined" || window.localStorage.getItem('password') === null)) {
  //     this.rootPage = MeusGruposPage;
  //   } else {
  //     this.rootPage = HomePage;
  //   }
  // }

  initializeApp() {
    this.platform.ready().then(() => {
      // Okay, so the platform is ready and our plugins are available.
      // Here you can do any higher level native things you might need.
      this.statusBar.styleDefault();
      this.splashScreen.hide();
    });
  }

  openPage(page) {
    // Reset the content nav to have just this page
    // we wouldn't want the back button to show in this scenario
    this.nav.setRoot(page.component);
  }
}

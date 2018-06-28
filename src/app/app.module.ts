import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';
import { IonicStorageModule } from '@ionic/storage';

import { MyApp } from './app.component';
import { HomePage } from '../pages/home/home';
import { ListasPage } from '../pages/listas/listas';
import { MeusGruposPage } from '../pages/meus-grupos/meus-grupos';
import { ConfiguraEsPage } from '../pages/configura-es/configura-es';
import { AjudaPage } from '../pages/ajuda/ajuda';
import { LoginPage } from '../pages/login/login';
import { SignupPage } from '../pages/signup/signup';
import { Lista1Page } from '../pages/lista1/lista1';
import { PessoalPage } from '../pages/pessoal/pessoal';

import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';
import { CadItemPage } from '../pages/cad-item/cad-item';
import { AddGroupMemberPage } from '../pages/add-group-member/add-group-member';
import { AddGroupPage } from '../pages/add-group/add-group';
import { AddListPage } from '../pages/add-list/add-list';

import { HttpClientModule  } from '@angular/common/http';
import { UsersProvider } from '../providers/users/users';

@NgModule({
  declarations: [
    MyApp,
    HomePage,
    MeusGruposPage,
    ListasPage,
    ConfiguraEsPage,
    AjudaPage,
    LoginPage,
    SignupPage,
    Lista1Page,
    PessoalPage,
    CadItemPage,
    AddGroupMemberPage,
    AddGroupPage,
    AddListPage
  ],
  imports: [
    BrowserModule,
    IonicModule.forRoot(MyApp),
    HttpClientModule,
    IonicStorageModule.forRoot()
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    HomePage,
    CadItemPage,
    MeusGruposPage,
    ListasPage,
    ConfiguraEsPage,
    AjudaPage,
    LoginPage,
    SignupPage,
    Lista1Page,
    PessoalPage,
    AddGroupMemberPage,
    AddGroupPage,
    AddListPage
  ],
  providers: [
    StatusBar,
    SplashScreen,
    {provide: ErrorHandler, useClass: IonicErrorHandler},
    UsersProvider
  ]
})
export class AppModule {}

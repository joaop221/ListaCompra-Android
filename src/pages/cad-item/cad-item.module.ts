import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { CadItemPage } from './cad-item';

@NgModule({
  declarations: [
    CadItemPage,
  ],
  imports: [
    IonicPageModule.forChild(CadItemPage),
  ],
})
export class CadItemPageModule {}

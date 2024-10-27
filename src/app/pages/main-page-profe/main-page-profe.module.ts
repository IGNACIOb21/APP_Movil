import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { MainPageProfePageRoutingModule } from './main-page-profe-routing.module';

import { MainPageProfePage } from './main-page-profe.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    MainPageProfePageRoutingModule
  ],
  declarations: [MainPageProfePage]
})
export class MainPageProfePageModule {}

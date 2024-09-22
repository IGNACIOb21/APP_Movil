import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { MainPage2PageRoutingModule } from './main-page2-routing.module';

import { MainPage2Page } from './main-page2.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    MainPage2PageRoutingModule
  ],
  declarations: [MainPage2Page]
})
export class MainPage2PageModule {}

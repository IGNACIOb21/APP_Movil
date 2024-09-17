import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { RetaContraPageRoutingModule } from './reta-contra-routing.module';

import { RetaContraPage } from './reta-contra.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RetaContraPageRoutingModule
  ],
  declarations: [RetaContraPage]
})
export class RetaContraPageModule {}

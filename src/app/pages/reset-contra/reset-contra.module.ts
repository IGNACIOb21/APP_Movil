import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ResetContraPageRoutingModule } from './reset-contra-routing.module';

import { ResetContraPage } from './reset-contra.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ResetContraPageRoutingModule
  ],
  declarations: [ResetContraPage]
})
export class ResetContraPageModule {}

import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { RetaContraPage } from './reta-contra.page';

const routes: Routes = [
  {
    path: '',
    component: RetaContraPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class RetaContraPageRoutingModule {}

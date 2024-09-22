import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { MainPageProfePage } from './main-page-profe.page';

const routes: Routes = [
  {
    path: '',
    component: MainPageProfePage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class MainPageProfePageRoutingModule {}

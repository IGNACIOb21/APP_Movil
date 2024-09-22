import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { MainPage2Page } from './main-page2.page';

const routes: Routes = [
  {
    path: '',
    component: MainPage2Page
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class MainPage2PageRoutingModule {}

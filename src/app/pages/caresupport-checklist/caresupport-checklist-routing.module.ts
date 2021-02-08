import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { CaresupportChecklistPage } from './caresupport-checklist.page';

const routes: Routes = [
  {
    path: '',
    component: CaresupportChecklistPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class CaresupportChecklistPageRoutingModule {}

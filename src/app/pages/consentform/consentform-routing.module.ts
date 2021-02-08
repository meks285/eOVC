import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ConsentformPage } from './consentform.page';

const routes: Routes = [
  {
    path: '',
    component: ConsentformPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ConsentformPageRoutingModule {}

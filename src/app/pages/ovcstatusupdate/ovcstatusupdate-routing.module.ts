import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { OvcstatusupdatePage } from './ovcstatusupdate.page';

const routes: Routes = [
  {
    path: '',
    component: OvcstatusupdatePage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class OvcstatusupdatePageRoutingModule {}

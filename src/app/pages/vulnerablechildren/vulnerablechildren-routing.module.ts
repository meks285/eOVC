import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { VulnerablechildrenPage } from './vulnerablechildren.page';

const routes: Routes = [
  {
    path: '',
    component: VulnerablechildrenPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class VulnerablechildrenPageRoutingModule {}

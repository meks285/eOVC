import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { VulnerablehouseholdrefPage } from './vulnerablehouseholdref.page';

const routes: Routes = [
  {
    path: '',
    component: VulnerablehouseholdrefPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class VulnerablehouseholdrefPageRoutingModule {}

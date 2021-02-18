import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { CommunitypaediatricPage } from './communitypaediatric.page';

const routes: Routes = [
  {
    path: '',
    component: CommunitypaediatricPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class CommunitypaediatricPageRoutingModule {}

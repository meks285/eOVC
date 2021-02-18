import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { CommunitypaediatricPageRoutingModule } from './communitypaediatric-routing.module';

import { CommunitypaediatricPage } from './communitypaediatric.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    CommunitypaediatricPageRoutingModule
  ],
  declarations: [CommunitypaediatricPage]
})
export class CommunitypaediatricPageModule {}

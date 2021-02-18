import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { OvcstatusupdatePageRoutingModule } from './ovcstatusupdate-routing.module';

import { OvcstatusupdatePage } from './ovcstatusupdate.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    OvcstatusupdatePageRoutingModule
  ],
  declarations: [OvcstatusupdatePage]
})
export class OvcstatusupdatePageModule {}

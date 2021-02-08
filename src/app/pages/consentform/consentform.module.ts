import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ConsentformPageRoutingModule } from './consentform-routing.module';

import { ConsentformPage } from './consentform.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ConsentformPageRoutingModule
  ],
  declarations: [ConsentformPage]
})
export class ConsentformPageModule {}

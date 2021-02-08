import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { CaresupportChecklistPageRoutingModule } from './caresupport-checklist-routing.module';

import { CaresupportChecklistPage } from './caresupport-checklist.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    CaresupportChecklistPageRoutingModule
  ],
  declarations: [CaresupportChecklistPage]
})
export class CaresupportChecklistPageModule {}

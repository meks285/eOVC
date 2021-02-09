import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { VulnerablehouseholdrefPageRoutingModule } from './vulnerablehouseholdref-routing.module';

import { VulnerablehouseholdrefPage } from './vulnerablehouseholdref.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    VulnerablehouseholdrefPageRoutingModule
  ],
  declarations: [VulnerablehouseholdrefPage]
})
export class VulnerablehouseholdrefPageModule {}

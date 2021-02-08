import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { VulnerablechildrenPageRoutingModule } from './vulnerablechildren-routing.module';

import { VulnerablechildrenPage } from './vulnerablechildren.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    VulnerablechildrenPageRoutingModule
  ],
  declarations: [VulnerablechildrenPage]
})
export class VulnerablechildrenPageModule {}

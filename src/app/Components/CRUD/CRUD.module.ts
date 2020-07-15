import { IonicModule } from '@ionic/angular';
import { RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { SchoolPage } from './School.page';

import { CRUDPageRoutingModule } from './CRUD-routing.module';

@NgModule({
  imports: [
    IonicModule,
    CommonModule,
    FormsModule,
    CRUDPageRoutingModule
  ],
  declarations: [SchoolPage]
})
export class CRUDPageModule {}

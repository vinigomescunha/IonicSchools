import { IonicModule } from '@ionic/angular';
import { RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { SchoolPage } from './School.page';

import { CRUDPageRoutingModule } from './CRUD-routing.module';
import { SchoolFormAddPage } from './SchoolFormAdd.component';

@NgModule({
  imports: [
    IonicModule,
    CommonModule,
    FormsModule,
    CRUDPageRoutingModule
  ],
  declarations: [SchoolPage, SchoolFormAddPage]
})
export class CRUDPageModule {}

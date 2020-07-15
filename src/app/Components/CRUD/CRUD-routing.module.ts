import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { SchoolPage } from './School.page';
import { ClassPage } from './Class.page';
import { HomePage } from '../Home/Home.page';

const routes: Routes = [
  {
    path: 'school',
    component: SchoolPage
  },
  {
    path: 'class',
    component: ClassPage
  },
  { 
    path: '**', 
    component: SchoolPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class CRUDPageRoutingModule {}

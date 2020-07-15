import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { SchoolPage } from './School.page';
const routes: Routes = [
  {
    path: 'school',
    component: SchoolPage
  },
  { 
    path: '**', 
    component: SchoolPage // Eu ia fazer uma rota para turmas como link mas a experiencia seria estranha
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class CRUDPageRoutingModule {}

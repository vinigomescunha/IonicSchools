import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { TabsPage } from './tabs.page';

const routes: Routes = [
  {
    path: 'routes',
    component: TabsPage,
    children: [
      {
        path: 'home-route',
        loadChildren: () => import('../Home/Home.module').then(m => m.HomePageModule)
      },
      {
        path: 'crud-route',
        loadChildren: () => import('../CRUD/CRUD.module').then(m => m.CRUDPageModule)
      }
    ]
  },
  {
    path: '',
    redirectTo: '/routes/home-route',
    pathMatch: 'full'
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class TabsPageRoutingModule {}

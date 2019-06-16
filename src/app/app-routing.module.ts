import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { FullComponent } from './layouts/full/full.component';

export const Approutes: Routes = [
  {
    path: '',
    component: FullComponent,
    children: [
      { path: '', redirectTo: '/marca/listado', pathMatch: 'full' },
      // {
      //   path: 'starter',
      //   loadChildren: './starter/starter.module#StarterModule'
      // },
      // {
      //   path: 'component',
      //   loadChildren: './component/component.module#ComponentsModule'
      // },
      {
        path: 'marca',
        loadChildren: './marca/marca.module#MarcaModule'
      },
      {
        path: 'producto',
        loadChildren: './producto/producto.module#ProductoModule'
      }
    ]
  },
  {
    path: '**',
    redirectTo: '/marca/listado'
  }
];

import { Routes } from '@angular/router';

import { ListarMarcasComponent } from './listar-marcas/listar-marcas.component';
import { EditarMarcaComponent } from './editar-marca/editar-marca.component';
import { CrearMarcaComponent } from './crear-marca/crear-marca.component';
import { VerMarcaComponent } from './ver-marca/ver-marca.component';

export const MarcaRoutes: Routes = [
  {
    path: '',
    children: [
      {
        path: 'listado',
        component: ListarMarcasComponent,
        data: {
          title: 'Marcas',
          urls: [
            { title: 'Marcas', url: '/marca/listado' }
          ]
        }
      },
      {
        path: 'crear',
        component: CrearMarcaComponent,
        data: {
          title: 'Marcas',
          urls: [
            { title: 'Marcas', url: '/marca/listado' },
            { title: 'Registrar marca'}
          ]
        }
      },
      {
        path: 'editar/:id',
        component: EditarMarcaComponent,
        data: {
          title: 'Marcas',
          urls: [
            { title: 'Marcas', url: '/marca/listado' },
            { title: 'Editar marca'}
          ]
        }
      },
      {
        path: 'detalle/:id',
        component: VerMarcaComponent,
        data: {
          title: 'Marcas',
          urls: [
            { title: 'Marcas', url: '/marca/listado' },
            { title: 'Detalle'}
          ]
        }
      }
    ]
  }
];

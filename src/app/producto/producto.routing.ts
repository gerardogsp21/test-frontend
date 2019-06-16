import { Routes } from '@angular/router';


import { ListarProductosComponent } from './listar-productos/listar-productos.component';
import { CrearProductoComponent } from './crear-producto/crear-producto.component';
import { EditarProductoComponent } from './editar-producto/editar-producto.component';
import { VerProductoComponent } from './ver-producto/ver-producto.component';


export const ProductoRoutes: Routes = [
  {
    path: '',
    children: [
      {
        path: 'listado',
        component: ListarProductosComponent,
        data: {
          title: 'Productos',
          urls: [
            { title: 'Productos', url: '/producto/listado' }
          ]
        }
      },
      {
        path: 'crear',
        component: CrearProductoComponent,
        data: {
          title: 'Productos',
          urls: [
            { title: 'Productos', url: '/producto/listado' },
            { title: 'Registrar producto'}
          ]
        }
      },
      {
        path: 'editar/:id',
        component: EditarProductoComponent,
        data: {
          title: 'Productos',
          urls: [
            { title: 'Productos', url: '/producto/listado' },
            { title: 'Editar producto'}
          ]
        }
      },
      {
        path: 'detalle/:id',
        component: VerProductoComponent,
        data: {
          title: 'Productos',
          urls: [
            { title: 'Productos', url: '/producto/listado' },
            { title: 'Detalle'}
          ]
        }
      }
    ]
  }
];

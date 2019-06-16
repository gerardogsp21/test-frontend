import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { JsonpModule } from '@angular/http';

import { NgbModule } from '@ng-bootstrap/ng-bootstrap';

import { MarcaRoutes } from './marca.routing';

import { ListarMarcasComponent } from './listar-marcas/listar-marcas.component';
import { EditarMarcaComponent } from './editar-marca/editar-marca.component';
import { CrearMarcaComponent } from './crear-marca/crear-marca.component';
import { VerMarcaComponent } from './ver-marca/ver-marca.component';

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild(MarcaRoutes),
    FormsModule,
    ReactiveFormsModule,
    JsonpModule,
    NgbModule
  ],
  declarations: [
    ListarMarcasComponent,
    EditarMarcaComponent,
    CrearMarcaComponent,
    VerMarcaComponent
  ]
})
export class MarcaModule {}

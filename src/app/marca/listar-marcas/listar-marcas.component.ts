
import { Input, Component, OnInit } from '@angular/core';

import { MarcaService } from '../marca.service';

@Component({
  selector: 'app-listar-marcas',
  templateUrl: './listar-marcas.component.html',
  styleUrls: ['./listar-marcas.component.css'],
  providers: [MarcaService]
})
export class ListarMarcasComponent implements OnInit {
  public marcas = {
    data: []
  };
  constructor(private marcaService: MarcaService) { }

  ngOnInit() {
    this.cargarMarcas();
  }

  cargarMarcas() {
    this.marcaService.getMarcasPaginado().subscribe(
      (datos: any) => {
          this.marcas = datos.data;
      },
      error => console.log(<any>error)
    );
  }
  
  eliminarMarca(marca_id, index) {
    this.marcaService.deleteMarca(marca_id).subscribe(
      (datos: any) => {
        if (datos.status) {
          this.marcas.data.splice(index, 1);
        }
      },
      error => console.log(<any>error)
    );
  }

  changePage(url) {
    this.marcaService.changePage(url).subscribe(
      (datos: any) => {
          this.marcas = datos.data;
      },
      error => console.log(<any>error)
    );
  }

}

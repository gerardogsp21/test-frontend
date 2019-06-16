import { Input, Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';

import { MarcaService } from '../marca.service';

@Component({
  selector: 'app-ver-marca',
  templateUrl: './ver-marca.component.html',
  styleUrls: ['./ver-marca.component.css'],
  providers: [MarcaService]
})
export class VerMarcaComponent implements OnInit {

  public errores: any = [];
  public respuesta: any = {};
  public marca: any = {
    id: null,
    nombre: null,
    referencia: null
  };
  constructor(private marcaService: MarcaService, 
              private router: Router, 
              private route: ActivatedRoute) { }

  ngOnInit() {
    this.route.params.subscribe(
      params => this.marca.id = params['id']
    );
    this.cargarMarca();
  }

  cargarMarca() {
    this.marcaService.getMarca(this.marca.id).subscribe(
      (datos: any) => {
          this.marca = datos.data;
      },
      error => console.log(<any>error)
    );
  }

}

import { Input, Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';

import { MarcaService } from '../marca.service';

@Component({
  selector: 'app-editar-marca',
  templateUrl: './editar-marca.component.html',
  styleUrls: ['./editar-marca.component.css'],
  providers: [MarcaService]
})
export class EditarMarcaComponent implements OnInit {
  @Input() public alerts: any = [];

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

  actualizarMarca() {
    const that = this;
    let keys: String[];
    this.errores = [];
    this.marcaService.putMarca(this.marca).subscribe(
      (datos: any) => {
        if (!datos.status) {
          keys = Object.keys(datos.validator);
          keys.forEach(item => {
              this.errores.push(datos.validator['' + item]);
          });
        } else {
          this.respuesta = datos;
          setTimeout(function() {
            that.router.navigate(['/marca/listado']);
          }, 2000);
        }
      },
      error => console.log(<any>error)
    );
  }
  
  public closeAlert(error) {
    this.errores.splice(this.alerts.indexOf(error), 1);
  }
}

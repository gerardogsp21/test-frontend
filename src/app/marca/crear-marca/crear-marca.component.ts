import { Input, Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

import { MarcaService } from '../marca.service';

@Component({
  selector: 'app-crear-marca',
  templateUrl: './crear-marca.component.html',
  styleUrls: ['./crear-marca.component.css'],
  providers: [MarcaService]
})
export class CrearMarcaComponent implements OnInit {
  @Input() public alerts: any = [];

  public errores: any = [];
  public respuesta: any = {};
  public marca: any = {
    nombre: null,
    referencia: null
  };

  constructor(private marcaService: MarcaService, private router: Router) { }


  ngOnInit() {
  }

  registrarMarca() {
    const that = this;
    let keys: String[];
    this.errores = [];
    this.marcaService.postMarca(this.marca).subscribe(
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

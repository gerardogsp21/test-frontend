import { Input, Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

import { ProductoService } from '../producto.service';

@Component({
  selector: 'app-crear-producto',
  templateUrl: './crear-producto.component.html',
  styleUrls: ['./crear-producto.component.css'],
  providers: [ProductoService]
})
export class CrearProductoComponent implements OnInit {

  public marcas: any = [];
  public errores: any = [];
  public respuesta: any = {};
  public producto: any = {
    nombre: null,
    talla: null,
    observaciones: null,
    marca_id: null,
    marca: {
      id: null,
      nombre: null
    },
    cantidad_inventario: null,
    fecha_embarque: null,
  };
  constructor(private productoService: ProductoService, 
              private router: Router) { }

  ngOnInit() {
    this.cargarMarcas();
  }

  cargarMarcas() {
    this.productoService.getMarcas().subscribe(
      (datos: any) => {
          this.marcas = datos.data;
      },
      error => console.log(<any>error)
    );
  }
  
  registrarProducto() {
    const that = this;
    let keys: String[];
    this.errores = [];
    this.productoService.postProducto(this.producto).subscribe(
      (datos: any) => {
        if (!datos.status) {
          keys = Object.keys(datos.validator);
          keys.forEach(item => {
              this.errores.push(datos.validator['' + item]);
          });
        } else {
          this.respuesta = datos;
          setTimeout(function() {
            that.router.navigate(['/producto/listado']);
          }, 1000);
        }
      },
      error => console.log(<any>error)
    );
  }
  
  public closeAlert(error) {
    this.errores.splice(this.errores.indexOf(error), 1);
  }
}

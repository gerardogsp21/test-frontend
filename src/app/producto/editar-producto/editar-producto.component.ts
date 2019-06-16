import { Input, Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';

import { ProductoService } from '../producto.service';

@Component({
  selector: 'app-editar-producto',
  templateUrl: './editar-producto.component.html',
  styleUrls: ['./editar-producto.component.css'],
  providers: [ProductoService]
})
export class EditarProductoComponent implements OnInit {

  public marcas: any = [];
  public errores: any = [];
  public respuesta: any = {};
  public producto: any = {
    id: null,
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
              private router: Router, 
              private route: ActivatedRoute) { }

  ngOnInit() {
    this.route.params.subscribe(
      params => this.producto.id = params['id']
    );
    this.cargarProducto();
    this.cargarMarcas();
  }

  cargarProducto() {
    this.productoService.getProducto(this.producto.id).subscribe(
      (datos: any) => {
          this.producto = datos.data;
      },
      error => console.log(<any>error)
    );
  }

  cargarMarcas() {
    this.productoService.getMarcas().subscribe(
      (datos: any) => {
          this.marcas = datos.data;
      },
      error => console.log(<any>error)
    );
  }
  
  actualizarProducto() {
    const that = this;
    let keys: String[];
    this.errores = [];
    this.productoService.putProducto(this.producto).subscribe(
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
          }, 2000);
        }
      },
      error => console.log(<any>error)
    );
  }
  
  public closeAlert(error) {
    this.errores.splice(this.errores.indexOf(error), 1);
  }
}

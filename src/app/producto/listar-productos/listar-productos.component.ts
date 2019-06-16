
import { Input, Component, OnInit } from '@angular/core';

import { ProductoService } from '../producto.service';

@Component({
  selector: 'app-listar-productos',
  templateUrl: './listar-productos.component.html',
  styleUrls: ['./listar-productos.component.css'],
  providers: [ProductoService]
})
export class ListarProductosComponent implements OnInit {
  
  public productos = { data: [] };
  public respuesta: any = {type: null, msg: ''};

  constructor(private productoService: ProductoService) { }

  ngOnInit() {
    this.cargarProductos();
  }

  cargarProductos() {
    this.productoService.getProductoPaginado().subscribe(
      (datos: any) => {
          this.productos = datos.data;
      },
      error => console.log(<any>error)
    );
  }
  
  eliminarProducto(producto_id, index) {
    const that = this;
    this.productoService.deleteProducto(producto_id).subscribe(
      (datos: any) => {
        this.respuesta = datos;
        this.respuesta.type = 'danger';
        if (datos.status) {
          this.respuesta.type = 'success';
          this.productos.data.splice(index, 1);
        }
        setTimeout(function(){
          that.respuesta = {type: null, msg: ''};
        }, 1000);
      },
      error => console.log(<any>error)
    );
  }

  changePage(url) {
    this.productoService.changePage(url).subscribe(
      (datos: any) => {
          this.productos = datos.data;
      },
      error => console.log(<any>error)
    );
  }

}

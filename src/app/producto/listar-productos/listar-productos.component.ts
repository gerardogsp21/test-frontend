
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
    this.productoService.deleteProducto(producto_id).subscribe(
      (datos: any) => {
        if (datos.status) {
          this.productos.data.splice(index, 1);
        }
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

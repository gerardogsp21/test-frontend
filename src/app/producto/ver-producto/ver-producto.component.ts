import { Input, Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';

import { ProductoService } from '../producto.service';

@Component({
  selector: 'app-ver-producto',
  templateUrl: './ver-producto.component.html',
  styleUrls: ['./ver-producto.component.css'],
  providers: [ProductoService]
})
export class VerProductoComponent implements OnInit {
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
  }

  cargarProducto() {
    this.productoService.getProducto(this.producto.id).subscribe(
      (datos: any) => {
          this.producto = datos.data;
      },
      error => console.log(<any>error)
    );
  }

}

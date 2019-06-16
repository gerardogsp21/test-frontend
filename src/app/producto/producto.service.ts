import {Injectable} from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import {Observable} from 'rxjs/Observable';

@Injectable()
export class ProductoService {

    base_url = 'http://localhost/test-backend/public/api/';

    headers = new HttpHeaders();

    constructor(private http: HttpClient) { };

    
    getProductoPaginado(): Observable<any>  {
        return this.http.get(this.base_url + 'productos/listar/paginado');
    }

    changePage(url: string): Observable<any> {
        return this.http.get(url);
    }

    getProductos(): Observable<any>  {
        return this.http.get(this.base_url + 'productos');
    }

    getProducto(producto_id): Observable<any>  {
        return this.http.get(this.base_url + 'productos/' + producto_id);
    }

    postProducto(datos: any) {
        return this.http.post(this.base_url + 'productos', datos);
    }

    putProducto(datos: any) {
        return this.http.put(this.base_url + 'productos/' + datos.id, datos);
    }

    deleteProducto(producto_id: any) {
        return this.http.delete(this.base_url + 'productos/' + producto_id);
    }

    getMarcas(): Observable<any>  {
        return this.http.get(this.base_url + 'marcas');
    }
}

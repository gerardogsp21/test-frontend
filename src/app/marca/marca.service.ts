import {Injectable} from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import {Observable} from 'rxjs/Observable';

@Injectable()
export class MarcaService {

    base_url = 'http://localhost/test-backend/public/api/';

    headers = new HttpHeaders();

    constructor(private http: HttpClient) { };
    
    getMarcasPaginado(): Observable<any>  {
        return this.http.get(this.base_url + 'marcas/listar/paginado');
    }

    changePage(url: string): Observable<any> {
        return this.http.get(url);
    }

    getMarcas(): Observable<any>  {
        return this.http.get(this.base_url + 'marcas');
    }

    getMarca(marca_id): Observable<any>  {
        return this.http.get(this.base_url + 'marcas/' + marca_id);
    }

    postMarca(datos: any) {
        return this.http.post(this.base_url + 'marcas', datos);
    }

    putMarca(datos: any) {
        return this.http.put(this.base_url + 'marcas/' + datos.id, datos);
    }

    deleteMarca(marca_id: any) {
        return this.http.delete(this.base_url + 'marcas/' + marca_id);
    }
}

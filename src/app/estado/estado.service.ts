import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { HttpClient } from '@angular/common/http';
import { environment as env } from '../../environments/environment';
import { HttpUtilService } from '../services/http-util.service';

/*
baseUrl: "https://spring-ionic-nelio.herokuapp.com",
bucketBaseUrl: "https://s3-sa-east-1.amazonaws.com/curso-spring-ionic"
https://spring-ionic-nelio.herokuapp.com/produtos/1
https://spring-ionic-nelio.herokuapp.com/categorias/1
*/

@Injectable({
  providedIn: 'root'
})
export class EstadoService {

 baseUrl: 'https://spring-ionic-nelio.herokuapp.com/estados/'; //JSON

 constructor(private http: HttpClient) { }

  getListarEstados(): Observable<any> {

    return this.http.get(`${this.baseUrl}`);

  }
}

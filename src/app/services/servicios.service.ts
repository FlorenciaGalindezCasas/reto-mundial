import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ServiciosService {
  private URL_API = 'https://reto-mundial.herokuapp.com/api'

  constructor(private http: HttpClient) { }

  obtenerEstadisticas():Observable<any>{
    return this.http.get(this.URL_API);
  }

  postVotos(url: string, cuerpo = {
    position: [],
      goles: [['']]
  } ):Observable<any>{    
    return this.http.post(this.URL_API, cuerpo)
  }
}

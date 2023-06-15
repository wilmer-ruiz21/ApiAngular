import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/enviroments/enviroments';
@Injectable({
  providedIn: 'root'
})
export class FestivoService {

  url: string;

  constructor(
    private http: HttpClient
  ) {
    this.url = `${environment.urlBase}festivos`;
  }

  public validar(){
    let urlT=`${this.url}/validar`;
    return this.http.get<any[]>(urlT);

}
}
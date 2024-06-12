import { HttpClient } from '@angular/common/http';
import { Injectable, inject } from '@angular/core';
import { Observable } from 'rxjs';
import { IProducto } from '../models/producto.model';

@Injectable({
  providedIn: 'root'
})
export class Productoservicio {
  private url = 'https://fakestoreapi.com/products'
  private url2 =  ''
  private _httpClient = inject(HttpClient)
  
  constructor() { }

  public getAllProducts(): Observable<IProducto[]> {
    return this._httpClient.get<IProducto[]>(this.url)
 }

 public crearProducto(producto: IProducto): Observable<IProducto> {
  return this._httpClient.post<IProducto>(`${this.url2}/productos`, producto);
}

}
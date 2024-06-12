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

public getProductById(id: number): Observable<IProducto> {
  return this._httpClient.get<IProducto>(`${this.url}/${id}`);
}

public updateProduct(product: IProducto): Observable<IProducto> {
  return this._httpClient.put<IProducto>(`${this.url}/${product.id}`, product);
}


public deleteProduct(productId: number): Observable<void> {
  return this._httpClient.delete<void>(`${this.url}/${productId}`);

}
}
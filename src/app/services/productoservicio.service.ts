import { HttpClient } from '@angular/common/http';
import { Injectable, inject } from '@angular/core';
import { Observable } from 'rxjs';
import { IProducto } from '../models/producto.model';

@Injectable({
  providedIn: 'root'
})
export class Productoservicio {
  private baseUrl = 'http://localhost:3000/api/v1';
  
  private _httpClient = inject(HttpClient)
  
  constructor() { }

  public getAllProducts(): Observable<IProducto[]> {
    return this._httpClient.get<IProducto[]>(`${this.baseUrl}/todos`);
  }

  public crearProducto(producto: IProducto): Observable<IProducto> {
    return this._httpClient.post<IProducto>(`${this.baseUrl}/`, producto);
  }

  public getProductById(id: string): Observable<IProducto> {
    return this._httpClient.get<IProducto>(`${this.baseUrl}/${id}`);
  }

  public updateProduct(product: IProducto): Observable<IProducto> {
    //console.log(product);
    return this._httpClient.put<IProducto>(`${this.baseUrl}/${product._id}`, product);
  }

  public deleteProduct(productId: string): Observable<void> {
    return this._httpClient.delete<void>(`${this.baseUrl}/${productId}`);
  }
}

import { HttpClient } from '@angular/common/http';
import { Injectable, inject } from '@angular/core';
import { Observable } from 'rxjs';
import { IProducto } from '../models/producto.model';

@Injectable({
  providedIn: 'root'
})
export class Productoservicio {
  private baseUrl = 'https://backend-tp-integrador-gestorde-stock.vercel.app/api/v1';
  
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
    return this._httpClient.put<IProducto>(`${this.baseUrl}/${product.id}`, product);
  }

  public deleteProduct(productId: number): Observable<void> {
    return this._httpClient.delete<void>(`${this.baseUrl}/${productId}`);
  }
}
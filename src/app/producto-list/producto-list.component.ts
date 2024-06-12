import { Component, OnInit } from '@angular/core';
import { IProducto } from '../models/producto.model';

import { Productoservicio } from '../services/productoservicio.service';

@Component({
  selector: 'app-producto-list',
  standalone: true,
  imports: [],
  templateUrl: './producto-list.component.html',
  styleUrl: './producto-list.component.css'
})
export class ProductoListComponent implements OnInit {


  listaProducto: IProducto[] = []

  constructor(private _apiService: Productoservicio) { }

  ngOnInit(): void {
    this.getAllProducts()
  }

  getAllProducts() {
    this._apiService.getAllProducts().subscribe({
      next: data => {
        console.log(data)
        this.listaProducto = data
      }, error: error => {
        console.log(error)
      }
    });
  }

}

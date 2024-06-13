import { Component, OnInit } from '@angular/core';
import { FormsModule, NgForm } from '@angular/forms';
import { IProducto } from '../models/producto.model';
import { ActivatedRoute, Router } from '@angular/router'; // Solo importa ActivatedRoute y Router
import { Productoservicio } from '../services/productoservicio.service';
import { ProductoListComponent } from '../producto-list/producto-list.component';

@Component({
  selector: 'app-editar-producto',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './product-edit.component.html',
  styleUrls: ['./product-edit.component.css']
})
export class ProductEditComponent implements OnInit {

  product: IProducto = {
    _id: '',
    name: '',
    description: '',
    price: 0,
    image: '',
    amount:0,
    category: 1
  };

  imagePreview: string | null = null;

  constructor(
    private productoServicio: Productoservicio,
    private route: ActivatedRoute,
    private router: Router
  ) {}

  ngOnInit(): void {
    this.product = history.state.product;
    console.log(this.product);
/*     const productId = this.route.snapshot.paramMap.get('_id');
    if (productId) {
      this.productoServicio.getProductById((productId)).subscribe(
        (data: IProducto) => {
          this.product = data;
        },
        error => {
          console.error('Error al obtener el producto:', error);
        }
      );
    } */
  }

/* 
  getProducts (_id) : IProducto {
    this._apiService.getAllProducts().subscribe({
    next: data => {
      console.log(data)
      this.listaProducto = data
    }, error: error => {
      console.log(error)
    }
  });
  } */


  onSubmit(): void {
    if (this.product.name && this.product.price && this.product.description && this.product.image) {
      this.productoServicio.updateProduct(this.product).subscribe({
        next : data => {
          console.log('Producto editado exitosamente');
          this.router.navigate(['/products']);
        },
        error : error => {
          console.error('Error al editar el producto:', error);
      }
    });
    } else {
      console.error('Formulario inválido. Por favor, completa todos los campos.');
    }
  }
}  
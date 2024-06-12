import { Component, OnInit } from '@angular/core';
import { FormsModule, NgForm } from '@angular/forms';
import { IProducto } from '../models/producto.model';
import { ActivatedRoute, Router } from '@angular/router'; // Solo importa ActivatedRoute y Router
import { Productoservicio } from '../services/productoservicio.service';

@Component({
  selector: 'app-editar-producto',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './product-edit.component.html',
  styleUrls: ['./product-edit.component.css']
})
export class ProductEditComponent implements OnInit {

  product: IProducto = {
    id: 0,
    title: '',
    description: '',
    price: 0,
    image: ''
  };

  imagePreview: string | null = null;

  constructor(
    private productoServicio: Productoservicio,
    private route: ActivatedRoute,
    private router: Router
  ) {}

  ngOnInit(): void {
    const productId = this.route.snapshot.paramMap.get('id');
    if (productId) {
      this.productoServicio.getProductById(Number(productId)).subscribe(
        (data: IProducto) => {
          this.product = data;
        },
        error => {
          console.error('Error al obtener el producto:', error);
        }
      );
    }
  }

  onSubmit(): void {
    if (this.product.title && this.product.price && this.product.description && this.product.image) {
      this.productoServicio.updateProduct(this.product).subscribe(
        () => {
          console.log('Producto editado exitosamente');
          this.router.navigate(['/productos']);
        },
        error => {
          console.error('Error al editar el producto:', error);
        }
      );
    } else {
      console.error('Formulario inválido. Por favor, completa todos los campos.');
    }
  }

 /*  updateImagePreview(): void {
    this.imagePreview = this.product.image;
  } */
}
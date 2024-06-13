import { Component } from '@angular/core';
import { Productoservicio } from '../services/productoservicio.service';
import { FormsModule } from '@angular/forms';
import { Router, RouterLink } from '@angular/router';
import { IProducto } from '../models/producto.model';


@Component({
  selector: 'app-crear-producto',
  standalone: true,
  imports: [FormsModule,RouterLink],
  templateUrl: './crear-producto.component.html',
  styleUrl: './crear-producto.component.css'
})
export class CrearProductoComponent {


  newProduct: IProducto = {  _id:'', name: '', description: '', price: 0, image: '', category:1, amount:0 }; // Define newProduct como tipo IProducto


  
  /* categories = [
    { id: 1, name: 'teclado y raton'},
    { id: 2, name: 'Microfono' },
    { id: 3, name: 'Auriculares' },
    { id: 4, name: 'Computadora' }
    
  ]; */
  constructor(private productoServicio: Productoservicio, private router: Router) {}

  onSubmit(): void {
    if (this.validateForm()) {
      this.productoServicio.crearProducto(this.newProduct).subscribe({

        next: data => {
          console.log('Producto creado exitosamente');
          console.log(data);
          // Redirige al componente de productos después de crear exitosamente un producto
          this.router.navigate(['/products']);
        },
        error: error=> {
          console.error('Error al crear el producto:', error);
        }
      });
    

    } else {
      console.error('Formulario inválido. Por favor, completa todos los campos.');
      
    }
  }

  private validateForm(): boolean {
     return ( 
      this.newProduct.name.trim().length > 0 &&
      this.newProduct.price > 0 &&
      this.newProduct.description.trim().length > 0 &&
      this.newProduct.image.trim().length > 0 &&
      this.newProduct.category > 0 &&
      this.newProduct.amount > 0
    );
    
  }
}
  



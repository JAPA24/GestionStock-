import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Productoservicio } from '../services/productoservicio.service';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { ConfirmDeleteModalComponent } from '../confirm-delete-modal/confirm-delete-modal.component';
import { IProducto } from '../models/producto.model'; // Importa el modelo IProducto

@Component({
  selector: 'app-producto-delete',
  standalone: true,
  imports:[],
  templateUrl: './producto-delete.component.html',
  styleUrls: ['./producto-delete.component.css']
})
export class ProductoDeleteComponent implements OnInit {
  productId: number | null = null;
  producto: IProducto | null = null; 

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private productoServicio: Productoservicio,
    private modalService: NgbModal
  ) {}

  ngOnInit(): void {
    this.productId =history.state.product._id;
    console.log(this.productId)
    /* this.getProductDetails(); // Llama a la función para obtener los detalles del producto */
  }

  /* getProductDetails(): void {
    if (this.productId !== null) {
      this.productoServicio.getProductById(this.productId).subscribe((producto: IProducto) => {
        this.producto = producto;
        this.openModal(); // Abre el modal después de obtener los detalles del producto
      });
    }
  }
 */
  openModal(): void {
    const modalRef = this.modalService.open(ConfirmDeleteModalComponent);
    modalRef.componentInstance.producto = this.producto; // Pasa el producto al componente del modal

    modalRef.result.then((result) => {
      if (result === 'delete') {
        this.deleteProduct(modalRef.componentInstance.producto);
      } else {
        this.router.navigate(['/products']);
      }
    }, () => {
      this.router.navigate(['/products']);
    });
  }

  deleteProduct(_id: string): void {
    if (this.productId !== null) {
      this.productoServicio.deleteProduct(this.productId).subscribe(() => {
        this.router.navigate(['/products']);
      });
    }
  }
}

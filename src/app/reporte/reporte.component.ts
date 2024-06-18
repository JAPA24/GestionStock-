import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import saveAs from 'file-saver';
import { IProducto } from '../models/producto.model';


@Component({
  selector: 'app-reporte',
  standalone: true,
  imports: [],
  templateUrl: './reporte.component.html',
  styleUrl: './reporte.component.css'
})
export class ReporteComponent {
  constructor(private http: HttpClient) {}

  generateReport(): void {
    // Lógica para generar el informe de stock
    this.http.get<IProducto[]>('https://backend-tp-integrador-gestorde-stock.vercel.app/api/v1/todos').subscribe((products: IProducto[]) => {
      const reportData = this.prepareReportData(products);
      const blob = new Blob([reportData], { type: 'text/plain;charset=utf-8' });
      saveAs(blob, 'stock_report.txt');
    });
  }

  private prepareReportData(products: IProducto[]): string {
    // Lógica para preparar los datos del informe
    let report = 'Stock Report\n\n';

    products.forEach(product => {
      report += `Product: ${product.name}\n`;
      report += `Description: ${product.description}\n`; 
      report += `Price: ${product.price}\n`;
      
    });

    return report;
  }
}
import { Component } from '@angular/core';
import { RouterLink, RouterOutlet } from '@angular/router';
import { ProductoListComponent } from "./producto-list/producto-list.component";
import { FormsModule } from '@angular/forms';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';

@Component({
    selector: 'app-root',
    standalone: true,
    templateUrl: './app.component.html',
    styleUrl: './app.component.css',
    imports: [RouterOutlet, ProductoListComponent,FormsModule,LoginComponent,RegisterComponent,RouterLink]
})
export class AppComponent {
  title = 'gestion-stock';
}

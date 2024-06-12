import { Routes } from '@angular/router';
import { ProductoListComponent } from './producto-list/producto-list.component';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { AuthGuard } from './auth.guard';
import { CrearProductoComponent } from './crear-producto/crear-producto.component';
import { ReporteComponent } from './reporte/reporte.component';




export const routes: Routes = [
    {path:'', component:LoginComponent},
    {path:'products', component: ProductoListComponent, canActivate: [AuthGuard]},
    { path: 'login', component: LoginComponent },
      { path: 'register', component: RegisterComponent },
      { path: 'crear', component: CrearProductoComponent },
      { path: 'reporte', component: ReporteComponent },
      
    {path:'**', redirectTo:'login', pathMatch: 'full'}
]

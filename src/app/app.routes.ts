import { Routes } from '@angular/router';
import { ProductoListComponent } from './producto-list/producto-list.component';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
/* import { authGuard } from '../app/guards/auth.guard'; */
import { CrearProductoComponent } from './crear-producto/crear-producto.component';
import { ReporteComponent } from './reporte/reporte.component';
import { ProductoDeleteComponent } from './producto-eliminar/producto-delete.component';
import { ProductEditComponent } from './product-edit/product-edit.component';




export const routes: Routes = [
    {path:'', component:LoginComponent},
    {path:'products', component: ProductoListComponent, },
    {path: 'login', component: LoginComponent },
    {path: 'register', component: RegisterComponent },
    {path: 'crear', component: CrearProductoComponent} ,
    {path: 'reporte', component: ReporteComponent },
    { path: 'eliminar/:id', component: ProductoDeleteComponent },
    { path: 'edit/:id', component: ProductEditComponent },
    {path:'**', redirectTo:'login', pathMatch: 'full'}
]

import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ArticulosComponent } from './DXBikes/articulos/articulos.component';
import { CarritoComponent } from './DXBikes/carrito/carrito.component';
import { HomeComponent } from './DXBikes/home/home.component';


const routes: Routes = [
  { path:'', component: HomeComponent},
  { path:'home', component: HomeComponent},
  { path:'articulos', component: ArticulosComponent},
  { path:'carrito', component: CarritoComponent},
  { path:'**', component: HomeComponent} //Enlace al error 404;
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { 

}

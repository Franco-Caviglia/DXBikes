import { Component, NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ArticulosComponent } from './DXBikes/articulos/articulos.component';
import { CarritoComponent } from './DXBikes/carrito/carrito.component';
import { HomeComponent } from './DXBikes/home/home.component';
import { ContactosComponent } from './DXBikes/contactos/contactos.component';


const routes: Routes = [
  { path:'', component: HomeComponent},
  { path:'home', component: HomeComponent},
  { path:'articulos', component: ArticulosComponent},
  { path:'carrito', component: CarritoComponent},
  {path:'contactos',component: ContactosComponent },
  { path:'**', component: HomeComponent} //Enlace al error 404;
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { 

}

import { Component, NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ArticulosComponent } from './DXBikes/articulos/articulos.component';
import { CarritoComponent } from './DXBikes/carrito/carrito.component';
import { HomeComponent } from './DXBikes/home/home.component';
import { ContactosComponent } from './DXBikes/contactos/contactos.component';
import { AccesoriosComponent } from './DXBikes/dropdown/accesorios/accesorios.component';
import { BMXComponent } from './DXBikes/dropdown/bmx/bmx.component';
import { ChicosComponent } from './DXBikes/dropdown/chicos/chicos.component';
import { UrbanaComponent } from './DXBikes/dropdown/urbana/urbana.component';

// Se definen las rutas 
const routes: Routes = [
  { path:'urbanas', component:UrbanaComponent },
  { path:'chicos', component:ChicosComponent},
  { path:'bmx', component:BMXComponent},
  { path:'accesorios', component:AccesoriosComponent},
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

import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './DXBikes/header/header.component';
import { HomeComponent } from './DXBikes/home/home.component';
import { ArticulosComponent } from './DXBikes/articulos/articulos.component';
import { CarritoComponent } from './DXBikes/carrito/carrito.component';
import { ArticuloService } from './DXBikes/servicios/articuloService';
import { CarritoService } from './DXBikes/servicios/carrito-service';
import { ContactosComponent } from './DXBikes/contactos/contactos.component';
import { FormsModule } from '@angular/forms';
import { CarruselComponent } from './DXBikes/carrusel/carrusel.component';
import { AccesoriosComponent } from './DXBikes/dropdown/accesorios/accesorios.component';
import { BMXComponent } from './DXBikes/dropdown/bmx/bmx.component';
import { ChicosComponent } from './DXBikes/dropdown/chicos/chicos.component';
import { UrbanaComponent } from './DXBikes/dropdown/urbana/urbana.component';

// Importamos y declaramos los componentes que se utilizan en nuestra aplicaccion 
@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    HomeComponent,
    ArticulosComponent,
    CarritoComponent,
    ContactosComponent,
    CarruselComponent,
    AccesoriosComponent,
    BMXComponent,
    ChicosComponent,
    UrbanaComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule

  ],
  providers: [ArticuloService,CarritoService],
  bootstrap: [AppComponent]
})
export class AppModule { }

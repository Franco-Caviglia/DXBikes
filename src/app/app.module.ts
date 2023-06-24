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

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    HomeComponent,
    ArticulosComponent,
    CarritoComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [ArticuloService,CarritoService],
  bootstrap: [AppComponent]
})
export class AppModule { }

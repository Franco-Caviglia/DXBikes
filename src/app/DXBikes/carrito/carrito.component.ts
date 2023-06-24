import { Component } from '@angular/core';
import { CarritoService } from '../servicios/carrito-service';
@Component({
  selector: 'app-carrito',
  templateUrl: './carrito.component.html',
  styleUrls: ['./carrito.component.css']
})
export class CarritoComponent {


  productosSeleccionados: any[] = [];

  constructor(
    private servicioCarrito: CarritoService
  ){
    this.productosSeleccionados = this.servicioCarrito.obtenerArticuloSeleccion();
  }

  agregarProducto(producto: any) {
    this.productosSeleccionados.push(producto);
  }

  obtenerArticuloSeleccion() {
    return this.productosSeleccionados;
  }
}

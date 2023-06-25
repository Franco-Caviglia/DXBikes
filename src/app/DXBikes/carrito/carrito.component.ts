import { Component } from '@angular/core';
import { CarritoService } from '../servicios/carrito-service';
import { ArticuloModel } from '../model/articulo-model';

@Component({
  selector: 'app-carrito',
  templateUrl: './carrito.component.html',
  styleUrls: ['./carrito.component.css']
})
export class CarritoComponent {


  productosSeleccionados: any[] = [];
  calculoPrecios: any[] = []

  constructor(
    private servicioCarrito: CarritoService
  ){
    this.productosSeleccionados = this.servicioCarrito.obtenerArticuloSeleccion();
  }

  agregarProducto(producto: any) {
    this.productosSeleccionados.push(producto);
    this.calculoPrecios.reduce((precio,total) => precio + total)
  }

  obtenerArticuloSeleccion() {
    return this.productosSeleccionados;
  }

  quitarProducto(producto : any){
    this.productosSeleccionados.splice(producto, 1)
  }

  totalPrecio() : number {


    let total = 0;

    for (const producto of this.productosSeleccionados) {
      total += producto.precio;
    }

    return total;
  }


}

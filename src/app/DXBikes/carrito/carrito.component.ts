import { Component } from '@angular/core';
import { CarritoService } from '../servicios/carrito-service';


@Component({
  selector: 'app-carrito',
  templateUrl: './carrito.component.html',
  styleUrls: ['./carrito.component.css']
})
export class CarritoComponent {

  articulosSeleccionados: any[] = [];
  calculoPrecios: any[] = []

  constructor(
    private servicioCarrito: CarritoService
  ){
    this.articulosSeleccionados = this.servicioCarrito.obtenerArticuloSeleccion();
  }

  
  agregarProducto(producto: any) {
    this.articulosSeleccionados.push(producto);
    this.calculoPrecios.reduce((precio,total) => precio + total)
  }

  
  obtenerArticuloSeleccion() {
    return this.articulosSeleccionados;
  }


  quitarProducto(producto : any){
    this.articulosSeleccionados.splice(producto, 1)
  }


  cantidadArticulosTotal(articulo: any){
    let cantidad = 0;
    for (const articulo of this.articulosSeleccionados){
      cantidad += 1;
    }
    return cantidad;
  }

  totalPrecio() : number {

    let total = 0;

    for (const producto of this.articulosSeleccionados) {
      total += producto.precio;
    }

    return total;
  }

}

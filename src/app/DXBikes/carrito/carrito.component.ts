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

  //inicializamos el servicio carrito
  constructor(
    private servicioCarrito: CarritoService
  ){
    //obtenemos los articulos seleccionados desde el componente Articulos 
    this.articulosSeleccionados = this.servicioCarrito.obtenerArticuloSeleccion();
  }

  //se utiliza metodo splice para quitar el producto 
  quitarProducto(articulo : any){
    this.articulosSeleccionados.splice(articulo, 1)
  }

  // se utiliza para contabilizar los articulos del carrito 
  cantidadArticulosTotal(articulo: any){
    let cantidad = 0;
    for (const articulo of this.articulosSeleccionados){
      cantidad += 1;
    }
    return cantidad;
  }

  // para contabilizar el precio total de los articulos del carrito
  totalPrecio() : number {

    let total = 0;

    for (const producto of this.articulosSeleccionados) {
      total += producto.precio;
    }

    return total;
  }

}

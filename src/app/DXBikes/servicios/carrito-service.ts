import { Injectable, Output, EventEmitter } from "@angular/core";

//@Injectable es un decorador que marca una clase como inyectable y permite
//inyectarla como dependencia en otro componentes, servicios o modulos;
@Injectable()

//Clase que se va a inyectar es ServicioCarritoService;
export class CarritoService {
    servicioArticulo: any;

    constructor(){}
    //Contiene los articulos del carrito 
    articuloSeleccion: any[]=[];
    // Metodo que agrega los articulos al carrito 
    addArticulo(articulo: any){
        this.articuloSeleccion.push(articulo);
    }

    // Retorna los articulos dentro del carrito 
    obtenerArticuloSeleccion(){
        return this.articuloSeleccion;
    }

    // Quita el/los articulos del carrito 
    quitarProducto(articulo: any){
      this.articuloSeleccion.splice(articulo, 1)
    }
}

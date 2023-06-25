import { Injectable, Output, EventEmitter } from "@angular/core";

//@Injectable es un decorador que marca una clase como inyectable y permite
//inyectarla como dependencia en otro componentes, servicios o modulos;
@Injectable()

//Clase que se va a inyectar es ServicioCarritoService;
export class CarritoService {
    servicioArticulo: any;

    constructor(){}

    articuloSeleccion: any[]=[];

    addArticulo(articulo: any){
        this.articuloSeleccion.push(articulo);
    }

    obtenerArticuloSeleccion(){
        return this.articuloSeleccion;
    }

    quitarProducto(articulo: any){
      this.articuloSeleccion.splice(articulo, 1)
    }
}

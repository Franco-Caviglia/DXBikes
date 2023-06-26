import { Injectable } from "@angular/core";
import { ArticuloModel } from "../model/articulo-model";

//@Injectable es un decorador que marca una clase como inyectable y permite
//inyectarla como dependencia en otro componentes, servicios o modulos; 
@Injectable()
export class ArticuloService{
    public articulos: Array<ArticuloModel>

    // definimos los valores de las propiedades del articulos model 
    constructor(){
        this.articulos = [
            new ArticuloModel( 'Patriot', 53994, 'Cuadro',  '' , '../assets/Cuadros/Patriot.jpg', '29', '','2.1kg'),
            new ArticuloModel( 'Scott', 185000, 'Cuadro',  '' , '../assets/Cuadros/Scott.jpg', '29', '','1.9kg'),
            new ArticuloModel( 'Venzo', 199200, 'Cuadro',  '' , '../assets/Cuadros/Venzo.jpg', '29', '', '1.7kg'),
            new ArticuloModel( 'Foxter 4.20', 30987, 'Rueda', 'Aluminio', '../assets/Ruedas/R26.jpg', '', '26', ''),
            new ArticuloModel( 'Vrc 701 Houston', 16500, 'Rueda', 'Aluminio', '../assets/Ruedas/R28.jpg', '', '28', ''),
            new ArticuloModel( 'Shimano Deore Xt', 158336, 'Rueda', 'Aluminio', '../assets/Ruedas/R29.jpg', '', '29', '')
        ]
    }
    // Este metodo nos permite retornar las propiedades 
    getArticulos():Array<ArticuloModel> {
        return this.articulos;
    }
}

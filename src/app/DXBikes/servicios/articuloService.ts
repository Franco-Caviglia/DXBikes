import { Injectable } from "@angular/core";
import { ArticuloModel } from "../model/articulo-model";

@Injectable()
export class ArticuloService{
    public articulos: Array<ArticuloModel>

    constructor(){
        this.articulos = [
            new ArticuloModel( 'Patriot', '2.1kg', 53994, 'Cuadro',  '' , '../assets/Cuadros/Patriot.jpg', '29'),
            new ArticuloModel( 'Patriot', '2.1kg', 53994, 'Cuadro',  '' , '../assets/Cuadros/Patriot.jpg', '29')
        ]
    }


    getArticulos():Array<ArticuloModel> {
        return this.articulos;
    }
}

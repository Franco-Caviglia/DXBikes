import { Component, OnInit } from '@angular/core';
import { ArticuloService } from '../servicios/articuloService';
import { ArticuloModel } from '../model/articulo-model';
import { CarritoService } from '../servicios/carrito-service';

@Component({
  selector: 'app-articulos',
  templateUrl: './articulos.component.html',
  styleUrls: ['./articulos.component.css']
})
export class ArticulosComponent implements OnInit{
  title = 'Articulos';

  public articulos!: Array<ArticuloModel>
  

  // @Input() dataEntrante: any;
  public listaArticulos: Array<any> = [];
  

  constructor(
    // private servicioCarrito: ServicioCarritoService,
    private servicioArticulo: ArticuloService,
    private servicioCarrito: CarritoService
    ){};

  // public item: Articulo[] = []; //Este sera el array que contendra los articulos con sus respectivas propiedades;

  ngOnInit(): void {
    this.articulos = this.servicioArticulo.getArticulos();
  }

  agregarCarrito(articulo: any){
    this.servicioCarrito.addArticulo(articulo)
      
  }
   
}



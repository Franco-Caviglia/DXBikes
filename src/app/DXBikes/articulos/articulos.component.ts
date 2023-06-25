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
  
  //variables para la busqueda;
  public listaCoincidencias: Array<any> = [];
  public articuloBuscado: any; //Este va a ser llamado desde el input del html;
  public articuloEncontrado: any;

  
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
  
  buscarArticulo(){
    const x = this.articulos.find((elemento) => {
      if(elemento.marca === this.articuloBuscado){
        this.articuloEncontrado = this.articulos.indexOf(elemento);
        this.listaCoincidencias.push(this.articulos[this.articuloEncontrado]);
      }
    })
  }
  
  
}



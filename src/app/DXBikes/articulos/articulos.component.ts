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
  // public ruedaFiltrada: boolean = false //nos va a decir si el checkbox del filtro de ruedas esta tildado
  // public cuadroFiltrado: boolean = false // nos va a decir si el checkbox de filtro de ruedas esta tildado


  // @Input() dataEntrante: any;
  public listaArticulos: Array<any> = [];


  constructor(
    // private servicioCarrito: ServicioCarritoService,
    private servicioArticulo: ArticuloService,
    private servicioCarrito: CarritoService
    ){};

  // public item: Articulo[] = []; //Este sera el array que contendra los articulos con sus respectivas propiedades;

  //Iniciamos el servicio articulos en el componente
  ngOnInit(): void {
    this.articulos = this.servicioArticulo.getArticulos();
  }

  //esta es nuestra funcion para agregar items al carrito
  agregarCarrito(articulo: any){
    this.servicioCarrito.addArticulo(articulo)
  }

  //esta es la funcion para buscar items en la lista de articulos;
  buscarArticulo(){
    //esta funcion sirve para limpiar la lista de coincidencias y tener una lista limpia para poder traer los nuevos articulos;
    this.resetSearchList();

    const x = this.articulos.find((elemento) => {
      
      //buscamos el articulo que estamos buscando dentro de la lista articulos, y si hay coincidencia, se inserta en la lista de coincidencias,
      //que utilizaremos para mostrar los elementos buscados;
      if(elemento.marca === this.articuloBuscado || elemento.tipo === this.articuloBuscado
        || elemento.material === this.articuloBuscado || (elemento.rodado || elemento.medida) === this.articuloBuscado){
        this.articuloEncontrado = this.articulos.indexOf(elemento);
        this.listaCoincidencias.push(this.articulos[this.articuloEncontrado]);
      }
    })
  }

  resetSearchList(){
    while(this.listaCoincidencias.length > 0){
      this.listaCoincidencias.pop();
    }
    
  }


}




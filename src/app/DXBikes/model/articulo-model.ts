

export class ArticuloModel{
    constructor( 
        public marca: String, //contendra la marca del articulo;
        public peso: String, //contendra el peso del articulo;
        public precio: Number,//contendra el precio del articulo;
        public tipo: String, //contendra que tipo de articulo es, para identificarlo;
        public material: String,
        public imagen?: String, //contendra el material con el que fue fabricado;
        public medida?: String, //contendra la medida del articulo;
        public rodado?: String //contendra el rodado de la rueda; 
        ){}
}

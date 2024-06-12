export interface IProducto {
    _id:          string;
    name:       string;
    description:   string;
    price:       number;
    image:       string;
    category: Categorias;
    amount: number;
}


export enum Categorias {
    TecladoYraton = 1,
    Microfono,
    Auriculares,
    Computadoras,
  }
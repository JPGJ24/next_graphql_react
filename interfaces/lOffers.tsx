
  interface Product {
    url: string;
  }

interface IOffers {
    name:string
    productsImages:any;
    description:string
    id:string | number;
    cover:any

  }

interface IOffer {
    products:any;
    
  }

  export const NAME_OFFERTS: Product = {
    url: "https://wa.me/573106237379?text=Hola,%20estoy interesado en comprar el%20",
  };
  
export type {
  Product,
  IOffers,
  IOffer
  
}
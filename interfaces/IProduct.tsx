
interface IPresentation {
  name: "Galon" | "Litro" | "20Lt";
  image: React.ReactNode;
  component: any;
  props: { 
    src: string
    alt: string
  }
  isVisible: boolean;
}

interface IProduct {
  title: string;
  description: string;
  composition: string;
  useConditions: string;
  warnings: string;
  presentations: IPresentation[];
}

export type {
  IProduct,
  IPresentation
}
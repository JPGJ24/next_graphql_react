import { IPresentation } from "../interfaces/IProduct";


export const getProductPresentations = (presentations: IPresentation[] , name: string,) => {
  return presentations.map((presentation) => {

    return {
      ...presentation,
      props: {
        src: require(`../assets/Img-App/Product-Description/${name}/${presentation.name}.png`).default.src,
        alt: `${name} ${presentation.name}`,

       
      }
    };
  });
}
import React, { lazy, Suspense} from 'react';
import IconsStartLoading from '../../assets/Icons-SVG/Icons-Home/IconsStartLoading';
import Footer from '../../components/Home/footer';
import NavbarMonsi from '../../components/Home/navbar';
import ProductDescription from "../../components/Product-Description/ProductDescription";
import { PRODUCTS } from "../../data/products";
import { IProduct } from "../../interfaces/IProduct";


type IProductName =  "blanqueador" | "desincrustante" | "desengrasante" | "limpiadorMultiusos" | "lavalozaNeutro";

const ProductPresentation = (props: { type: IProductName }) => {
  const product = PRODUCTS[props.type] as IProduct;

  return (
    <>
    <Suspense fallback={<IconsStartLoading/>}>
    <ProductDescription product={product} />
    </Suspense>
  </>
  )
}

export default ProductPresentation
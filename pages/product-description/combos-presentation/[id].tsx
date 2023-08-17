
import React, {  Suspense} from 'react';
import IconsStartLoading from '../../../assets/Icons-SVG/Icons-Home/IconsStartLoading';
import Footer from '../../../components/Home/footer';
import NavbarMonsi from '../../../components/Home/navbar';
import ProductCombosPresentation from '../../../components/Product-Combos/ProductCombosPresentation';
import { IProduct_Combos } from '../../../interfaces/lProductCombos';
import { getAllProducts } from '../../../lib/api/products';


const ProductCombos = ({products}:IProduct_Combos) => {
  return (
    <>
      <NavbarMonsi/>
      <Suspense fallback={<IconsStartLoading/>}>
      <ProductCombosPresentation products={products} />
      <Footer/>
      </Suspense>
     </>
  )
}

export default ProductCombos

export async function getServerSideProps() {
    const products = await getAllProducts();
    return {
      props: {
        products
      }
    }
  }
  
import Head from "next/head";
import { Suspense } from "react";
import IconsStartLoading from "../assets/Icons-SVG/Icons-Home/IconsStartLoading";
import Footer from "../components/Home/footer";
import NavbarMonsi from "../components/Home/navbar";
import ComponentShoppingCart from "../components/ShoppingCart/ComponentShoppingCart";

export default function ShoppingCart() {
    return (
        <>
        <Head>
          <title>Carrito de Compras</title>
        </Head>
        <Suspense fallback={<IconsStartLoading/>}>
        <NavbarMonsi/>
        <ComponentShoppingCart/>
        <Footer/>
        </Suspense>
      </>
    )
  }
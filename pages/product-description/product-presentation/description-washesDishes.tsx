import Head from "next/head";
import { Suspense } from "react";
import IconsStartLoading from "../../../assets/Icons-SVG/Icons-Home/IconsStartLoading";
import Footer from "../../../components/Home/footer";
import NavbarMonsi from "../../../components/Home/navbar";
import ProductPresentation from "../productDescription";

export default function presentation() {
    return (
        <>
        <Head>
        <title>Lavaloza Neutro Monsi</title>
        </Head> 
        <Suspense fallback={<IconsStartLoading/>}>
        <NavbarMonsi/>
        <ProductPresentation type="lavalozaNeutro" />
        <Footer/>
        </Suspense>
      </>
    )
  };
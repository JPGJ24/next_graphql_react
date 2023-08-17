import Head from "next/head";
import { Suspense } from "react";
import IconsStartLoading from "../assets/Icons-SVG/Icons-Home/IconsStartLoading";
import Footer from "../components/Home/footer";
import NavbarMonsi from "../components/Home/navbar";
import ComponentRefillBottles from "../components/RefillBottles/ComponentRefillBottles";


export default function refillBottles() {
  return (
      <>
        <Head>
        <title>Reutiliza tus envases monsi</title>
        </Head>
        <Suspense fallback={<IconsStartLoading/>}>
        <NavbarMonsi/>
        <ComponentRefillBottles/>
        <Footer/>
        </Suspense>
      </>
  )
}


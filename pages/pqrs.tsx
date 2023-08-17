import Head from "next/head";
import { Suspense } from "react";
import IconsStartLoading from "../assets/Icons-SVG/Icons-Home/IconsStartLoading";
import Footer from "../components/Home/footer";
import NavbarMonsi from "../components/Home/navbar";
import ComponentPQRS from "../components/PQRS/ComponentPQRS";

export default function pqrs() {
  return (
      <>
      <Head>
        <title>PQRS - Monsi</title>
      </Head>
      <Suspense fallback={<IconsStartLoading/>}>
      <NavbarMonsi/>
      <ComponentPQRS/>
      <Footer/>
      </Suspense>
    </>
  )
}
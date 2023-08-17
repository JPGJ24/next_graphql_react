import Head from "next/head";
import { Suspense } from "react";
import IconsStartLoading from "../assets/Icons-SVG/Icons-Home/IconsStartLoading";
import ComponentAboutUs from "../components/About-us/componentAboutUs";
import Footer from "../components/Home/footer";
import NavbarMonsi from "../components/Home/navbar";


export default function about () {
  return (
    
    <>
      <Head>
        <title>Quienes Somos</title>
      </Head>
      <Suspense fallback={<IconsStartLoading/>}>
      <NavbarMonsi/>
      <ComponentAboutUs/>
      <Footer/>
      </Suspense>
    </>
    
  )
}

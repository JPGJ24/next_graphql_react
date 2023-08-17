import Head from "next/head";
import { Suspense } from "react";
import IconsStartLoading from "../assets/Icons-SVG/Icons-Home/IconsStartLoading";
import ComponentBlogEnvironment from "../components/Blog-Environment/ComponentBlogEnvironment";
import Footer from "../components/Home/footer";
import NavbarMonsi from "../components/Home/navbar";


export default function blogEnvironment() {
  return (
    <>
    <Head>
      <title>Comprometidos con el medio ambiente</title>
    </Head>
    <Suspense fallback={<IconsStartLoading/>}>
    <NavbarMonsi/>
    <ComponentBlogEnvironment/>
    <Footer/>
    </Suspense>
  </>
  )
}


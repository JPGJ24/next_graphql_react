import Head from "next/head";
import { Suspense } from "react";
import IconsStartLoading from "../assets/Icons-SVG/Icons-Home/IconsStartLoading";
import Footer from "../components/Home/footer";
import NavbarMonsi from "../components/Home/navbar";
import PrivacyAndInformation from "../components/Privacy-and-information/PrivacyAndInformation";

export default function index() {
  return (
      <>
        <Head>
          <title>Informacion y Privacidad monsi</title>
        </Head>
        <Suspense fallback={<IconsStartLoading/>}>
        <NavbarMonsi/>
        <PrivacyAndInformation/>
        <Footer/>
        </Suspense>
      </>
  )
}
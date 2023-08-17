import Head from "next/head";
import { Suspense } from "react";
import IconsStartLoading from "../../assets/Icons-SVG/Icons-Home/IconsStartLoading";
import ComponentPasswordReset from "../../components/Login/ComponentPasswordReset";

export default function passwordReset() {
    return(
        <>
        <Head>
          <title>Recuperar Contraseña</title>
        </Head>
        <Suspense fallback={<IconsStartLoading/>}>
        <ComponentPasswordReset/>
        </Suspense>
      </>
    )
}
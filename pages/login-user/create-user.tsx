import Head from "next/head";
import { Suspense } from "react";
import IconsStartLoading from "../../assets/Icons-SVG/Icons-Home/IconsStartLoading";
import ComponentCreateUser from "../../components/Login/ComponentCreateUser";

export default function createUser() {
    return (
        <>
        <Head>
          <title>Registrate</title>
        </Head>
        <Suspense fallback={<IconsStartLoading/>}>
        <ComponentCreateUser/>
        </Suspense>
      </>
    )
}
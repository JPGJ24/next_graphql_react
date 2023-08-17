import Head from "next/head"
import { Suspense } from "react"
import IconsStartLoading from "../../assets/Icons-SVG/Icons-Home/IconsStartLoading"
import ComponentLogin from "../../components/Login/ComponentLogin"


export default function Login() {
  return (
    <>
      <Head>
        <title>Iniciar sesion</title>
      </Head>
      <Suspense fallback={<IconsStartLoading/>}>
      <ComponentLogin/>
      </Suspense>
    </>
  )
}

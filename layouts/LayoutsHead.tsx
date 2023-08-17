import Head from "next/head";
import { IconsWathsApp } from "../assets/Icons-SVG/Icons-Home/IconsWathsApp";


export const LayoutsHead= () => {
  return (
    <>
    <Head>
      <title>Monsi</title>
      <meta name="description" content="monsi" />
      <meta name="viewport" content="width=device-width, initial-scale=1" />
      <link rel="icon" href="/favicon.ico" />
      {/* <!-- Animation Scroll --> */}
      <link href="https://unpkg.com/aos@2.3.1/dist/aos.css" rel="stylesheet"/>
      {/* <link rel="manifest" href="%PUBLIC_URL%/manifest.json" /> */}
    {/* <!--Script Boostrap-React  --> */}
      <link
     rel="stylesheet"
     href="https://cdn.jsdelivr.net/npm/bootstrap@5.2.2/dist/css/bootstrap.min.css"
     integrity="sha384-Zenh87qX5JnK2Jl0vWa8Ck2rdkQ2Bzep5IDxbcnCeuOxjzrPF/et3URy9Bv1WTRi"
     crossOrigin="anonymous"/>
     <link rel="stylesheet" href="https://stackpath.bootstrapcdn.com/font-awesome/4.7.0/css/font-awesome.min.css"></link>

    </Head>
    <IconsWathsApp />
  </>
  )
}



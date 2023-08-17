import Head from 'next/head';
import Image from 'next/image'
import { useRouter } from 'next/router';
import Img404 from '../assets/Img-App/Img-404/404.png'
import { Container404,  Title404, TitleSub404 } from '../styles/Styles-404/404.styles'

export default function error404() {
  const router = useRouter()
  const handleClick = () => {router.back()};
  return (
       <Container404>
        <Head>
          <title>Error 404</title>
        </Head>
         <div>
          <Image className={'styleImg404'} src={Img404} alt={'error404'}/>
          <Title404>Ups! Creo que encontraste un error</Title404>
          <TitleSub404 onClick={handleClick}>Lo mejor es que vuelvas a donde estabas</TitleSub404>
        </div>
       </Container404>
  )
}

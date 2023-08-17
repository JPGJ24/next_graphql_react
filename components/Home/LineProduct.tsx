
import React from 'react'
import {
  ContentLineProduct, DivLineProduct,
  TitleLineProduct, TitleProduct, TextLineProduct,
  Span, BtnLineProduct,
  DivCardSale, DivLineBublle,
  NameCard, NameCardTwo, Anchor, DivProduct
} from '../../styles/Styles-Home/LineProduct.styles'
import AllPurposeCleaner from '../../assets/Img-App/Product-Description/LimpiadorMultiusos/Galon.png'
import Desincrustante from '../../assets/Img-App/Product-Description/Desincrustante/Galon.png'
import Bleach from '../../assets/Img-App/Product-Description/Blanqueador/Galon.png'
import Degreaser from '../../assets/Img-App/Product-Description/Desengrasante/Galon.png'
import WashesDishes from '../../assets/Img-App//Product-Description/LavalozaNeutro/Galon.png'
import { Bubble1, Bubble2, Bubble3, Bubble4, Bubble5, BubbleAnimation } from '../../styles/Styles-Home/banner.styles';
import { IconsWave } from '../../assets/Icons-SVG/Icons-Home/IconsWave';
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import {  Responsive} from '../../styles/Styles-About-us/AboutUs.Styles';
import Image from 'next/image'
import { useRouter } from 'next/router'


const LineProduct = () => {


const router = useRouter()
  function DescriptionBleach() {
    router.push("/product-description/product-presentation/description-bleach")
  };
  function DescriptionDegreaser() {
    router.push("/product-description/product-presentation/description-degreaser")
  };
  function DescriptionDesincrustante() {
    router.push("/product-description/product-presentation/description-desincrustante")
  };
  function DescriptionAllPurposeCleaner() {
    router.push("/product-description/product-presentation/description-allPurpose")
  };
  function DescriptionWashesDishes() {
    router.push("/product-description/product-presentation/description-washesDishes")
  };

return (
  <ContentLineProduct>
    <IconsWave />
    <DivLineProduct id="ProductLine">
      <div data-aos="fade-up" data-aos-duration="1000" >
        <TitleLineProduct >Línea de </TitleLineProduct>
        <TitleProduct>Producto</TitleProduct>
        <TextLineProduct >Conoce cada uno de nuestros productos y sus presentaciones,
          perfectos para cada espacio de tu empresa, negocio o emprendimiento.
        </TextLineProduct>
      </div>
      <div data-aos="fade-up" data-aos-duration="1000">
        <Span>1 Litro | Galón | 20 Litros</Span>
        <DivProduct>
          <Carousel responsive={Responsive}>
            <div className={'divContent'}><Image className={'ImgCards'} src={Desincrustante} alt={"desincrustante"} onClick={() => DescriptionDesincrustante()} />
            <DivCardSale>
              <NameCard>Desincrustante</NameCard>
            </DivCardSale></div>
            <div className={'divContent'}><Image className={'ImgCards'} src={WashesDishes} alt={"lavaloza"} onClick={() => DescriptionWashesDishes()} />
            <DivCardSale>
              <NameCard>Lavaloza</NameCard>
              <NameCardTwo>Neutro</NameCardTwo>
            </DivCardSale></div>
            <div className={'divContent'}><Image className={'ImgCards'} src={Bleach} alt={"blanqueador"} onClick={() => DescriptionBleach()} />
            <DivCardSale>
              <NameCard>Blanqueador</NameCard>
              <NameCardTwo>Multiusos</NameCardTwo>
            </DivCardSale></div>
            <div className={'divContent'}><Image className={'ImgCards'} src={AllPurposeCleaner} alt={"limpiador multiusos"} onClick={() => DescriptionAllPurposeCleaner()} />
            <DivCardSale>
              <NameCard>Limpiador</NameCard>
              <NameCardTwo>Multiusos</NameCardTwo>
            </DivCardSale></div>
            <div className={'divContent'}><Image className={'ImgCards'} src={Degreaser} alt={"desengrasante"} onClick={() => DescriptionDegreaser()} />
            <DivCardSale>
              <NameCard>Desengrasante</NameCard>
            </DivCardSale></div>
          </Carousel>
        </DivProduct>
        <BtnLineProduct>
          <Anchor href="https://wa.me/573106237379?text=Hola,%20me%20gustaría%20obtener%20más%20información%20sobre%20los%20productos%20Monsi."
            target="_blank">¡Cotiza ya!</Anchor>
        </BtnLineProduct>
      </div>
    </DivLineProduct>
    <DivLineBublle>
      <BubbleAnimation />
      <Bubble1 />
      <Bubble2 />
      <Bubble3 />
      <Bubble4 />
      <Bubble5 />
    </DivLineBublle>
    <IconsWave />
  </ContentLineProduct>
)
}
export default LineProduct
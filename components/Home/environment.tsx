import React from 'react'
import {
  ContentEnvironment, EnvironmentColumns, TitleEnvironment,
  TextMediumEnvironment, ParagraphEnvironment,
  DivBublle
} from '../../styles/Styles-Home/environment.styles'
import Bottle from '../../assets/Img-App/Img-Home/img-environment/bottle.png';
import Cien from '../../assets/Img-App/Img-Home/img-environment/100.png';
import { Bubble1, Bubble2, Bubble3, Bubble4, Bubble5, BubbleAnimation } from '../../styles/Styles-Home/banner.styles';
import { IconsWaveDown } from '../../assets/Icons-SVG/Icons-Home/IconsWaveDown';
import Image from 'next/image';
import { useRouter } from 'next/router';

const Environment = () => {
  const router = useRouter();
  const Blog = () => {
    router.push("/blog-environment")
  }
  return (
    <ContentEnvironment data-aos={"none"}>
      <Image className={'ImgBottle'} src={Bottle} alt={"Envase"} data-aos={"fade-right"} data-aos-duration={"1000"} data-aos-easing={"ease-in-sine"} />
      <EnvironmentColumns data-aos={"fade-right"} data-aos-duration={"1000"} data-aos-easing={"ease-in-sine"} >
      <Image className={'ImgCien'} src={Cien} alt={'Medio ambiente'} />
        <TitleEnvironment>Comprometidos con</TitleEnvironment>
        <TextMediumEnvironment>el medio ambiente</TextMediumEnvironment>
        <ParagraphEnvironment>Todos nuestros productos están elaborados
          con componentes de alta calidad que son amigables con el medio ambiente.
          <button className={'BtnEnvironment'} onClick={() => Blog()}>Saber más</button>
        </ParagraphEnvironment>
      </EnvironmentColumns>
      <DivBublle>
        <BubbleAnimation />
        <Bubble1 />
        <Bubble2 />
        <Bubble3 />
        <Bubble4 />
        <Bubble5 />
      </DivBublle>
      <IconsWaveDown />
    </ContentEnvironment>
  )
}
export default Environment
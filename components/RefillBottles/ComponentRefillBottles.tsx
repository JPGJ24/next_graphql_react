import React from 'react'
import { ContainerRefill, DivCard, ImgTitle, LocationText, LocationTitle, 
Subtitle, SubtitleText, TextInfo, TitlesCards } from '../../styles/Styles-Refill-Bottles/RefillBottles.styles'
import Bottle from '../../assets/Img-App/Img-refillBottles/botella.png'
import Cork from '../../assets/Img-App/Img-refillBottles/tapa.png'
import { Refill } from '../../assets/Icons-SVG/Icons-Home/IconsRefillBottle'
import Image from 'next/image'


const ComponentRefillBottles = () => {
  return (
    <ContainerRefill>
      <div className={'info'}>
        <ImgTitle><Refill /></ImgTitle>
        <Subtitle>Premiamos tu compromiso con el medio ambiente.</Subtitle>
        <TextInfo>obten un 10% de descuento en la siguiente compra del mismo producto
        MONSI del envase que traigas a nuestra tienda fisica.</TextInfo>
        <span className={'span'}>*Aplican términos y condiciones.</span>
        <SubtitleText>Sigue las siguientes recomendaciones al traer tu envase MONSI:</SubtitleText>
            <div className={'cards'}>
              <DivCard>
                <Image className={'ImgRefill'} src={Bottle} alt='Envase' />
                <TitlesCards>ENVASE PERFECTO</TitlesCards>
                <p className={'textCards'}>El envase debe encontrarse en perfecto estado, sin ningun tipo de
                  detalle que pueda perjudicar la calidad de uso del envase.
                  (Rasguños, huecos, abolladuras, golpes).</p>
              </DivCard>
              <DivCard>
                <Image className={'ImgRefill'} src={Cork} alt='tapas' />
                <TitlesCards>TRAE LAS TAPAS</TitlesCards>
                <p className={'textCards'}>No olvides traer la tapa del envase para poder obtener el descuento
                  de tu proximo producto</p>
              </DivCard>
            </div>
        <LocationTitle>Dirección de nuestra tienda fisica</LocationTitle>
        <LocationText>Calle 41 No 73 - 61, Calle 41 No 73 - 59, Medellín, Antioquia</LocationText>
      </div>
    <iframe  className={'mapGoogle'} src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d15864.495493856259!2d-75.5930843!3d6.247403!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0xd7310906d664f6fa!2sMonsi!5e0!3m2!1ses-419!2sco!4v1670275507574!5m2!1ses-419!2sco" loading="lazy" />
    </ContainerRefill>
  )
}
export default ComponentRefillBottles
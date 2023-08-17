import React from 'react'
import {
  ContentSample, DivContentSample, DivContentLila,
  CardS, Columns, ImgCard, DivCard, TitleCard, TextCard,
  Text, Span, DivSample, TitleSteps, ImgMovil, TextSteps,
  BtnSteps, TitleService, TitleServiceTwo, Text1, DivText, ImgLocation,
  ImgLicense, DivSampleBublle, Anchor
} from '../../styles/Styles-Home/sample.styles'
import LogoBlue from '../../assets/Img-App/Img-Home/img-sample/LogoBlue.png'
import { Bubble1, Bubble2, Bubble3, Bubble4, Bubble5, BubbleAnimation } from '../../styles/Styles-Home/banner.styles';
import { Deliveries, Invoice, Locations, Phone, StoreMethod, Warranty, Adviser } from '../../assets/Icons-SVG/Icons-Home/IconosSimple'
import { IconsWave } from '../../assets/Icons-SVG/Icons-Home/IconsWave';
import { IconsWaveDown } from '../../assets/Icons-SVG/Icons-Home/IconsWaveDown';
import Image from 'next/image';


const Sample = () => {
  return (

    <ContentSample>
      <DivContentSample>
        <div data-aos={"fade-up"} data-aos-duration={"1000"}>
          <Image className={'LogoB'} src={LogoBlue} alt={"Monsi"} />
          <Text >Solicita la demostración <Span>GRATIS</Span> de nuestros
            productos y conoce todos
            <Text1>
              los beneficios que estos ofrecen para ti.
            </Text1>
          </Text>
          <TitleSteps>Sigue estos pasos:</TitleSteps>
        </div>
        <DivSample data-aos={"fade-up"} data-aos-duration={"1000"} >

          <ImgMovil>
            <Phone />
          </ImgMovil>
          <DivText>
            <TitleSteps>1. Ingresa tus datos</TitleSteps>
            <TextSteps>Ingresa en nuestra prueba MONSI,
              registra todos tus datos para continuar con el proceso.
            </TextSteps>
          </DivText>

          <ImgLocation>
            <Locations />
          </ImgLocation>
          <DivText>
            <TitleSteps>2. Agenda tu cita</TitleSteps>
            <TextSteps>Agenda tu demostración con uno de nuestros asesores.
            </TextSteps>
          </DivText>

          <ImgLicense>
            <Invoice />
          </ImgLicense>
          <DivText>
            <TitleSteps>3. Solicita tu cotización</TitleSteps>
            <TextSteps>Recibe la cotización para tu negocio o empresa.
            </TextSteps>
          </DivText>
        </DivSample>
        <BtnSteps>
          <Anchor href="https://wa.me/573106237379?text=Hola,%20me%20gustaría%20obtener%20más%20información%20sobre%20los%20productos%20Monsi."
            target="_blank">Regístrate aquí</Anchor>
        </BtnSteps>
      </DivContentSample>
      <DivContentLila>
        
        <IconsWave />
       
        <TitleService>Servicio</TitleService>
        <TitleServiceTwo>al cliente</TitleServiceTwo>
        <Columns data-aos={"fade-right"} data-aos-duration={"1000" }data-aos-easing={"ease-in-sine"} >
          <CardS>
            <ImgCard>
              <StoreMethod />
            </ImgCard>
            <DivCard>
              <TitleCard>METODO DE COMPRA</TitleCard>
              <TextCard>Compra Online 24/7 o comunicate con un asesor.</TextCard>
            </DivCard>
          </CardS>
          <CardS>
            <ImgCard>
              <Deliveries />
            </ImgCard>
            <DivCard>
              <TitleCard>ENTREGAS Y ENVÍOS</TitleCard>
              <TextCard>Entrega a domicilio en Medellín o envíos a cualquier parte del país.</TextCard>
            </DivCard>
          </CardS>
          <CardS>
            <ImgCard>
              <Adviser />
            </ImgCard>
            <DivCard>
              <TitleCard>ASESORÍA EN VENTA</TitleCard>
              <TextCard>Recibe asesoría de nuestros productos, vía WhatsApp o telefónica.</TextCard>
            </DivCard>
          </CardS>
          <CardS>
            <ImgCard>
              <Warranty />
            </ImgCard>
            <DivCard>
              <TitleCard>GARANTÍA DIRECTA</TitleCard>
              <TextCard>Atendemos cualquier queja o reclamo con fácil tratamiento.</TextCard>
            </DivCard>
          </CardS>
        </Columns>
        <IconsWaveDown />
      </DivContentLila>
      <DivSampleBublle>
        <BubbleAnimation />
        <Bubble1 />
        <Bubble2 />
        <Bubble3 />
        <Bubble4 />
        <Bubble5 />
      </DivSampleBublle>
    </ContentSample>
  )
}

export default Sample
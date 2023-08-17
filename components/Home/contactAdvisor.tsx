import React from 'react'
import {
  ContentAdvisor, InfoAdvisor, UlAdvisor, Spann, TitleAdvisor,
  BtnAdvisor, Anchor
} from '../../styles/Styles-Home/ContactAdvisor.styles'
import LogoBlue from '../../assets/Img-App/Img-Home/img-ContactAdvisor/LogoBlue.png'
import Woman from '../../assets/Img-App/Img-Home/img-ContactAdvisor/Woman.png';
import Image from 'next/image';


const ContactAdvisor = () => {
  return (
    <ContentAdvisor>
      <InfoAdvisor data-aos={"fade-right"} data-aos-duration={"1000"} data-aos-easing={"ease-in-sine"} >
        <Image className={'ImgLogoblue'} src={LogoBlue} alt={"Monsi"} />
        <TitleAdvisor>Consulta Toda la información necesaria
          para tu negocio o empresa
        </TitleAdvisor>
        <UlAdvisor>
          <li><Spann>Fichas técnicas.</Spann></li>
          <li><Spann>Certificados.</Spann></li>
          <li><Spann>Hoja de seguridad</Spann></li>
          <li><Spann>Manipulación de productos químicos.</Spann></li>
          <li><Spann>Consejos y recomendaciones.</Spann></li>
        </UlAdvisor>
        <BtnAdvisor>
          <Anchor href="https://wa.me/573106237379?text=Hola,%20me%20gustaría%20obtener%20más%20información%20sobre%20los%20productos%20Monsi."
            target="_blank">Contacta un asesor</Anchor>
        </BtnAdvisor>
      </InfoAdvisor>
      <Image className={'ImgWoman'} src={Woman} alt={"Quimica"} />
    </ContentAdvisor>
  )
}
export default ContactAdvisor

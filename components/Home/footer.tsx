import React from 'react'
import { ContactosFooter, ContentFooter, InfoFooter,
  UlFooterLeft, IconsFooter, TitleFooterLeft,
  TitleFooterRight, UlFooterRight, Iconsocial} from '../../styles/Styles-Home/footer.styles'
import {Facebook, Gmail, Instagram, Linkedin, Location, WathsApp, Youtube
} from '../../assets/Icons-SVG/Icons-Home/IconosFooter';
import LogoFooter from '../../assets/Img-App/Img-Home/img-Footer/logoFooter.png';
import Link from 'next/link';
import Image from 'next/image';
import { useRouter } from 'next/router';


const Footer = () => {

  const router = useRouter();

  function privacyInformationPath() {
    router.push("/privacy-and-information")
  };

  function aboutUsPath() {
    router.push("/about-us")
  };

  function home() {
    router.push("/")
  };

  return (
    <ContentFooter>
      <ContactosFooter>
        <Image className={'LogoMonsiFooter'} src={LogoFooter} alt={"Monsi"}  onClick={() => home()}/>
        <UlFooterLeft>
          <li><IconsFooter>
            <Location />
          </IconsFooter>
            <a className={'Anchor' }href='https://www.google.com/maps/dir//monsi%7D/data=!4m6!4m5!1m1!4e2!1m2!1m1!1s0x8e44299f983f2609:0xd7310906d664f6fa?sa=X&ved=2ahUKEwiV-5L1vI37AhVBSDABHfR2Ci4Q9Rd6BAhNEAU'
              target="_blank">Cl.41 Cr73 - 59, Medellín, Antioquia
            </a>
          </li>
          <li><IconsFooter>
            <Gmail />
          </IconsFooter>
            <a className={'Anchor'} href='https://mail.google.com/mail/u/0/#inbox?compose=GTvVlcSDXXfgNnbbRHNKzmqWPSpTlkKNPqRDRHZWrFQCmqbwqFdtbCSQxlQpcVmGZgCMsfBQmxQKr'
              target="_blank">asesorcomercial@monsidecolombia.com
            </a>
          </li>
          <li><IconsFooter>
            <WathsApp />
          </IconsFooter>
            <a className={'Anchor'} href="https://wa.me/573106237379?text=Hola,%20me%20gustaría%20obtener%20más%20información%20sobre%20los%20productos%20Monsi."
              target="_blank">310 623 7379
            </a>
          </li>


          <TitleFooterLeft>ACERCA DE MONSI</TitleFooterLeft>
          <li> <a className={'Anchor' } onClick={() => aboutUsPath()}>Quienes somos</a></li>
          <li>Clientes</li>
          <li>Contacto</li>
        </UlFooterLeft>
      </ContactosFooter>

      <InfoFooter>
        <TitleFooterRight>INFORMACIÓN Y PRIVACIDAD</TitleFooterRight>
        <UlFooterRight >
          <a className={'AnchorR'} onClick={() => privacyInformationPath()}>
            <li>Términos y condiciones</li>
            <li>Política de tratamiento de datos</li>
            <li>Política de devolución de venta y garantía</li>
          </a>
        </UlFooterRight>
        <TitleFooterRight>SIGUENOS EN:</TitleFooterRight>
        <Iconsocial>
          <Facebook />
          <Instagram />
          <Youtube />
          <Linkedin />
        </Iconsocial>

      </InfoFooter>
    </ContentFooter>
  )
}
export default Footer
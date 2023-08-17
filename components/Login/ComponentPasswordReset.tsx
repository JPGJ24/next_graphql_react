import React from 'react'
import LogoLogin from '../../assets/Img-App/Img-Login/logoLogin.png'
import { ToClose } from '../../assets/Icons-SVG/Icons-Login/IconsLogin'
import { Container, IconsToClose, LinckHome, TitleLogin
} from '../../styles/Styles-Login/Login.styles';
import { BtnPasswordReset, ContainPasswordReset } from '../../styles/Styles-Login/PasswordReset.styles';
import { useRouter } from 'next/router';
import Image from 'next/image';

const ComponentPasswordReset = () => {

  const router = useRouter();
  function handleClick() {
    router.back()
  };
  
  return (
    <Container>
    <LinckHome href={"/"}><Image className={'ImgLogoLogin'} src={LogoLogin} alt='logo monsi' /></LinckHome>
  <div className={'nav'}>
    <IconsToClose onClick={handleClick}><ToClose /></IconsToClose>
  </div>
  <ContainPasswordReset>
    <TitleLogin>Restablecer contraseña</TitleLogin>
      <h5>Ingresa tu email y te enviaremos un enlace para restabllecer tu contraseña</h5>
    <div className={'containerItms'}>
      <form action="">
        <div className={"form__group field"}>
          <input type="text" className={"form__input"} placeholder="Example@gmail.com" />
         </div>
        <BtnPasswordReset>Enviar</BtnPasswordReset>
      </form>
    </div>
  </ContainPasswordReset>
</Container>
  )
}

export default ComponentPasswordReset
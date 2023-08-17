import React from 'react'
import LogoLogin from '../../assets/Img-App/Img-Login/logoLogin.png'
import { ArrowBottom, Facebooklogin, GmailLogin, ToClose } from '../../assets/Icons-SVG/Icons-Login/IconsLogin'
import {BtnFacebook, BtnGoogle, Container, DivContainer,
IconsSocialMedia,IconsToClose, LinckHome, TitleLogin
} from '../../styles/Styles-Login/Login.styles';
import {BtnCreateUser, StartSocialMedia } from '../../styles/Styles-Login/CreateUser.styles'
import { useRouter } from 'next/router';
import Image from 'next/image';


const ComponentCreateUser = () => {

  const router = useRouter();
  function handleClick() {
    router.back()
  };

  function User() {
    router.push("/login-user/login");
  };

  function conditions() {
  router.push("/privacy-and-information")
  };

  return (
    <Container>
        <LinckHome href={"/"}><Image className={'ImgLogoLogin'} src={LogoLogin} alt='logo monsi' /></LinckHome>
      <div className={'nav'}>
        <IconsToClose onClick={handleClick}><ToClose /></IconsToClose>
      </div>
      <DivContainer>
        <TitleLogin>Regístrate</TitleLogin>
        <h3>¿Ya tienes cuenta?<a className={'anchor'} onClick={() => User()}> Iniciar Sesión</a></h3>
        <div className={'containerItms'}>
          <form action="">
            <div className={"form__group field"}>
              <input type="text" className={"form__input"} placeholder="Nombre" />
              <label className={"form__label"}>Nombre</label>
            </div>
            <div className={"form__group field"}>
              <input type="text" className={"form__input"} placeholder="Apellido" />
              <label className={"form__label"}>Apellido</label>
            </div>
            <div className={"form__group field"}>
              <input type="mail" className={"form__input"} placeholder="Email" />
              <label className={"form__label"}>Email</label>
            </div>
            <div className={"form__group field"}>
              <input type="password" className={"form__input"} placeholder="Contraseña" />
              <label className={"form__label"}>Contraseña</label>
            </div>
            <BtnCreateUser>regístrate <ArrowBottom /></BtnCreateUser>
          </form>

          <StartSocialMedia>
            <IconsSocialMedia><GmailLogin /></IconsSocialMedia>
            <BtnGoogle>Continuar con Google</BtnGoogle>
            <IconsSocialMedia><Facebooklogin /></IconsSocialMedia>
            <BtnFacebook>Continuar con Facebook</BtnFacebook>

          </StartSocialMedia>

        </div>
        <p className={'conditions'} onClick={() => conditions()}>
          *al regístarte, aceptas nuestros
          <a className={'anchor'}> terminos y condciones</a>
          y reconoces que has leido nuestra
          <a className={'anchor'}> Politica de privacidad.</a>
        </p>
      </DivContainer>
    </Container>
  )
}

export default ComponentCreateUser
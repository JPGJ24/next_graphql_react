import FacebookLogin from 'react-facebook-login/dist/facebook-login-render-props'
import {GoogleLogin, GoogleLogout  } from 'react-google-login';
import LogoLogin from '../../assets/Img-App/Img-Login/logoLogin.png'
import { ArrowBottom, Facebooklogin, GmailLogin, ToClose } from '../../assets/Icons-SVG/Icons-Login/IconsLogin'
import {BtnFacebook, BtnGoogle, BtnLogin, Container, DivContainer,
IconsSocialMedia,IconsToClose, LinckHome, TitleLogin
} from '../../styles/Styles-Login/Login.styles';
import { useLogin } from '../../hooks/useLogin';
import Image from 'next/image';
import { signIn, signOut } from "next-auth/react"
import { useRouter } from 'next/router';


const ComponentLogin = () => {
const router = useRouter()
  const { userGmail, userFacebook, handleClick, createUser, passwordReset, conditions, user,
    loginUser,start_session_user, idConectGmail, idConectFacebook, loginGoogle,
    signOutGoogle, loginFacebook, signOutFacebook } = useLogin();
    
  async function handleGoogleSignin() {
    signIn('google',{callbackUrl:"http://localhost:3000"})
    
  }
  async function handleGoogleSignin1() {
    router.push("/privacy-and-information")
    signIn('facebook',{callbackUrl:"http://localhost:3000/"})
  }


  return (
    <Container>
        <LinckHome href={"/"}><Image className={'ImgLogoLogin'} src={LogoLogin} alt='logo monsi' /></LinckHome>
      <div className={'nav'}>
  
        <IconsToClose onClick={handleClick}><ToClose /></IconsToClose>
      </div>
     {/* <button onClick={() => handleGoogleSignin1()} >faceb</button>
      <button onClick={handleGoogleSignin}>Signin</button> */}
 

      {/* {Object.keys(userFacebook).length != 0 &&
      userFacebook  && <div>
      <img src={userFacebook.picture.data.url} alt='userName'></img>
      <h3>{userFacebook.name}</h3>
      <button onClick={signOutFacebook}>cerrar sesion</button>
    </div>
      } */}
      <DivContainer>
        {/* {Object.keys(userGmail).length != 0 &&
      userGmail  && <div>
      <img referrerPolicy="no-referrer" src={userGmail.imageUrl}  alt='userName'></img>
      <h3>{userGmail.name}</h3>
    <GoogleLogout
      clientId={idConectGmail}
      buttonText={"Logout"}
      onLogoutSuccess={signOutGoogle}>
    </GoogleLogout>
     </div>
  
      } */}
        <TitleLogin>Iniciar Sesión</TitleLogin>
        <h3>¿No tienes cuenta?<a className={'anchor'} onClick={() => createUser()}> Regístrate</a></h3>
        <div className={'containerItms'}>
          <form action="">
            <div className={"form__group field"}>
              <input type="mail" className={"form__input"} placeholder="Email" 
               name="username" 
              //  value={user.username}
                onChange={loginUser}/>
              <label className={"form__label"}>Email</label>
            </div>
            <div className={"form__group field"}>
              <input type="password" className={"form__input"}  placeholder="Contraseña" 
              name="password" 
              // value={user.password}
               onChange={loginUser} />
              <label className={"form__label"}>Contraseña</label>
            </div>
            <p className={'text'}><a className={'anchor'} onClick={() => passwordReset()}>¿Olvidaste tu Contraseña?</a></p>
            <BtnLogin type='submit' onClick={start_session_user}>Iniciar Sesión <ArrowBottom /></BtnLogin>
            
          </form>
      
          <div className={'startSocialMedia'}>
 
        
      <GoogleLogin
        clientId={idConectGmail}
        buttonText="Login"
        onSuccess={loginGoogle}
        onFailure={loginGoogle}
        cookiePolicy={'single_host_origin'}
        isSignedIn={true}
  
        render={renderProps => (
          <>
          <IconsSocialMedia><GmailLogin /></IconsSocialMedia>
          <BtnGoogle onClick={renderProps.onClick} disabled={renderProps.disabled}>Continuar con Google</BtnGoogle>
         </>
        )}>
          
      </GoogleLogin>

      <FacebookLogin
        appId={idConectFacebook}
        autoLoad={false}
        fields="name,email,picture"
        callback={loginFacebook}
        render={(renderProps:any) => (
     <>
      <IconsSocialMedia><Facebooklogin /></IconsSocialMedia>
      <BtnFacebook type='submit' onClick={renderProps.onClick}>Continuar con Facebook</BtnFacebook>
    </>
    )}/>
          </div>

        </div>
        <p className={'conditions'} onClick={() => conditions()}>
          *Se aplican los
          <a className={'anchor'} > terminos y condciones</a>
          y reconoces que has leido nuestra
          <a className={'anchor'}> Politica de privacidad.</a>
        </p>
        
      </DivContainer>
    </Container>
  )
}

export default ComponentLogin
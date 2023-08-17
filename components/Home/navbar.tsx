import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { IconsNavbar, ImgUser, NavbarContainer, NavbarLink, UserName, NavbarCart} from '../../styles/Styles-Navbar/navbar.styles';
import { DivOffcanvas, TitleProduct, Sale, TotalSale, DescriptionProduct } from '../../styles/Styles-Navbar/NavbarAddToCart';
import { Logo } from '../../styles/Styles-Navbar/navbar.styles';
import { Industry, Home, Offerts, AboutUs, PQRS, Like, Store, 
User, LogoMonsi, Login, Create_User, DeleteCart } from '../../assets/Icons-SVG/Icons-Home/IconsNavbar';
import { useLogin } from '../../hooks/useLogin';
import {GoogleLogin, GoogleLogout  } from 'react-google-login';
import { NavDropdown } from 'react-bootstrap';
import Offcanvas from 'react-bootstrap/Offcanvas';
import CocinaImpecable from '../../assets/Img-App/Img-Home/img-Offers/lavloza-bestSell.png';
import useShoppingCart from '../../hooks/useShoppingCart';
import { BtnCounter } from '../../styles/Styles-Product-Description/ProductDescription.styles';
import useNavbar from '../../hooks/useNavbar';
import Image from 'next/image';
import {  signOut, signIn } from "next-auth/react"


const NavbarMonsi = () => {
  const { userGmail, userFacebook, idConectGmail,
		    loginGoogle, signOutGoogle, signOutFacebook, signOutUser, user} = useLogin();
        
  const {max, increase, reduce } = useShoppingCart();
  const {show, expanded, setExpanded, ShoppingCart, handleClose, handleShow} = useNavbar();
  async function handleGoogleSignOut() {
    signOut()
  }


  return (
    
    <NavbarContainer >
      <Navbar id='home' fixed="top" collapseOnSelect expand="lg" className={'color'} variant="dark" expanded={expanded} onToggle={() => setExpanded(!expanded)}>
        <Container >
          {/* <div>
            {name},
            <img src={images} alt={name} />
            <button onClick={() => handleGoogleSignOut()}>signOut</button>
         
          </div> */}
          <NavbarLink href={"/"} onClick={() => setExpanded(false)}><Logo><LogoMonsi /></Logo></NavbarLink>
          <Navbar.Toggle aria-controls="responsive-navbar-nav" className={'black-toggler'} />
          <Navbar.Collapse id="responsive-navbar-nav" className={'black-toggler'}>
            <Nav className={"me-auto"}>
              <NavbarLink href={"/#ProductLine"} onClick={() => setExpanded(false)}><IconsNavbar><Industry /></IconsNavbar>Linea industrial y comercial</NavbarLink>
              {/* <NavbarLink to="/"><IconsNavbar><Home/></IconsNavbar>Linea Hogar</NavbarLink> */}
              <NavbarLink href={"/#Offers"} onClick={() => setExpanded(false)}><IconsNavbar><Offerts /></IconsNavbar>Ofertas</NavbarLink>
              <NavbarLink href={"/about-us"}><IconsNavbar><AboutUs /></IconsNavbar>Quienes somos</NavbarLink>
              <NavbarLink href={"/pqrs"}><IconsNavbar><PQRS /></IconsNavbar>PQRS</NavbarLink>
            </Nav>
            <Nav>
              {/* <NavbarLink className={'MenuIcons'} href={"/login"}><IconsNavbar><Like /></IconsNavbar>Favoritos</NavbarLink> */}
              {/* <NavbarCart className={'addCart'} onClick={handleShow}><IconsNavbar><Store /></IconsNavbar>Carrito de Compras</NavbarCart> */}
    
{/*  */}
    
      <Offcanvas style={{ width: '450px' ,backgroundColor: '#ffffffc7', border:'none', top:'58px'}} 
      show={show} onHide={handleClose} placement={"end"} backdrop= {true} >
        <DivOffcanvas>
        <Offcanvas.Header closeButton/>
          <Offcanvas.Title>Cesta de compra</Offcanvas.Title>
        <div >
        <Offcanvas.Body >
          <Image className={'ImgProductoAdd'} src={CocinaImpecable} alt="cocina impecable" />
          <div className={'DivText'}>
            <TitleProduct>COMBO Baños Relucientes</TitleProduct>
            <DescriptionProduct>Galón Lavaloza + Galón Desengrasante
            + Galón Blanqueador + Limpiador multiusos 1 litro. Gratis.</DescriptionProduct>
          </div>
          <Sale>$61.900</Sale>
          <div className={'DivAmount'}>
          <BtnCounter onClick={reduce}>-</BtnCounter>
          {max}
          <BtnCounter onClick={increase}>+</BtnCounter>
          &nbsp;<DeleteCart/>
          </div>
          <TotalSale>Total: $61.900</TotalSale>
        </Offcanvas.Body>
        </div>
          <div className={'FooterOffcanvas'}>
            <div className={'Delete'}><DeleteCart/>  vaciar cesta de compra</div>
            <div className={'total'}>Total: 100.000</div>
            <button className={'BtnOffcanvas'} onClick={ShoppingCart}>Revisar cesta de compra</button>
          </div>
        </DivOffcanvas>
      </Offcanvas >

              {/* {Object.keys(user).length != 0 &&
              user  ? (<NavDropdown title={ 
              <div className='UserMenu'>
                <ImgUser referrerPolicy="no-referrer" src={user.img} alt='userName'/>
                <UserName>{user.name}{user.lastname}</UserName>
                </div>} >
              <NavDropdown.Item className='DropdownMenu' >
                <div onClick={signOutUser} >
                <IconsNavbar><Login /></IconsNavbar>
                 Cerrar Sesión
               </div> 
              </NavDropdown.Item>
            </NavDropdown>):( <div>
              <NavDropdown title={<div className='MenuIcons'><IconsNavbar className='login' ><User /></IconsNavbar>Login</div>} >
              <NavbarLink className='DropdownMenu' to="/login"><IconsNavbar><Login /></IconsNavbar>Iniciar Sesión</NavbarLink>
              <NavbarLink className='DropdownMenu' to="/create-user"><IconsNavbar ><Create_User /></IconsNavbar>Regístrate</NavbarLink>
            </NavDropdown>
          </div>)}

             {Object.keys(userFacebook).length != 0 &&
              userFacebook  ? (<NavDropdown title={ 
              <div className='UserMenu'>
                <ImgUser referrerPolicy="no-referrer" src={userFacebook.picture.data.url} alt='userName'/>
                <UserName>{userFacebook.name}</UserName>
                </div>} >
              <NavDropdown.Item className='DropdownMenu' >
                <div onClick={signOutFacebook} >
                <IconsNavbar><Login /></IconsNavbar>
                 Cerrar Sesión
               </div> 
              </NavDropdown.Item>
            </NavDropdown>):( <div>
              <NavDropdown title={<div className='MenuIcons'><IconsNavbar className='login' ><User /></IconsNavbar>Login</div>} >
              <NavbarLink className='DropdownMenu' to="/login"><IconsNavbar><Login /></IconsNavbar>Iniciar Sesión</NavbarLink>
              <NavbarLink className='DropdownMenu' to="/create-user"><IconsNavbar ><Create_User /></IconsNavbar>Regístrate</NavbarLink>
            </NavDropdown>
          </div>)} */}





             {/* {Object.keys(userGmail).length != 0 &&
              userGmail  ? (<NavDropdown title={ 
              <div className={'UserMenu'}>
                <ImgUser referrerPolicy="no-referrer" src={userGmail.imageUrl} alt='userName'/>
                <UserName>{userGmail.name}</UserName>
                </div>} >
              <NavDropdown.Item className={'DropdownMenu'} >
                <GoogleLogout clientId={idConectGmail} 
                onLogoutSuccess={signOutGoogle}
                render={renderProps => (
                <div onClick={renderProps.onClick} >
                <IconsNavbar><Login /></IconsNavbar>
                 Cerrar Sesión
               </div> )}>
               </GoogleLogout>
              </NavDropdown.Item>
            </NavDropdown>):( <div>
              <NavDropdown title={<div className={'MenuIcons'}><IconsNavbar className={'login'} ><User /></IconsNavbar>Login</div>} >
              <NavbarLink className={'DropdownMenu'} href={"/login-user/login"}><IconsNavbar><Login /></IconsNavbar>Iniciar Sesión</NavbarLink>
              <NavbarLink className={'DropdownMenu'} href={"/login-user/create-user"}><IconsNavbar ><Create_User /></IconsNavbar>Regístrate</NavbarLink>
            </NavDropdown>
        <div className={'rutGoogleLogin'}> <GoogleLogin 
          clientId={idConectGmail}
          buttonText="Login"
          onSuccess={loginGoogle}
          onFailure={loginGoogle}
          cookiePolicy='single_host_origin'
          isSignedIn={true}/></div></div>)} */}

            </Nav>
          </Navbar.Collapse >
        </Container>
      </Navbar>
    </NavbarContainer>
  );
}

export default NavbarMonsi;


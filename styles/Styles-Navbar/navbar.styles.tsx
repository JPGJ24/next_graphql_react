import Link from "next/link";
import styled from "styled-components";


export const NavbarContainer = styled.nav`
  .color{
    background-color: #3e4095;
    color: white;
    font-family: Arboria-Light;
    font-size: 1rem;
    box-shadow: #3e4095 0px 3px 15px;
  @media screen and (min-width: 991px) and (max-width: 1200px){
   font-size: 0.8rem;}

.dropdown-toggle::after {
  display: none;}

.rutGoogleLogin{
  display: none;}

.black-toggler.navbar-toggler {
   border-color:white;}

.login{
   margin-left: 7px;
 @media screen and (min-width: 280px) and (max-width: 991px){
   margin-left: 0px;}}
  
.UserMenu{
   color:white;
  @media screen and (min-width: 0px) and (max-width: 991px){
   margin-top: 10px;
   margin-left:-5px;
   display: grid;
   grid-template-columns: repeat(2, 45px);}}

.MenuIcons{
   margin-top: 5px;
   font-size: 0;
 &:hover{
   color:white;
   font-family: Arboria-Book;}
 @media screen and (min-width: 280px) and (max-width: 991px){
   color: white;
   font-size: 1rem;}}
.addCart{
  margin-top: 5px;
   font-size: 0;
 &:hover{
   color:white;
   font-family: Arboria-Book;}
 @media screen and (min-width: 280px) and (max-width: 991px){
   color: white;
   font-size: 1rem;}
 @media screen and (min-width: 413px) and (max-width: 414px){
  margin-top: 10px;
  margin-left: -15px;

}}}

.DropdownMenu{
   color:black;
  &:hover{
   background:transparent;
   color:black;
   font-family: Arboria-Book;}
 @media screen and (min-width: 280px) and (max-width: 991px){
   color:white;
  &:hover{
   color:white;
   font-family: Arboria-Book;}}}

.dropdown-menu{

 @media screen and (min-width: 991px) and (max-width: 1533px){
    margin-left:-80%;}
 @media screen and (min-width:991px) and (max-width: 1260px){
    margin-left:-120%;}
 @media screen and (min-width: 280px) and (max-width: 991px){
   width:200px;
   border:none;
   border-radius: 0%;
   border-top: 1px solid white;
   background:#3e4095; }}`;

export const Logo = styled.svg`
  width: 77px;
  height: 37px;
  margin-right:290px ;
  /* margin-right:190px ; al añadir los iconos restantes poner esta medida */
 @media screen and (min-width: 280px) and (max-width: 1400px){
  margin-right:180px ;

   /* margin-right:40px Cuando se agregue la LINEA HOGAR y eliminar la siguiente linea*/
   /* margin-right:140px ;al añadir los iconos restantes poner esta medida  */
  }
  @media screen and (min-width: 991px) and (max-width: 1200px){
    margin-left: -50px;}`;

export const IconsNavbar = styled.svg`
  width: 25px;
  height: 26px;
  margin-top:-3px;
  margin-right: 9px;
  color:#3e4095;
 @media screen and (min-width: 280px) and (max-width: 991px){
  color:white; }`;

export const NavbarLink = styled(Link)`
  color:white;
  display: block;
  padding: var(--bs-nav-link-padding-y) var(--bs-nav-link-padding-x);
  font-size: var(--bs-nav-link-font-size);
  font-weight: var(--bs-nav-link-font-weight);
  text-decoration: none;
  margin-left: 20px;
@media (max-width: 992px){
   margin-left:0px ;}
  &:hover{
   color:white;
   font-family: Arboria-Book;}`;

export const NavbarCart = styled.button`
  margin-left: 15px;
  border:none;
  background: transparent;
 @media (max-width: 991px){
  margin-left: -5px;
  text-align:start; }`

export const ImgUser = styled.img`
  border: 2px solid white;
  border-radius: 50%;
  width: 35px;
  height: 35px;
  margin-top: -10px;
  margin-bottom: -15px; `

export const UserName = styled.h3`
   font-size: 0;
@media screen and (min-width: 0px) and (max-width: 991px){
   margin-left:0px;
   font-size: 1rem;}`


import styled from "styled-components";

export const ContentFooter = styled.footer`
     background: #3e4095;
     background-size:cover;
     justify-content:center;
     height: 330px;
     display: flex;
     color:white;
  @media screen and (min-width: 280px) and (max-width: 950px){
     display:inline-block;
     height: auto;
     width: 100%;}`;

export const ContactosFooter = styled.div`
      width: 615px;
      height: 280px;
      margin: 50px;
      margin-top:35px;
      border-right: white 3px solid;
  @media screen and (min-width: 950px) and (max-width: 1250px){
        width: 515px;
      height: 300px;
      margin: 30px;
      margin-left: -80px;}; 
   @media screen and (min-width: 280px) and (max-width: 950px){
      margin-left: 0px;
      width: auto;
       height: auto;
      text-align: center;
      margin: auto;
      margin-top: 40px;
      border-right:none;}
      .LogoMonsiFooter{
      cursor: pointer;
      width: 100px;
      height: 60px;
      margin-left:30px;
   @media screen and (min-width: 280px) and (max-width: 950px){
      width: 80px;
      height: 50px;
      margin-left:0px;}
      }`;

export const IconsFooter = styled.svg`
    width: 20px;
    height: 20px;
    margin-right:8px;
    margin-top:-8px;
    margin:5px;
  @media screen and (min-width: 280px) and (max-width: 453px){
    margin-left: -2px;}`;

export const TitleFooterLeft = styled.h3`
 font-family:Insanibu;
 margin-top:24px;
 font-size: 1em;
 
 @media screen and (min-width: 280px) and (max-width: 1250px){
  margin-top:14px;
  font-size: 1em;}`;

export const UlFooterLeft = styled.ul`
     list-style: none;
     margin-top:10px;
     font-size:1em;
  li{
    font-size: 1em; }
     .Anchor{
         cursor: pointer;
        text-decoration: none;
        color:white;
     &:hover{
      font-family: Arboria-Book;
      color:white;}}
  @media screen and (min-width: 359px) and (max-width: 1250px){
     font-size:1em;
     margin-left: -30px;}
  @media screen and (min-width: 280px) and (max-width: 359px){
      font-size:0.9em;
      margin-left: -30px;}`;

export const InfoFooter = styled.div`
    margin-top:35px;
    margin-bottom:35px;
    margin-left:30px;
 @media screen and (min-width: 280px) and (max-width: 950px){
    text-align: center;
    margin: auto;
    margin-top: 40px;
    width: auto;
    height: auto;
    margin-left:0px;}`;

export const TitleFooterRight = styled.h3`
      font-size: 1em;
      font-family:Insanibu;
  @media screen and (min-width: 280px) and (max-width: 1250px){
      margin-top: -20px;
      font-size: 1em;}`;

export const UlFooterRight = styled.ul`
  list-style: none; 
  margin-bottom:23px;
  margin-left:-30px;
  .AnchorR{
         cursor: pointer;
        text-decoration: none;
        color:white;
     &:hover{
      color:white;}}`;
  
export const Iconsocial = styled.div`
     margin-top:30px;
     margin-left:8px;
     display:grid;
     column-gap: 20px;
     grid-template-columns: repeat(4, 40px);
  @media screen and (min-width: 280px) and (max-width: 950px){
     justify-content: center;
     margin-bottom: 20px;}`;
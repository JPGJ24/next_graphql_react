import styled from "styled-components";
import BackgroundLineProduct from '../../assets/Img-App/Img-Home/img-LineProduct/BgGrey.png'

export const ContentLineProduct = styled.div`
  background-image: url(${BackgroundLineProduct.src});
  background-repeat: no-repeat;
  background-size:cover;
  text-align: center;
  justify-content:center ;
  width: 100%;
  height:auto;
  display:flex;
  color:#3e4095;
  .header {
  transform: rotate(180deg);
  position:absolute;
  width: 100%;
  color:white;
}
.waves {
  position:relative;
  width: 100%;
  height:15vh;
  margin-bottom:-7px; 
  min-height:100px;
  max-height:150px;
}
.parallax > use {
  animation: move-forever 25s cubic-bezier(.55,.5,.45,.5)     infinite;
}
.parallax > use:nth-child(1) {
  animation-delay: -2s;
  animation-duration: 7s;
}
.parallax > use:nth-child(2) {
  animation-delay: -3s;
  animation-duration: 10s;
}
.parallax > use:nth-child(3) {
  animation-delay: -4s;
  animation-duration: 13s;
}
.parallax > use:nth-child(4) {
  animation-delay: -5s;
  animation-duration: 20s;
}
@keyframes move-forever {
  0% {
   transform: translate3d(-90px,0,0);
  }
  100% { 
    transform: translate3d(85px,0,0);
  }
}
@media (max-width: 768px) {
  .waves {
    height:10px;
    min-height:160px; }} 
  .ImgCards{
    cursor: pointer;
    margin-bottom: 20px;
    margin-top: 20px;
    width: 225px;
    height: 296px;
    @media screen and (min-width: 0px) and (max-width: 540px){
    margin-left: -10px;
    width: 225px;
    height: 296px;}
  }`;

export const DivLineProduct = styled.div`
  width: 1080px;
   margin: 10px;
   @media (max-width: 576px) {
    margin-top:120px;}
    @media screen and (min-width: 280px) and (max-width: 500px){
      width: 300px;}`;
    
export const TitleLineProduct = styled.h2`
  font-size: 3rem;
  margin-top:180px;
  @media screen and (min-width: 0px) and (max-width: 500px){
        margin-top: 70px;
        font-size: 2.7rem;}`;

export const TitleProduct = styled.h2`
  font-family: Arboria-Medium;
  font-size: 3rem;
  margin-top:-15px;
  @media screen and (min-width: 280px) and (max-width: 500px){
        font-size: 2.7rem;}`;

export const TextLineProduct = styled.p`
  font-size: 1.6rem;
  margin-top:30px;
  @media screen and (min-width: 280px) and (max-width: 500px){
        font-size: 1.3rem;}`;

export const Span = styled.span`
  font-size: 1.6rem;
  margin-top:28px;
  margin-bottom:70px;
  display:grid;
  font-family: Arboria-Book;
  @media screen and (min-width: 280px) and (max-width: 500px){
        font-size: 1.3rem;
        margin-left:20px;}`;

export const DivProduct = styled.div`
    width: 1230px;
    height: 450px;
    margin-left: -80px;
    .react-multiple-carousel__arrow::before{
      color:#3e4095; ;
      margin-left:30px;
    }
    .react-multiple-carousel__arrow{
      background: transparent;
      margin: -11px;
      margin-left:-60px;
      margin-right:-45px;
      @media screen and (min-width: 0px) and (max-width: 1020px){
        margin-left:-40px;
      margin-right:-30px;}
      @media screen and (min-width: 0px) and (max-width: 920px){
        margin-left:-50px;
      margin-right:-37px;}
      @media screen and (min-width: 0px) and (max-width: 800px){
      margin-right:-27px;}
      @media screen and (min-width:0px) and (max-width: 540px){
        margin-left:-45px;
      margin-right:-17px;}
    &:hover{
      background: transparent;}};

    .divContent{
      height: 400px;
      transition: transform .9s;
      &:hover{
    transform: scale(1.2);}}
    @media screen and (min-width: 1294px) and (max-width: 1377px){
      width: 1240px;
     margin-left: -90px;}
    @media screen and (min-width: 1080px) and (max-width: 1294px){
     margin-left: 0px;
     width: 1040px;}
    @media screen and (min-width: 1020px) and (max-width: 1080px){
     margin-left: 0px;
     width: 990px;}
    @media screen and (min-width: 920px) and (max-width: 1020px){
     margin-left: 50px;
     width: 840px;}
    @media screen and (min-width: 800px) and (max-width: 920px){
     margin-left: 20px;
     width: 770px}
    @media screen and (min-width: 670px) and (max-width: 800px){
      margin-left: 80px;
      width: 570px}
    @media screen and (min-width: 610px) and (max-width: 670px){
      margin-left: 50px;
      width: 500px}
    @media screen and (min-width: 540px) and (max-width: 610px){
      margin-left: 30px;
      width: 500px}
    @media screen and (min-width:0px) and (max-width: 540px){
      margin-left:120px;
      width: 250px}
      @media screen and (min-width: 0px) and (max-width: 510px){
        margin-left:30px;}`;

export const DivCardSale = styled.div`
  text-align: center;
  margin-top:-26px;
  @media screen and (min-width: 0px) and (max-width: 1294px){
     margin-left: 30px;}
     @media screen and (min-width: 280px) and (max-width: 500px){
      margin-left: 0px;;}`;

export const NameCard = styled.h3`
font-family: Arboria-Medium;
font-size: 1.4em;`;

export const NameCardTwo = styled.h3`
font-size: 1.3em;
margin-top:-16px;`;

export const BtnLineProduct = styled.button`
  border:none;
  border-radius: 20px;
  color: white;
  transition: .3s;
  margin-top:30px;
  margin-bottom:150px;
  background: #3e4095; 
  width: 330PX;
  height:54px;
  display: inline-block;
  font-size: 1.8rem;
  &:hover{
    color:white;
    background:#3e4095 ;
    box-shadow: 10px 10px rgb(198, 196, 225);
    transition: .3s;}
    @media screen and (min-width: 280px) and (max-width: 500px){
      width: 230PX;
      font-size: 1rem;
      height:34px;
      margin-top:0px;}`;
  
export const Anchor = styled.a`
text-decoration: none;
color: white;
&:hover{
  color:white;}`;

export const DivLineBublle = styled.div`
width: 400px;
height: 400px;
margin-left:-850px;
margin-top:60px;
position:absolute;
transform: rotate(180deg);`;
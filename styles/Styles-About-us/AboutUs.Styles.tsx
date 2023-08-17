import styled from "styled-components";
import "react-multi-carousel/lib/styles.css";

export const Responsive = {
  superLargeDesktop: {
    breakpoint: { max: 4000, min: 3000 },
    items: 5
  },
  desktop: {
    breakpoint: { max: 3000, min: 1024 },
    items: 5
  },
  tablet: {
    breakpoint: { max: 1294, min: 1020 },
    items: 4
  },
  tablet1: {
    breakpoint: { max: 1020, min: 800 },
    items: 3
  },
  mobile: {
    breakpoint: { max: 800, min: 540 },
    items: 2
  },
  mobile1: {
    breakpoint: { max: 540, min: 0 },
    items: 1
  }
};

export const ContainerAbout = styled.div`
  padding-top:140px;
  background-size:cover;
  justify-content:center;
  color:black;
  width: 100%;
  height: auto;  
  display: grid;
  grid-template-columns: repeat(2, 520px);
  grid-template-rows: repeat( auto);
  @media screen and (min-width: 0px) and (max-width: 920px){
    grid-template-columns: repeat(1, 520px);}
  .ImgMonsiBlue{
    width: 346px;
    height: 363px;
    margin-left: 70px;
    @media screen and (min-width: 1070px) and (max-width: 1300px){
    margin-left: 0px;}
    @media screen and (min-width: 920px) and (max-width: 1070px){
      width: 246px;
      height: 263px;}
    @media screen and (min-width: 0px) and (max-width: 920px){
    display: none;}}`;


export const DivAboutUs = styled.div`
     width: 620px;
    height: auto;
    display: grid;
    grid-template-columns: repeat(1, 0px);
    grid-template-rows: repeat( auto); 
    @media screen and (min-width: 1070px) and (max-width: 1300px){
    margin-left: -120px;}
    @media screen and (min-width: 280px) and (max-width: 1070px){
    margin-left: -170px;}
    @media screen and (min-width: 640px) and (max-width: 920px){
        margin-left: -45px;}
    @media screen and (min-width: 0px) and (max-width: 640px){
    margin-left: -10px;
    width: 240px}
    .ImgTitle{
      margin-left: 70px;
      width: 418px;
      height: 45px;
    @media screen and (min-width: 280px) and (max-width: 1070px){
      width: 318px;
      height: 35px;
      margin-left: 160px;}
    @media screen and (min-width: 360px) and (max-width: 640px){
      margin-left: 110px;}
    @media screen and (min-width: 0px) and (max-width: 360px){
      margin-left: 145px;
      width: 218px;
      height: 25px;}
    }`;

export const TextoAboutUs = styled.p`
  text-align: justify;
  font-size: 1.3em;
  width: 620px;
  height: auto;
  @media screen and (min-width: 640px) and (max-width: 1070px){
    font-size: 1em;
    margin-top: 30px;}
  @media screen and (min-width: 280px) and (max-width: 640px){
    margin-top: 30px;
    font-size: 1em;
    width: 520px;}
  @media screen and (min-width: 280px) and (max-width: 540px){
    margin-left: 110px;
    margin-top: 30px;
    font-size: 0.9em;
    width: 320px;}
  @media screen and (min-width: 0px) and (max-width: 360px){
  margin-left: 140px;
  font-size: 0.9em;
  width: 250px;}`;

export const DivCoworkers = styled.div`
    width: 1140px;
    height: 600px;
    margin-top: 20px;
    .react-multiple-carousel__arrow{
      background: transparent;
      margin: -11px;
      margin-right:-3px;
      &:hover{
        background: #8886864f;
      }
    }
    .divContent{
      margin-top:20px;}
    @media screen and (min-width: 1098px) and (max-width: 1300px){
     margin-left: -60px;}
    @media screen and (min-width: 1020px) and (max-width: 1098px){
     margin-left: -20px;
     width: 1040px;}
    @media screen and (min-width: 920px) and (max-width: 1020px){
     margin-left: 90px;
     width: 840px;}
    @media screen and (min-width: 800px) and (max-width: 920px){
     margin-left: -140px;
     width: 770px}
    @media screen and (min-width: 540px) and (max-width: 800px){
      margin-left: -30px;
      width: 570px}
    @media screen and (min-width: 0px) and (max-width: 540px){
      margin-left:140px;
      width: 250px}
    .TitleAboutCoworkes{
    margin-left:360px;
    margin-top:30px;
    width: 382px;
    height: 88px;
  @media screen and (min-width: 0px) and (max-width: 1020px){
    margin-left:310px;
    margin-top:30px;
    width: 282px;
    height: 68px;}
  @media screen and (min-width: 800px) and (max-width: 920px){
    margin-left:240px;}
  @media screen and (min-width: 540px) and (max-width: 800px){
    margin-left:160px;}
  @media screen and (min-width: 328px) and (max-width: 540px){
    margin-left:15px;
    width: 222px;
    height: 58px;}
  @media screen and (min-width: 0px) and (max-width: 328px){
      width: 222px;
      height: 58px;
      margin-left:15px;}
    }
  .ImgCoworkers{
    margin-top: 30px;
    width: 209px;
    height: 209px;
  @media screen and (min-width: 540px) and (max-width: 1300px){
    margin-left: 40px;}
  @media screen and (min-width: 0px) and (max-width: 540px){
    margin-left: 40px;
    width: 160px;
    height: 160px;}
  }`;
      
export const CoworkersName = styled.h2`
   margin-top: 10px;
   font-size: 1.1em;
   text-align: center;
   font-family: Arboria-Book;`;

export const CoworkersProfession = styled(CoworkersName)`
   font-size: 0.9em;
   font-family: Arboria-Light;
   margin-top: -7px; `;
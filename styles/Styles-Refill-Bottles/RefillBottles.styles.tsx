import styled from 'styled-components';
import { keyframes } from "styled-components";

export const Animation = keyframes`
   from {height: 0px; }`;

export const ContainerRefill = styled.div`
      padding-top:140px;
      background-size:cover;
      justify-content:center;
      color:black;
      width: 100%;
      height: auto;  
      display: grid;
      grid-template-columns: repeat(2, 730px);
      grid-template-rows: repeat( auto);
    @media screen and (min-width: 0px) and (max-width: 1540px){
       grid-template-columns: repeat(2, 630px);} 
    @media screen and (min-width: 0px) and (max-width: 1266px){
       grid-template-columns: repeat(1, 630px);}
    @media screen and (min-width: 0px) and (max-width: 650px){
        padding-top:80px;};

     .FillBottle{
      animation: ${Animation} 4s infinite alternate;}

    .info{text-align: center;
    @media screen and (min-width: 0px) and (max-width: 1540px){
        width:700px;} 
    @media screen and (min-width: 765px) and (max-width: 1266px){
        margin-left: -25px; }
    @media screen and (min-width: 0px) and (max-width: 765px){
        width:600px;}
    @media screen and (min-width: 0px) and (max-width: 650px){
      width: 500px;}
   @media screen and (min-width: 0px) and (max-width: 357px){
      width: 400px;
      margin-left: 45px;}};

      .cards{
          margin-top: 70px;
          margin-bottom: 50px;
          margin-left: 80px;
          display: grid;
          grid-template-columns: repeat(2, 300px);
          grid-template-rows: repeat( auto);
        @media screen and (min-width: 0px) and (max-width: 1266px){
          margin-left: 65px;}
        @media screen and (min-width: 0px) and (max-width: 765px){
            margin-left: 40px;}
        @media screen and (min-width: 0px) and (max-width: 650px){
            grid-template-columns: repeat(2, 180px);
            margin-left: 145px;
            margin-top: 30px;}
        @media screen and (min-width: 0px) and (max-width: 357px){
            grid-template-columns: repeat(1, 160px);
            grid-template-rows: repeat( 1,230px);
            justify-content: center;}};

    .textCards{
        line-height: 19px;
        text-align: justify;  
        font-size: 1.1em;
        margin: 17px;
      @media screen and (min-width: 0px) and (max-width: 650px){
        font-size: 0.6em;
        line-height: 13px; }};

    span{ 
    @media screen and (min-width: 0px) and (max-width: 765px){
      margin-left: 60px;}
    @media screen and (min-width: 0px) and (max-width: 650px){
      font-size: 0.7em;
      margin-left: 130px;}};

    .mapGoogle{
      border-radius: 2%;
      width: 645px;
      height: 656px;
      margin-top: 100px;
      margin-left: 100px;
    @media screen and (min-width: 0px) and (max-width: 1540px){
      width: 445px;
      height: 756px;
      margin-top: 130px;
      margin-left: 130px;}  
    @media screen and (min-width: 0px) and (max-width: 1266px){
        width: 445px;
        height: 456px;
        margin: 100px 100px 100px;}
    @media screen and (min-width: 0px) and (max-width: 650px){
      width: 295px;
      height: 306px;
      margin-left: 170px;
      margin-top: 50px;}
   @media screen and (min-width: 0px) and (max-width: 357px){
      width: 205px;
      height: 306px;
      margin-left: 210px;
      margin-top: 50px;}}`;

export const ImgTitle = styled.svg`
        width: 756px;
        height: 148px;
        margin-left: -20px;
    @media screen and (min-width: 0px) and (max-width: 1266px){
        margin-left: -30px;}
    @media screen and (min-width: 0px) and (max-width: 765px){
      width: 456px;
      height: 148px;
      margin-left: 50px;}
    @media screen and (min-width: 0px) and (max-width: 650px){
      width: 306px;
      height: 138px;
      margin-left: 130px;}
   @media screen and (min-width: 0px) and (max-width: 357px){
      width: 236px;
      height: 138px;
      margin-left: 140px;}`;

export const Subtitle = styled.h2`
      color: #F8AD04;
      font-family: Arboria-Book;
      margin-top: 30px;
      font-size: 1.8em;
    @media screen and (min-width: 650px) and (max-width: 765px){
      font-size: 1.5em;
      margin-left: 50px;}
   @media screen and (min-width: 0px) and (max-width: 650px){
      font-size: 0.9em;
      margin-top: 0px;
      margin-left: 135px;}
   @media screen and (min-width: 0px) and (max-width: 357px){
      font-size: 0.8em;}`;

export const TextInfo = styled.p`
    margin-top: 30px;
    font-size: 1.5em;
    @media screen and (min-width:650px) and (max-width: 765px){
      font-size: 1.2em;
      margin-left: 50px;}
   @media screen and (min-width: 0px) and (max-width: 650px){
      font-size: 0.9em;
      margin-top: 10px;
      width: 300px;
      margin-left: 170px;}
   @media screen and (min-width: 0px) and (max-width: 357px){
      font-size: 0.8em;
      margin-left: 170px;
      width: 200px;}`;

export const SubtitleText = styled(Subtitle)`
      color:black;
      font-size: 1.4em;
    @media screen and (min-width: 650px) and (max-width: 765px){
      font-size: 1.2em;
      margin-left: 50px;}
   @media screen and (min-width: 0px) and (max-width: 650px){
      font-size: 0.8em;
      margin-top: 20px;}`;

export const DivCard = styled.div`
    width: 269px;
    height: 295px;
    background:#FEDA99;
    border-radius: 5%;
  @media screen and (min-width: 0px) and (max-width: 650px){
      width: 169px;
    height: 205px;}
    .ImgRefill{
      width: 85px;
    height: 90px;
    margin-top: 10px;
    @media screen and (min-width: 0px) and (max-width: 650px){
      width: 55px;
    height: 60px;
    margin-top: 10px;}
    }`;

export const TitlesCards = styled.h3`
    margin-top: 15px;
    font-size: 1.3em;
    color:#F9AE04;
    font-family:'Insanibu';
   @media screen and (min-width: 0px) and (max-width: 650px){
      font-size: 0.9em;}`;

export const LocationTitle = styled.h2`
    margin-top: 15px;
    font-size: 1.8em;
    color:#F9AE04;
    font-family:'Bold';
   @media screen and (min-width: 650px) and (max-width: 765px){
      font-size: 1.5em;
      margin-left: 50px;}
   @media screen and (min-width: 0px) and (max-width: 650px){
     font-size: 1em;
     margin-left: 130px;}
   @media screen and (min-width: 0px) and (max-width: 357px){
     font-size: 0.8em;}`;

export const LocationText = styled.h2`
    margin-top: 15px;
    font-size: 1.6em;
    color:#F9AE04;
    margin-bottom:90px ;
    font-family: Arboria-Book;
   @media screen and (min-width: 0px) and (max-width: 1266px){
      margin-bottom:0px ;}
   @media screen and (min-width: 650px) and (max-width: 765px){
      font-size: 1.3em;
      margin-left: 50px;}
   @media screen and (min-width: 0px) and (max-width: 650px){
    font-size: 0.9em;
    margin-left: 130px;}
   @media screen and (min-width: 0px) and (max-width: 357px){
    font-size: 0.8em;}`;
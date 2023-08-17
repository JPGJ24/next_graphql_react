import styled from 'styled-components';
import { keyframes } from "styled-components";
import BackgroundStar from '../../assets/Img-App/Img-Home/img-packaging/bg-stars.png'

export const Animation = keyframes`
   from {
     height: 0px; }`;

export const Loading = keyframes`
       from { transform: none; }
    50% { transform: scale(1.1); }
    to { transform-origin:center; }`;

export const DivContainer = styled.div`
  /* background-image: url(${BackgroundStar.src}); */
  background-repeat: no-repeat;
  background-size:cover;
  width:100%;
  height: auto;
 margin-top:20px;
 @media screen and (min-width: 280px) and (max-width: 954px){
  background-image: url(); }  
    .FillBottle{
      animation: ${Animation} 4s infinite alternate;};
      .WhiteStar{
      display: block;
      animation:  2s ease infinite;
      transform-origin: center;}
    .Packaging{
      display: grid;
      grid-template-columns: repeat(2,auto);
      grid-template-rows: repeat( auto); 
      @media screen and (min-width: 280px) and (max-width: 1308px){
        text-align: center;
        grid-template-columns: repeat(1,auto);
      grid-template-rows: repeat( auto);}};`;

export const DivLogo = styled.div`
      text-align: center;
       width: auto;
       height: 300px;        
       @media screen and (min-width: 280px) and (max-width: 1520px){
        width: auto;}`;

export const ImgPackaging = styled.svg`
margin-left: 250px;
 width: 192px;
 height: 251px;
 @media screen and (min-width: 1520px) and (max-width: 1720px){
    margin-left: 180px;
    height: 211px;
    width: 152px;}      
 @media screen and (min-width: 1308px) and (max-width: 1520px){
    margin-left:100px;
    height: 181px;
        width: 132px;}
  @media screen and (min-width: 280px) and (max-width: 1308px){
          height: 141px;
        width: 92px;
        margin-left:0px;}
  @media screen and (min-width: 280px) and (max-width: 600px){
          height: 101px;
        width: 62px;}
  @media screen and (min-width: 0px) and (max-width: 516px){
          height: 60px;
        width: 42px;}`;

export const ImgLogo = styled.svg`
margin-left: 60px;
 width: 540px;
 height: 182px;
 @media screen and (min-width: 1310px) and (max-width: 1720px){
    margin-left: 20px;
    margin-right:0px;
    height: 122px;
        width: 350px;}
 @media screen and (min-width: 516px) and (max-width: 1310px){
    margin-left: 28px;
    height: 100px;
        width: 330px;}
  @media screen and (min-width: 0px) and (max-width: 516px){
          height: 60px;
        width: 200px;
        margin-left: 10px;}`;

export const DivText = styled.div`
 margin-top: 50px;
 width: auto;
 height: auto;
 @media screen and (min-width: 0px) and (max-width: 1520px){
  margin-top: 5px;
    width: auto;}
    .span{
      font-size: 1.6rem;
  font-family:'Bold';
  @media screen and (min-width: 280px) and (max-width: 1520px){
    font-size: 1.3em; }
  @media screen and (min-width: 280px) and (max-width: 516px){
          font-size: 1em;}
    }
    .BtnEnvironment{
     margin-left: 120px;
     margin-top: 10px;
     border:none;
     border-radius: 10px;
   
     transition: .3s;
     font-family:'Bold';
     
     width: 320px;
     height: 50px;
     font-size: 1.4rem;
     &:hover{
       transition: .3s;}
     @media screen and (min-width: 280px) and (max-width: 1308px){
       width: 300px;
     height: 40px;
     font-size: 1.2rem;
     margin-left: 0px;
     margin-top: 20px; }
     @media screen and (min-width: 280px) and (max-width: 380px){
       width: 200px;
     height: 30px;
     font-size: 1rem;} 
    }`;
    
export const Text = styled.h2`
font-size: 1.5em;
 width: 800px;
 @media screen and (min-width: 280px) and (max-width: 1520px){
    width: auto;
    font-size: 1.4em; }
  @media screen and (min-width: 280px) and (max-width: 1308px){
        margin-top: -130px;}

  @media screen and (min-width: 280px) and (max-width: 516px){
          font-size: 1em;
          margin-top: -200px;}
   @media screen and (min-width: 0px) and (max-width: 418px){
   font-size: 0.8em;}`;

export const Text1 = styled.h2`
margin-top: -7px;
font-size: 1.5em;
 width: 600px;
 @media screen and (min-width: 280px) and (max-width: 1520px){
    width: auto;
    font-size: 1.4em; }
  @media screen and (min-width: 280px) and (max-width: 516px){
          font-size: 1em;}
  @media screen and (min-width: 0px) and (max-width: 418px){
          font-size: 0.8em;}`;

// export const Span = styled.span`
//   font-size: 1.6rem;
//   font-family:'Bold';
//   color: #f9ae04;
//   @media screen and (min-width: 280px) and (max-width: 1520px){
//     font-size: 1.3em; }
//   @media screen and (min-width: 280px) and (max-width: 516px){
//           font-size: 1.1em;}`;

// export const BtnEnvironment = styled.button`
//   margin-left: 120px;
//   margin-top: 10px;
//   border:none;
//   border-radius: 10px;
//   color: white;
//   transition: .3s;
//   font-family:'Bold';
//   background: #f9ae04; 
//   width: 320px;
//   height: 50px;
//   font-size: 1.4rem;
//   &:hover{
//     color:white;
//     background:#f9ae04;
//     box-shadow: 10px 10px #feda99;
//     transition: .3s;}
//   @media screen and (min-width: 280px) and (max-width: 1308px){
//     width: 300px;
//   height: 40px;
//   font-size: 1.2rem;
//   margin-left: 0px;
//   margin-top: 20px; }
//   @media screen and (min-width: 280px) and (max-width: 380px){
//     width: 200px;
//   height: 30px;
//   font-size: 1rem;}`;
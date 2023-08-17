import styled from "styled-components";
import BackgroundContactAdvisor from '../../assets/Img-App/Img-Home/img-ContactAdvisor/BgContact.png'

export const ContentAdvisor = styled.div`
  background-image: url(${BackgroundContactAdvisor.src});
  background-repeat: no-repeat;
  background-size:cover;
  justify-content:center;
  display:flex;
  color:white;
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
  max-height:120px;
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
    height:120px;
    min-height:120px; }}
  .ImgLogoblue{
    width: 454px;
    height: 184px;
 @media screen and (min-width: 720px) and (max-width: 1670px){
    width: 380px;
    height: 140px;}
  @media screen and (min-width: 280px) and (max-width: 720px){
    width: 250px;
    height: 90px;}}
  .ImgWoman{
    width: 803px;
    height: 893px;
    margin-left:165px;
    margin-top:100px;
  @media screen and (min-width: 1573px) and (max-width: 1670px){
    width: 803px;
    height: 893px;
    margin-left:0px;
    margin-top:120px;}
  @media screen and (min-width: 1359px) and (max-width: 1573px){
    width: 602px;
    height: 692px;
    margin-left:20px;
    margin-top:285px;}
  @media screen and (min-width: 1170px) and (max-width: 1359px){
    width: 602px;
    height: 692px;
    margin-left:-100px;
    margin-top:285px; }
  @media (max-width: 1170px){
    display:none;}}`;

export const InfoAdvisor = styled.div`
  width: 600px;
  height: 800px;
  margin-left:355px;
  margin-top:170px;
  @media screen and (min-width: 1359px) and (max-width: 1670px){
    margin-left:200px;
    margin-right: 120px;
    margin-top:170px;}
    @media screen and (min-width: 1090px) and (max-width: 1359px){
    margin-right: 120px;
    margin-left:100px;
    margin-top:170px;}
    @media screen and (min-width: 359px) and (max-width: 1090px){
    width: 550px;
    height: 750px;
    margin-left:25px;
    margin-top:170px;} 
  @media screen and (min-width: 280px) and (max-width: 359px){
    width:270px;
    margin-left:0px;
    margin-top:40px;}`;

export const TitleAdvisor = styled.h2`
  font-family: Arboria-Book;
  color:black;
  font-size:1.5em; 
  margin-top:46px;
  @media screen and (min-width: 280px) and (max-width: 720px){
    font-size:1em;}`;

export const UlAdvisor = styled.ul`
color:#3e4095; 
  margin-top:53px;
  font-size:1.3em;
  @media screen and (min-width: 280px) and (max-width: 720px){
    font-size:1em;}`;

export const Spann = styled.span`
color:black;`;

export const BtnAdvisor = styled.button`
  border:none;
  border-radius:15px ;
  transition: .3s;
  font-family:Arboria-Medium;
  background: #3e4095; 
  text-decoration: none;
  margin-top:57px;
  margin-left:0px;
  width: 284PX;
  height:58px;
  display: inline-block;
  font-size: 1.3em;
  &:hover{
    color:white;
    background:#3e4095 ;
    box-shadow: 10px 10px rgb(198, 196, 225);
    transition: .3s;}
  @media screen and (min-width: 0px) and (max-width: 780px){
    width: 204PX;
  height:42px;
  font-size: 1em;
  margin: 10px;
  margin-left:12px;}`;
  
export const Anchor = styled.a`
text-decoration: none;
color:white;
&:hover{
  color:white;}`;
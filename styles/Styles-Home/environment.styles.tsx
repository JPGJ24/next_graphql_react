import styled from 'styled-components';
import BackgroundEnvironment from '../../assets/Img-App/Img-Home/img-environment/BackgroundEnvironment.png';
    
export const ContentEnvironment = styled.div`
  background-image: url(${BackgroundEnvironment.src});
  background-repeat: no-repeat;
  background-size:cover;
  justify-content:center;
  width: 100%;
  height:auto;
  display: flex;
  position: relative;
  .headWaves {
  position:absolute;
  bottom: 0;
  width: 100%;
  }
.waves {
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
    height:120px;
    min-height:120px; }}

  .ImgBottle{
    width: 233px;
    height: 739px;
    margin-top:150px;
    margin-left:245px;
    margin-right:187px;
 @media screen and (min-width: 280px) and (max-width: 1500px){
    width: 163px;
    height: 639px;
    margin-top:150px;
    margin-left:55px;
    margin-right:87px;}
 @media (max-width: 992px) {
    display: none;}
  }

  .ImgCien{
    width: 775px;
    height: 225px;
  @media screen and (min-width: 646px) and (max-width: 1100px){
    width: 525px;
    height: 200px;}
  @media screen and (min-width: 359px) and (max-width: 646px){
    width: 340px;
    height: 100px;}
  @media screen and (min-width: 280px) and (max-width: 398px){
    width: 245px;
    height: 70px;}
  }
  .BtnEnvironment{
   text-decoration: none;
   display: grid;
   place-items: center;
   border:none;
  border-radius: 20px;
  color: #347388;
  transition: .3s;
  margin-bottom:150px;
  font-family:Arboria-Medium;
  background: white; 
  width: 284PX;
  height:58px;
  font-size: 1em;
  &:hover{
    color:white;
    background-color: #347388;
    box-shadow: 8px 8px white;
    transition: .3s;}
  @media (max-width: 768px) {
    text-align: center;
    width: 270px;
    height:58px;
    font-size: 1.5rem;
    margin-left:30px;}
  @media (max-width: 570px) {
    width: 200px;
    height:43px;
    font-size: 1.2rem;}
  @media screen and (min-width: 280px) and (max-width: 398px){
    font-size: 1rem;
    width: 120px;
    height:48px;
    margin-top: 30px;}} `;

export const EnvironmentColumns = styled.div`
  display:grid;
  margin-top:150px;
  color:white;  
  @media (max-width: 770px) {
    margin-left:100px;}
  @media (max-width: 592px) {
    margin-left:30px;}
  @media screen and (min-width: 280px) and (max-width: 398px){
      width: 245px;
      margin-left:10px;}`;

export const TitleEnvironment = styled.h2`
  color:white;
  font-size: 5.2rem;
@media screen and (min-width: 592px) and (max-width: 1500px){
    font-size: 3.8rem;
    margin-left: 5px;
    margin-bottom:27px;};
@media screen and (min-width: 520px) and (max-width: 592px){
    font-size: 3.2rem;
    margin-left: 5px;
    margin-bottom:27px;};
@media screen and (min-width:359px) and (max-width: 520px){
    width:350px;
    font-size:2.2rem;
    margin-bottom:27px;};
@media screen and (min-width: 280px) and (max-width: 398px){
    width: 245px;
    font-size:1.5rem;
    margin-top:20px;
    margin-bottom:27px;}`;

export const TextMediumEnvironment = styled(TitleEnvironment)`  
  margin-top:-35px;
  font-family:Arboria-Black;
  @media screen and (min-width: 280px) and (max-width: 398px){
   margin-top: -10px;
   }`;
  
export const ParagraphEnvironment = styled.p`
  display:grid;
  width: 670px;
  height: 460px;  
  font-size: 2rem;
  @media (max-width: 767px) {
    font-size: 1.6rem;
    width: auto;
    height: 480px;}
  @media (max-width: 576px) {
    font-size: 1.4rem;
    width: auto;
    height: 480px;
    margin-left: 0px;}
  @media screen and (min-width: 280px) and (max-width: 398px){
      width: 245px;}`;

export const EnvironmentWave = styled.img`
margin-top:900px;
position:absolute;
@media screen and (min-width: 280px) and (max-width: 1510px){
display:none;}`;

export const DivBublle = styled.div`
width: 400px;
height: 400px;
margin-left:900px;
margin-top:570px;
position:absolute;
@media screen and (min-width: 665px) and (max-width: 1344px){
  width: 200px;
  height: 400px;
  margin-left:200px;
  margin-top:500px;}
@media screen and (min-width: 359px) and (max-width: 665px){
  width: 200px;
  height:0px;
  margin-left:0px;
  margin-top:500px;}
@media screen and (min-width: 280px) and (max-width: 398px){
   display: none;}`;
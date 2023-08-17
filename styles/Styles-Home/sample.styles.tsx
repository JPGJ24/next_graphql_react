import styled from "styled-components";

    
export const ContentSample = styled.div`
  height: auto;
  background-repeat: no-repeat;
  background-size:cover;
  text-align:center;
  width:auto;
  display:grid; `;

export const DivContentSample = styled.div`
  width:auto;
  grid-template-columns: repeat(2, 250px);
 
  @media screen and (min-width: 280px) and (max-width: 406px){
  width:270px;
  margin-left: 50px;
}
  .LogoB{
    margin-top:21px;
    width: 283px;
    height: 106px;
 @media screen and (min-width: 406px) and (max-width: 1510px){
     margin-top:21px;
    width: 210px;
    height: 86px;
    margin-left: -40px;}
 @media screen and (min-width: 280px) and (max-width: 406px){
     margin-top:21px;
    width: 210px;
    height: 86px;
    margin-left: 0px; }
  }`;

export const Text = styled.h2`
margin-top:30px;
font-size: 1.5em;
@media screen and (min-width: 400px) and (max-width: 1510px){
  font-size: 1.1em;
  margin: 10px;
  width: auto; }
@media screen and (min-width: 406px) and (max-width: 400px){
  width:350px;
  margin: 10px;};
@media screen and (min-width: 280px) and (max-width: 406px){
  font-size: 1.1em;
  width:270px;}`;

export const Text1 = styled.p`
margin-bottom:47px;

@media screen and (min-width: 280px) and (max-width: 1510px){
  font-size: 1.1em; }`;

export const Span = styled.span`
font-family: Arboria-Medium;
font-size: 1.6em;
color: #3e4095;`;

export const TitleSteps = styled.h1`
margin-bottom:22px;
font-size: 1.4em;
color: #3e4095;`;

export const DivSample = styled.div`
  justify-content:center;
  display:flex;
  @media screen and (min-width: 474px) and (max-width: 1060px){
   display:grid;
  grid-template-columns: repeat(2, 210px);
  grid-template-rows: repeat( 4,150px);}
  @media screen and (min-width: 280px) and (max-width: 474px){
   display:grid;
  grid-template-columns: repeat(1, 210px);
  grid-template-rows: repeat( 4,150px);
  margin-left: -20px;}`;

export const ImgMovil = styled.svg`
  margin-top:30px;
  width: 80px;
  height: 120px;
  margin-left:30px; 
  @media screen and (min-width: 280px) and (max-width: 474px){
    margin-left:80px;}`;

export const ImgLocation = styled(ImgMovil)` 
  width: 87px;
  height: 127px;`;

export const ImgLicense = styled(ImgMovil)`
width: 80px;
height: 120px; `;

export const DivText = styled.div`
margin-top:30px;
text-align:start;
width: 220px;
margin-left:15px;`;

export const TextSteps = styled.p`
margin-top:-20px;
font-size: 1.2em;`;

export const BtnSteps = styled.button`
  border:none;
  border-radius:15px ;
  color: white;
  transition: .3s;
  font-family:Arboria-Medium;
  background: #3e4095; 
  margin-bottom:50px;
  margin-top:50px;
  width: 284PX;
  height:58px;
  display: inline-block;
  font-size: 1.3em;
  &:hover{
    color:white;
    background:#3e4095 ;
    box-shadow: 10px 10px rgb(198, 196, 225);
    transition: .3s;}
  @media screen and (min-width: 406px) and (max-width: 1060px){
  margin-left:0px;
  width: 204PX;
  height:42px;
  font-size: 1em;
  margin-top: 80px;}
  @media screen and (min-width: 0px) and (max-width: 406px){
  margin-top: 80px;
  font-size: 18px;
  margin-left:-13px;}`;

export const Anchor = styled.a`
text-decoration: none;
color: white;
&:hover{
  color:white;}`;

export const DivContentLila = styled.div`
  background:#c89de5;
  width:100%;
  .header {
  transform: rotate(180deg);
  position:absolute;
  width: 100%;}
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
    height:120px;
    min-height:50px; }}`;

export const TitleService = styled.h2`
font-family:'Bold';
font-size: 4.8em;
margin-top:80px;
margin-top: 200px;
color: white;
@media screen and (min-width: 280px) and (max-width: 1200px){
  margin-top:120px;}`;

export const TitleServiceTwo = styled.h2`
font-size: 2.3em;
margin-top:-20px;
margin-bottom:73px;
color:white;`;

export const Columns = styled.div`
  display: grid;
  justify-content:center;
  column-gap: 40px;
  grid-template-columns: repeat(4, 260px);
  @media screen and (min-width: 700px) and (max-width: 1200px){
   display:grid;
  grid-template-columns: repeat(2, 260px);
  grid-template-rows: repeat(2, 406px);}
  @media screen and (min-width: 280px) and (max-width: 700px){
   display:grid;
  grid-template-columns: repeat(1, 260px);
  grid-template-rows: repeat(4, 406px);}`;

export const CardS = styled.div`
  width: 260px;
  height: 330px;
  border-radius:29px;
  background: #5544a2;
  transition: transform 750ms;
  margin-bottom:80px;
    &:hover{
    transform: scale(1.1);}`;

export const ImgCard = styled.svg`
width: 120px;
height: 120px;
margin: 36px;`;

export const DivCard = styled.div`
  display:grid;
  margin-top:-10px;`;

export const TitleCard = styled.h3`
font-family:'Insanibu';
font-size: 1.1em;
color:#c89de5;
transform: translatey(10px);`;

export const TextCard = styled.p`
width: 157px;
height: 157px;
font-size: 1em;
text-align:start;
margin-left:50px;
color:white;
transform: translatex(12px);`;

export const DivSampleBublle = styled.div`
width: 400px;
height: 400px;
margin-left:250px;
margin-top:720px;
position:absolute;
transform: rotate(180deg);
@media screen and (min-width: 1200px) and (max-width: 1500px){
  margin-left:-70px;
  margin-top:650px;}
@media screen and (min-width: 1064px) and (max-width: 1200px){
  margin-left:-80px;
  margin-top:700px;}
@media screen and (min-width: 475px) and (max-width: 1064px){
  margin-left:-100px;
  margin-top:1000px;
  width: 400px;
  height: 400px;
  transform: rotate(90deg);}
@media screen and (min-width: 280px) and (max-width: 475px){
display: none;}`;
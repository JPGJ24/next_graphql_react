import styled from "styled-components";

export const DivOffcanvas = styled.div`
  overflow: auto;
  height: 83%;
@media(max-width: 420px){
  height: 78.5%; }

 .btn-close{
  margin-left: 90%;}

.offcanvas-title{
  margin-top: -40px;
  margin-bottom: 0px;
  text-align: center;
  color:#3e4095;
  font-size:2em;
  font-family:Arboria-Book;}

.offcanvas-body{
  overflow-x: hidden;
  margin: 10px;
  border-radius: 10px;
  background: white;
  display:grid;
  grid-template-columns: repeat(2, 195px);}

.DivText{ 
  margin-bottom: 20px;
 @media(max-width: 436px){
  margin-left:-30px;
  width: 200px;}
 @media(max-width: 406px){
  width: 195px;
  margin-left:-53px;}
 @media(max-width: 375px){
  margin-left:-63px;}
 @media(max-width: 280px){
  margin-left:-100px;
  width: 160px;}}

.ImgProductoAdd{
  margin: -5px;
  width:190px;
  height: 115px;
 @media(max-width: 460px){
  width:165px;
  height: 118px;}
 @media(max-width: 406px){
  width:140px;
  height: 105px;}
 @media(max-width: 375px){
  width:130px;
  height: 95px;}
 @media(max-width: 280px){
  width:100px;
  height: 75px;}}

.DivAmount{
   margin-left: 78px;
   margin-top: -50px;
 @media(max-width: 436px){
   margin-left: 50px;}
   @media (max-width: 414px){
   margin-left: 65px;
   margin-top: -42px;}
   /* @media screen and (min-width: 412px) and (max-width: 413px){
   margin-left: 60px;
   margin-top: -46px;} */
 @media(max-width: 412px){
   margin-left: 50px;
   margin-top: -47px;}
 @media(max-width: 406px){
   margin-left: 30px;
   margin-top: -42px;}
 @media(max-width: 375px){
   margin-left: 20px;
   margin-top: -32px;}
 @media(max-width: 280px){
   margin-left: -55px;
   margin-top: -22px;}}

.FooterOffcanvas{
  margin: 10px;
  position:absolute; 
  bottom:0%;
  border-radius: 10px;
  background: white;
  display:grid;
  column-gap: 20px;
  grid-template-columns: repeat(2, 205px);
 @media(max-width: 418px){
  grid-template-columns: repeat(1, 392px);}
 @media(max-width: 406px){
  grid-template-columns: repeat(1, 372px);}
 @media(max-width: 375px){
  grid-template-columns: repeat(1, 352px);}
 @media(max-width: 360px){
  grid-template-columns: repeat(1, 340px);}
 @media(max-width: 280px){
  grid-template-columns: repeat(1, 260px);}

.total{
  font-family: Arboria-Book;
  margin-top: 20px;
  margin-left: 80px;
 @media(max-width: 420px){
  margin-left: 20px; }}

.Delete{
  width: 200px;
  margin-left: 20px;
  margin-top: 20px;
  cursor: pointer;}

.BtnOffcanvas{
  color:white;
  border:none;
  border-radius:12px ;
  transition: .3s;
  font-family:Arboria-Book;
  background: #3e4095; 
  margin-top:25px;
  margin-left:19%;
  margin-bottom:20px;
  width: 362PX;
  height:50px;
  font-size: 1.3em;
 @media(max-width: 420px){
   justify-content: center;
   font-size: 1em;
   width: 232PX;
   height:40px;}
 @media(max-width: 280px){
   width: 212PX;
   margin-left: 25px;}
 &:hover{
  color:white;
  background:#3e4095 ;
  box-shadow: 10px 10px rgb(198, 196, 225);
  transition: .3s;}}}`;

export const TitleProduct =styled.h3`
   font-size: 1em;
 @media(max-width: 280px){
   font-size:0.8em; }`;

export const DescriptionProduct =styled.p`
   font-size:11px;
   line-height: 13px;
   margin-top: -5px;`;

export const Sale =styled.span`
  margin-left: 200px;
  margin-top: -35px;
  font-size: 0.9em;
  font-family: Arboria-Book;
 @media(max-width: 436px){
  margin-left: 168px;}
 @media(max-width: 406px){
  margin-left: 140px;
  margin-top: -30px;}
 @media(max-width: 375px){
  margin-top: -20px;}
 @media(max-width: 280px){
  margin-left: 85px;
  margin-top: -10px}`;

export const TotalSale =styled.span`
  margin-left: 295px;
  margin-top: auto;
  width: 100px;
  font-size: 0.9em;
  font-family: Arboria-Book;
 @media(max-width: 436px){
  margin-left: 270px;}
  @media screen and (min-width: 412px) and (max-width: 413px){
    margin-left: 260px;}
 @media(max-width: 406px){
  margin-top: 5px;
  margin-left: 245px;}
 @media(max-width: 375px){
  margin-left: 235px;
  margin-top: -3px;}
 @media(max-width: 280px){
  margin-left: 155px;
  margin-top: 3px;}`;
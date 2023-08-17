import styled from "styled-components";

export const ContentShoppingCart = styled.div`
  background: #d9d9d984;
  background-size:cover;
  text-align: center;
  margin-top: 3%;
  width: 100%;
  height: auto;`;

export const ContentItemSummary = styled.div`
  justify-content: center;
  border-radius: 5px;
  display: grid;
  grid-template-columns: repeat(2, 860px);
  grid-template-rows: repeat( auto);
 @media screen and (min-width: 0px) and (max-width:1400px){
   grid-template-columns: repeat(2, 560px);
   margin-right:130px;} 
 @media screen and (min-width: 0px) and (max-width:995px){
  grid-template-columns: repeat(1, 940px);
  margin-right:0px;} 
 @media screen and (min-width: 0px) and (max-width:643px){
  margin-left:22px;}

.SumarioDiv{
  width: 750px;
 @media screen and (min-width: 0px) and (max-width:643px){
  width: 600px;}}

.SumArticles{
  background: white;
  display: grid;
  grid-gap: 20px;
  grid-template-columns: repeat(5, 170px);
  grid-template-rows: repeat( auto);
  border-radius: 5px;
  list-style: none;
  align-items: center;
  height: 64px;
  margin-left:183px;
  position: absolute;
 @media screen and (min-width: 0px) and (max-width:1400px){
  grid-template-columns: repeat(5, 120px);
  margin-left:143px;
  height: 60px;}
 @media screen and (min-width: 0px) and (max-width:995px){
  grid-template-columns: repeat(5, 100px);
  margin-left:183px;
  height: 40px;}
@media screen and (min-width: 0px) and (max-width:643px){
  display: none;}  
    
.all{
  font-family:Arboria-Book;
  font-size: 1.3em;
  margin-right: 80px;
@media screen and (min-width: 0px) and (max-width:1400px){
  margin-right: 28px;
  font-size: 1em;} 
@media screen and (min-width: 0px) and (max-width:643px){
  margin-left:10px;
  font-size: 0.9em;}}

input{
  margin: 10px;}

 li{
    margin-left: 90px;
   font-family:Arboria-Book;
   font-size: 1.3em;
  @media screen and (min-width: 0px) and (max-width:1400px){
   font-size: 1em;
   margin-left: 70px;}
 @media screen and (min-width: 0px) and (max-width:1400px){
   margin-left: 50px;}} }

.DivSubtotal{
  width: 565px;
 @media screen and (min-width: 0px) and (max-width:1400px){
  margin-left: -20px;}
 @media screen and (min-width: 0px) and (max-width:995px){
  grid-column: 1;
  grid-row: 3;
  margin-top:-70px; 
  margin-left: -80px;}
 @media screen and (min-width: 0px) and (max-width:643px){
  margin-left: 30px;}}

.TotalArticles{
  background: white;
  display: grid;
  grid-template-columns: repeat(2, 150px);
  grid-template-rows: repeat(auto);
  border-radius: 5px;
  position: absolute;
  height: 150px;
  margin-left: 280px;
 @media screen and (min-width: 0px) and (max-width:1400px){
    grid-template-columns: repeat(2, 100px);
    margin-left: 300px;} 
 @media screen and (min-width: 0px) and (max-width:995px){
   margin-left: 265px;
   width: 580px;}
 @media screen and (min-width: 0px) and (max-width:643px){
  margin-left: 285px;
  width: 295px;} 
 @media screen and (min-width: 0px) and (max-width:280px){
  width: 270px;}}`;

export const TitleItems = styled.h3`
  margin-top: 90px;
  margin-bottom: 20px;
  font-family:Arboria-Book;
  font-size: 1.8em;
  color: #3e4095;
 @media screen and (min-width: 0px) and (max-width:995px){
    margin-left:175px;} 
 @media screen and (min-width: 0px) and (max-width:643px){
   font-size: 1.3em;
   margin-left:315px;} `

export const TitleItemsPAY = styled(TitleItems)`
  text-align:end;
 @media screen and (min-width: 0px) and (max-width:1400px){
  margin-right: 35px;}`

export const SubTotal = styled.h2`
  font-size: 1em;
  margin-top: 20px;
  font-family:Arboria-Book;
@media screen and (min-width: 0px) and (max-width:643px){
  margin-left:120px;}`;

export const Total = styled.span`
   font-family:'Bold';
   font-size: 2em;
   margin-top: 20px;
   margin-left: -70px;
 @media screen and (min-width: 0px) and (max-width:1400px){
   font-size: 1.5em;
   margin-top: 30px;
   margin-left: -20px;} 
 @media screen and (min-width: 0px) and (max-width:643px){
   margin-left:0px;}`;

export const BtnToPay = styled.button`
  background: #3e4095; 
  color: white;
  border-radius:10px ;
  width: 200PX;
  height: 38px;
  margin-left: 35%;
  display: inline-block;
  font-size: 0.9em;
  font-family:Arboria-Book;
  border: 1px solid #3e4095;
 @media screen and (min-width: 0px) and (max-width:1400px){
  width: 160PX;
  height: 34px;
  margin-left: 20%;} 
 @media screen and (min-width: 0px) and (max-width:643px){
   margin-left: 70%;} 
 &:hover{
   color:white;
   background:#3e4095 ;
   box-shadow: 6px 6px rgb(198, 196, 225);
   transition: .3s;}`;
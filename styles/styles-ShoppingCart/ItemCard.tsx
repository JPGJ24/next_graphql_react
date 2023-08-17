import styled from "styled-components";

export const ContentItemCard = styled.div`
 @media screen and (min-width: 0px) and (max-width:995px){
   grid-column: 1;
   width: 600px;}
 @media screen and (min-width: 0px) and (max-width:280px){
   width: 580px;}
        
.ProductSelect{
  background: white;
  display: grid;
  grid-template-columns: repeat(6, 156px);
  grid-template-rows: repeat( auto);
  border-radius: 5px;
  margin-top: 90px;
  margin-left: 180px;
  align-items: center;
 @media screen and (min-width: 0px) and (max-width:1400px){
  margin-left: 142px;
  margin-top: 80px;
  grid-template-columns: repeat(6, 114px);}
 @media screen and (min-width: 0px) and (max-width:995px){
  margin-left: 183px;
  margin-top: 55px;
  grid-template-columns: repeat(6, 96.5px);}
 @media screen and (min-width: 0px) and (max-width:643px){
  margin-left: 315px;
  margin-top: 5px;
  grid-template-columns: repeat(3, 96.5px)}  
 @media screen and (min-width: 0px) and (max-width:280px){
  width: 250px;
  margin-left: 335px;
  grid-template-columns: repeat(3, 90.5px)}  

.ImgProduct{
  width:236px;
  height:143px;
  margin-left: -110px;
  margin-top: 20px;
 @media screen and (min-width: 0px) and (max-width:1400px){
  width:150px;
  height:95px;
  margin-left: -80px} 
 @media screen and (min-width: 0px) and (max-width:995px){
  width:110px;
  height:70px;
  margin-left: -70px;}
 @media screen and (min-width: 0px) and (max-width:643px){
  width:150px;
  height:100px;
  margin-left: -70px;}}
  
.Description{
  margin-left: -10px;
  text-align: start;
 @media screen and (min-width: 0px) and (max-width:1400px){
  margin-left: -35px;
  font-size: 0.8em;
  width: 120px;} 
 @media screen and (min-width: 0px) and (max-width:995px){
  margin-left: -8px;}
 @media screen and (min-width: 0px) and (max-width:280px){
  width: 10px;}}

.DivDefinition{
  display: none;
 @media screen and (min-width: 0px) and (max-width:643px){
  display: inline-block;
  font-size: 0.9em;
  font-family:Arboria-Book;}  
@media screen and (min-width: 0px) and (max-width:280px){
  width: 80px;}}

.BtnIcons{
  width: 280px;
  margin-left: 670px;
  margin-top: -25px;
  margin-bottom: 10px;
  font-size: 0.9em;
 @media screen and (min-width: 0px) and (max-width:1400px){
  margin-left: 420px;
  font-size: 0.8em;} 
 @media screen and (min-width: 0px) and (max-width:995px){
  margin-left: 320px;}
 @media screen and (min-width: 0px) and (max-width:643px){
  margin-left: 0px;
  margin-top:20px;}  
 @media screen and (min-width: 0px) and (max-width:280px){
  margin-left: -20px;}}

.StateIncrease{
 @media screen and (min-width: 0px) and (max-width:1400px){
  margin-left: 20px;} 
 @media screen and (min-width: 0px) and (max-width:995px){
  margin-left: 0px;
  font-size:0.8em;}
  @media screen and (min-width: 413px) and (max-width:414px){
    margin-top:20px}
 @media screen and (min-width: 0px) and (max-width:280px){
  margin-left: -25px;}}}`;

export const Input = styled.input`
  margin-right: 70%;
@media screen and (min-width: 413px) and (max-width:414px){
    margin-left:5px;}`;

export const TitleProduct = styled.h2`
  margin-top: 20px;
  font-size: 0.9em;
  font-family:Arboria-Book;
 @media screen and (min-width: 0px) and (max-width:995px){
  font-size: 1.1em;
  font-family:'Arboria-Medium';}
 @media screen and (min-width: 0px) and (max-width:280px){
  display: none;} `;

export const TextProduct = styled.p`
  font-size: 0.8em;
  text-align: start;
 @media screen and (min-width: 0px) and (max-width:643px){
  display: none;}`;
  
export const Sale = styled.h2`
  font-size: 1.2em;
  margin-top: 15px;
  margin-right: 50px;
 @media screen and (min-width: 0px) and (max-width:1400px){
  font-size: 1em;
  margin-right: 40px;} 
 @media screen and (min-width: 0px) and (max-width:995px){
  font-size:0.8em;}
 @media screen and (min-width: 0px) and (max-width:643px){
  margin-right: 0px;}`;

export const SaleTotal = styled.h2`
  font-size: 1.2em;
  margin-top: 15px;
  margin-left: 50px;
 @media screen and (min-width: 0px) and (max-width:1400px){
  font-size: 1em;
  margin-left: 30px;} 
 @media screen and (min-width: 0px) and (max-width:995px){
  font-size:0.8em;}
 @media screen and (min-width: 0px) and (max-width:643px){
  margin-left: 4px;} 
 @media screen and (min-width: 0px) and (max-width:280px){
  margin-left: 10px;
  width: 50px;}`;

export const ContainerPay = styled.div`
  margin-left: 285px;
  margin-top: 170px;
  width: 270px;
 @media screen and (min-width: 0px) and (max-width:995px){
  margin-left: 500px;
  margin-top: 0px;
  margin-bottom: 150px;
  position:relative;}
 @media screen and (min-width: 0px) and (max-width:643px){
  margin-left: 370px;
  margin-top: 180px;}  
 @media screen and (min-width: 0px) and (max-width:280px){
  width: 220px;
  margin-left: 363px;}
    
.WayToPay{
  display: grid;
  grid-template-columns: repeat(3, 90px);
  grid-template-rows: repeat(1, 60px);
 @media screen and (min-width: 0px) and (max-width:1400px){
  grid-template-columns: repeat(2, 90px);
  grid-template-rows: repeat(2, 60px);}
 @media screen and (min-width: 0px) and (max-width:995px){
  grid-template-columns: repeat(3, 70px);
  grid-template-rows: repeat(1, 60px);}
 @media screen and (min-width: 0px) and (max-width:643px){
  grid-template-columns: repeat(6, 40px);
  margin-left:-26px;} 

.ImgPay{
 @media screen and (min-width: 0px) and (max-width:995px){
  width:55px;
  height: 40px;}
 @media screen and (min-width: 0px) and (max-width:643px){
  width:34px;
  height: 28px;}}}

.TitlePay{
  font-size: 2em;
  font-family:'Bold';
  text-align: start;
 @media screen and (min-width: 0px) and (max-width:1400px){
  font-size: 1.5em;} 
 @media screen and (min-width: 0px) and (max-width:995px){
  font-size: 1em;
  margin-right: 70px;
  text-align: center;}
 @media screen and (min-width: 0px) and (max-width:643px){
  margin-right: 90px;}
 @media screen and (min-width: 0px) and (max-width:280px){
  margin-right: 30px;}}`;

export const DivAddProduct = styled.div`
    margin-top: -65px;
    margin-bottom: 180px;
  @media screen and (min-width: 0px) and (max-width:1400px){
    margin-top: -55px;} 
  @media screen and (min-width: 0px) and (max-width:995px){
    margin-top: -40px;
    margin-bottom:0px;}
  @media screen and (min-width: 0px) and (max-width:643px){
      margin-top: 10px;} `;   
import styled from 'styled-components';
import BackgroundMonsi from '../../assets/Img-App/Img-Home/img-Offers/BackgroundMonsis.png';
    
export const ContentMonsi = styled.div`
  background-image: url(${BackgroundMonsi.src});
  background-repeat: no-repeat;
  background-size:cover;
  display:grid;
  width:100%;
  .ImgCards{
    width: 247px;
    height: 169px;
    margin: 16px;
@media screen and (min-width: 280px) and (max-width: 359px){
    width:230px;}
  }`;

export const TitleCard = styled.h1`
font-size: 3rem;
font-family:'Insanibu';
  color:#3e4095;
  text-align:center;
  margin-bottom:50px;
  margin-top:50px;`;

export const OffersColumns = styled.div`
  margin-bottom: 50px;
  display: grid;
  justify-content:center;
  grid-gap: 50px;
  column-gap: 0px;
  grid-template-columns: repeat(4, 300px);
  grid-template-rows: repeat( auto);
  @media screen and (min-width: 657px) and (max-width: 1353px){
    grid-template-columns: repeat(2, 320px);
  grid-template-rows: repeat( auto);}
  @media screen and (min-width: 280px) and (max-width: 657px){
    grid-template-columns: repeat(1, auto);
    grid-template-rows: repeat( auto);}`;

export const CardOffert= styled.div`
  width: 280px;
  height: auto;
  border-radius:39px;
  box-shadow: rgba(0, 0, 0, 0.35) 0px 5px 15px;
  background: white;
  @media screen and (min-width: 280px) and (max-width: 359px){
    width:260px;}`;



export const Title = styled.h3`
min-height: 42.22px;
display: flex;
align-items: center;
justify-content: center;
text-align: center;
font-size: 1.1em;
font-family:'Bold';`

export const TextCard = styled.div`
   display: -webkit-box;
  overflow: hidden;
  /* text-overflow: ellipsis; */
  -webkit-line-clamp: 2; 
  -webkit-box-orient: vertical; 
  text-align: center;
  font-size: 0.9em;
  line-height: 16px; 
  margin-top: -5px;
  margin-left: 23px;
  margin-bottom: 10px;
  max-width: 232px;
  min-height: 32px;
`;



export const DivCardSale = styled.div`
  display:flex;
  margin-top:0px;
  margin-bottom:15px;
  margin-left: -10px;`;

export const SaleCard = styled.h3`
font-size: 1em;
margin-left:40px;
color:red;`;

export const SaleCardThrough = styled.h3`
font-size: 1em;
margin-left:15px;
text-decoration:line-through;`;

export const DivCard = styled.div`
  text-align: center;
  margin:13px 0px 30px;`;

export const BtnCard = styled.button`
  background: #3e4095; 
  color: white;
  border-radius:10px ;
  width: 200PX;
  height: 30px;
  display: inline-block;
  font-size: 0.9em;
  border: 1px solid #3e4095;
  &:hover{
    color:white;
    background:#3e4095 ;
    box-shadow: 6px 6px rgb(198, 196, 225);
    transition: .3s;}`;

export const IconLikeCard = styled.img`
  margin-right:8px;
  width: 20px;
  height: 20px;
  &:hover{

  }`;
export const IconStoreCard = styled.img`
  width: 16px;
  height: 16px;
  margin-bottom:5px;
  margin-left:5px;  `;
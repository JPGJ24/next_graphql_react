import styled from 'styled-components';

export const StartSocialMedia = styled.div`
  height: 200px;
  margin: 40px;
  margin-top: 160px;
  display: grid;
  grid-template-columns: repeat(2, 45px);
@media screen and (min-width: 0px) and (max-width: 1040px){
  margin-top: 0px;}
@media screen and (min-width: 0px) and (max-width: 510px){
  width: 100px;
  height:100px;
  margin-left: 140px; 
  margin-top: -18px;
  margin-bottom: -40px;
@media screen and (min-width: 0px) and (max-width: 380px){
  margin-left: 130px;}}
`
export const BtnCreateUser = styled.button`
      margin-left: -300px;
      background: #3e4095; 
      color: white;
      border-radius:15px;
      width: 180px;
      height: 44px;
      display: inline-block;
      font-size: 1.2em;
      border: none;
    @media screen and (min-width: 0px) and (max-width: 1040px){
      margin-left: -210px;}
    @media screen and (min-width: 0px) and (max-width: 510px){
      margin-left: 100px;
      width: 140px;
      height: 34px;
      font-size:0.9em;}
    @media screen and (min-width: 0px) and (max-width: 380px){
      margin-left: 130px;
      font-size: 1em;}
    &:hover{
     color:white;
     background:#3e4095 ;
     box-shadow: 6px 6px rgb(198, 196, 225);
     transition: .3s;};`
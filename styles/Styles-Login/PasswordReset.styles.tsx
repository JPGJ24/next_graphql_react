import styled from 'styled-components';

export const ContainPasswordReset = styled.div`
     text-align: center;
     background-size:cover;
     justify-content:center;
     color:black;
     width: 100%;
     height: auto;
     @media screen and (min-width: 0px) and (max-width: 510px){
      margin-top:-20px;}

      h5{
        @media screen and (min-width: 0px) and (max-width: 510px){
        margin: 20px;
        width:90%;}}
form{
  margin-top: 80px;
  margin-bottom: 100px;
@media screen and (min-width: 0px) and (max-width: 1040px){
  margin-bottom: 80px;}
@media screen and (min-width: 0px) and (max-width: 510px){
width:0px;}}

  .form__group {
position:relative;
margin-bottom:25px;
@media screen and (min-width: 380px) and (max-width: 510px){
width:350px;
margin-left:40px;}
@media screen and (min-width: 0px) and (max-width: 395px){
width:350px;
margin-left:20px;}
@media screen and (min-width: 0px) and (max-width: 345px){
width:280px;
margin-left:0px;
}}

.form__input{
 margin-left:0px;
 border:0;
 border-bottom:1px solid #c2c2c2;  
 background:transparent;
 font-size: 1.2em;
 width:30%;
 padding:20px 0 5px 0;
 margin-bottom:40px;
@media screen and (min-width: 0px) and (max-width: 1040px){
  margin-left: 0px;
  width:50%;}
@media screen and (min-width: 0px) and (max-width: 510px){
    margin-bottom:60px;
    width:80%;}
&::placeholder {
   color: black;}
&:placeholder-shown + .form__label {
 top: 10px;
 @media screen and (min-width: 0px) and (max-width: 815px){
 font-size: 1em;
 top: 20px;}}}
.form__input:focus {
  border-bottom:1px solid #3e4095;	
  outline:none;};`

export const BtnPasswordReset = styled.button`
   margin-left: 0px;
   background: #3e4095; 
   color: white;
   border-radius:15px;
   width: 180px;
   height: 44px;
   display: inline-block;
   font-size: 1.2em;
   border: none;
 @media screen and (min-width: 0px) and (max-width: 510px){
   margin-left: 140px;
   width: 140px;
   height: 34px;
   font-size:0.9em;}
 @media screen and (min-width: 0px) and (max-width: 395px){
   margin-left: 120px;
   font-size: 1em;}
   @media screen and (min-width: 0px) and (max-width: 340px){
    margin-left: 80px;}
 &:hover{
  color:white;
  background:#3e4095 ;
  box-shadow: 6px 6px rgb(198, 196, 225);
  transition: .3s;};`
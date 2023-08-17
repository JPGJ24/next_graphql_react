import Link from 'next/link';
import styled from 'styled-components';

export const Container = styled.div`
      width: 100%;
      height: 800px;
     .nav{
      margin-top: -160px;
      justify-content: end;};
    .ImgLogoLogin{
      width: 126px;
      height: 63px;
      margin: 60px;
    @media screen and (min-width: 0px) and (max-width: 1040px){
      width: 106px;
      height: 53px;
      margin: 40px;}
     @media screen and (min-width: 0px) and (max-width: 510px){
      width: 73px;
      height: 40px;
      margin:20px;
     }
    }`

export const LinckHome = styled(Link)``;

export const IconsToClose = styled.button`
    border: none;
    background: transparent;
    margin: 60px;
    width: 38px;
    height: 38px;
    @media screen and (min-width: 0px) and (max-width: 1040px){
     width: 32px;
     height: 32px;
     margin:80px 30px;};
     @media screen and (min-width: 0px) and (max-width: 510px){
      margin:100px 20px;};`

export const DivContainer = styled.div`
     text-align: center;
     background-size:cover;
     justify-content:center;
     color:black;
     width: 100%;
     height: auto;
     @media screen and (min-width: 0px) and (max-width: 510px){
      margin-top:-50px;}
     .anchor{
        text-decoration:none;
        cursor: pointer;
     &:hover{
        font-family: Arboria-Book;}}

     .containerItms{
        margin-top: 30px;
        justify-content: center;
        display: grid;
        grid-template-columns: repeat(2, 520px);
        grid-template-rows: repeat( auto);
      @media screen and (min-width: 0px) and (max-width: 1040px){
        grid-template-columns: repeat(1, 520px);}}

    form{
        margin: 20px;
        margin-bottom: 100px;
        border-right:#3E4094 3px solid;
     @media screen and (min-width: 0px) and (max-width: 1040px){
        border-right:none;
        margin-bottom: 80px;}
     @media screen and (min-width: 0px) and (max-width: 510px){
      width:0px;}}
        .form__group {
      position:relative;
	    margin-bottom:25px;
      @media screen and (min-width: 0px) and (max-width: 510px){
      width:350px;
      margin-left: 70px;}
     @media screen and (min-width: 0px) and (max-width: 380px){
      width:250px;
      margin-left: 110px;}}

    .form__input{
       margin-left: -90px;
       border:0;
       border-bottom:1px solid #c2c2c2;  
       background:transparent;
       width:80%;
       padding:20px 0px 5px 0px;
       outline:none;
       margin-bottom:40px;
      @media screen and (min-width: 0px) and (max-width: 1040px){
        margin-left: 0px;}
      @media screen and (min-width: 0px) and (max-width: 510px){
          margin-bottom:10px;}
    
     &::placeholder {
         color: transparent;}
     &:placeholder-shown + .form__label {
       font-size: 1.3rem;  
       top: 0px;
       @media screen and (min-width: 0px) and (max-width: 815px){
       font-size: 1em;
       top:0px;}}}

    .form__label{
    	position:absolute;
    	top:0px;
    	left:0px;
    	color:black;
    	transition: all 0.5s ease-in-out;
    @media screen and (min-width: 0px) and (max-width: 1040px){
       margin-left: 45px;}
    @media screen and (min-width: 0px) and (max-width: 510px){
       margin-left: 35px;}
    @media screen and (min-width: 0px) and (max-width: 380px){
      margin-left: 25px;}}


    .form__input:focus + .form__label{
      transform: translateY(-80%);
      font-size: 0.9em;
       
        outline:none;}

    .startSocialMedia{
          height: 200px;
          margin: 40px;
          margin-top: 100px;
          display: grid;
          grid-template-columns: repeat(2, 45px);
        @media screen and (min-width: 0px) and (max-width: 1040px){
          margin-top: 0px;}
        @media screen and (min-width: 0px) and (max-width: 510px){
          width: 100px;
          height:100px;
          margin-left: 140px; 
          margin-top: -30px;
        @media screen and (min-width: 0px) and (max-width: 380px){
          margin-left: 130px;}}}

    h3{
      @media screen and (min-width: 0px) and (max-width: 510px){
      font-size: 1.2em;}}

    .text{
        margin-left:120px;
        margin-top: -30px;
        margin-bottom: 50px;
      @media screen and (min-width: 0px) and (max-width: 1040px){
        margin-left:200px;}
      @media screen and (min-width: 0px) and (max-width: 510px){
        margin-left:190px;
        width:200px;}
      @media screen and (min-width: 0px) and (max-width: 380px){
        margin-left: 180px;}}

      .conditions{
        @media screen and (min-width: 0px) and (max-width: 510px){
          font-size:0.9em;
          margin-top: 100px;
         text-align:center;}}`;

export const TitleLogin = styled.h2`
      color:#3E4094;
      font-size: 4em;
      font-family:'Bold';
     @media screen and (min-width: 0px) and (max-width: 510px){
      font-size: 2.5em;};`

export const IconsSocialMedia = styled.svg`
      cursor:pointer;
      width:46px;
      height:46px;
     @media screen and (min-width: 0px) and (max-width: 510px){
      width:30px;
      height:30px;};`

export const BtnLogin = styled.button`
      margin-left: -260px;
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
      margin-left: 90px;
      width: 140px;
      height: 34px;
      font-size:0.9em;}
    @media screen and (min-width: 413px) and (max-width: 414px){
      width: 150px;
      display: inline-block;
      font-size:0.8em;
      font-family: Arboria-Light;}
    @media screen and (min-width: 0px) and (max-width: 380px){
      margin-left: 120px;
      font-size: 1em;}
    &:hover{
     color:white;
     background:#3e4095 ;
     box-shadow: 6px 6px rgb(198, 196, 225);
     transition: .3s;};`

export const BtnGoogle = styled(BtnLogin)`
      border-radius: 0 1rem 1rem 0; 
      width: 390px;
      height: 50px;
      margin-left: 10px;
      background: #4285F4;
    @media screen and (min-width: 0px) and (max-width: 1040px){
      margin-left: 10px;
      width: 360px;}
    @media screen and (min-width: 0px) and (max-width: 510px){
      width: 180px;
      height: 34px;
      margin-left: 0px;
      margin-top: 0px;}
    @media screen and (min-width: 0px) and (max-width: 380px){
     width: 180px;
     font-size: 0.9em;}
    &:hover{
     color:white;
     background: #4285F4;
     box-shadow: 6px 6px rgb(198, 196, 225);
     transition: .3s;};`

export const BtnFacebook = styled(BtnGoogle)`
    background:#3C5A9A;
    @media screen and (min-width: 413px) and (max-width: 414px){
      font-size:0.7em;
      font-family: Arboria-Light;}
    &:hover{
    color:white;
    background: #3C5A9A;};`
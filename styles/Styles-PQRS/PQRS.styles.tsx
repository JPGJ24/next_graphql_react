import styled from 'styled-components';

export const ContainerPQRs= styled.div`
     padding-top:140px;
     background-size:cover;
     justify-content:center;
     color:black;
     width: 100%;
     height: auto;  
     display: grid;
     grid-template-columns: repeat(2, 520px);
     grid-template-rows: repeat( auto);
 @media screen and (min-width: 0px) and (max-width: 1206px){
     grid-template-columns: repeat(1, auto);}
    .PQRSImg{
         width: 658px;
         height: 405px;
         margin-top: 30%;
         margin-left: 80px;
    @media screen and (min-width: 1240px) and (max-width: 1500px){
        width: 528px;
        height: 305px;}
    @media screen and (min-width: 1206px) and (max-width: 1330px){
        width: 388px;
        height: 265px;
        margin-left: 200px;}
    @media screen and (min-width: 0px) and (max-width: 1206px){
        display: none;}}

     .box{
	margin-top:-15%;
	margin-left:-40%;
	margin-bottom:21%;
    width: 800px;
	padding:70px 100px;
    @media screen and (min-width: 1206px) and (max-width: 1330px){
        margin-left:-20%;
        margin-bottom:18%;}
    @media screen and (min-width: 0px) and (max-width: 1206px){
        width: 800px;
        margin-top:-13%;
	    margin-left:0;
	    margin-bottom:5%;}
    @media screen and (min-width: 520px) and (max-width: 815px){
        width: 500px;}
    @media screen and (min-width: 0px) and (max-width: 520px){
        margin-top:-30%;
        width: 250px;
        height: auto;  
        display: grid;
        justify-content:center;}}

     .form__group {
        position:relative;
	    margin-bottom:25px;}
        input[type=number]::-webkit-inner-spin-button, 
        input[type=number]::-webkit-outer-spin-button { 
        -webkit-appearance: none;}

    .form__input{
       border:0;
       border-bottom:1px solid #c2c2c2;  
       background:transparent;
       width:100%;
       outline:none;
       padding:20px 0 5px 0;
     &::placeholder {
         color: transparent;}
     &:placeholder-shown ~ .form__label {
       font-size: 1.1rem;  
       top: 0px;
       @media screen and (min-width: 0px) and (max-width: 815px){
       font-size: 1em;
       top: 0px;}}}

    .form__label {
    	position:absolute;
    	top:0px;
    	left:0px;
    	margin-bottom:8px;
    	color:black;
    	transition: all 0.5s ease-in-out;}

        .form__input:focus + .form__label{
      transform: translateY(-40%);
      font-size: 0.9em;
        outline:none;}

    .btn{
        background: #3e4095; 
        color: white;
        border-radius:10px ;
        width: 130PX;
        height: 37px;
        display: inline-block;
        font-size: 1em;
        border: 1px solid #3e4095;
        &:hover{
        color:white;
        background:#3e4095 ;
        box-shadow: 6px 6px rgb(198, 196, 225);
        transition: .3s;}}

     .grid{
        display: grid;
        grid-template-columns: repeat(2, 300px);
        grid-template-rows: repeat( auto);
        @media screen and (min-width: 0px) and (max-width: 1080px){
        grid-template-columns: repeat(1, auto);}}
     .select{
        font-size: 1.1rem;  
        margin-top: 25px;
        border: none;
        background:white;
        @media screen and (min-width: 0px) and (max-width: 815px){
        font-size: 1em;}
        &:focus{ 
        background:white ;
        border: none;}}
     .text{
        border:1px solid #c2c2c2;  
        margin-top: 20px;
        width:100%;
        height: 100px;
        &:focus{ 
            border:none;	
            outline:none;
            border:1px solid #3e4095;}}`;

export const TitlePQRS= styled.h1`
   text-align: center;
   font-size: 3em;
   color: #3e4095;
   font-family:'Bold';
   @media screen and (min-width: 0px) and (max-width: 815px){
    font-size: 3em;}`;

export const TextPQRS= styled.p`
    margin-bottom: 40px;
    font-size: 1.3em;
    @media screen and (min-width: 0px) and (max-width: 815px){
    font-size: 1em;}`;
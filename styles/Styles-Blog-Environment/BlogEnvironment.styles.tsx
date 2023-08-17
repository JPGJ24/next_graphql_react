import styled from 'styled-components';

export const ContainerBlog= styled.div`
     margin-top:100px;
     background-size:cover;
     justify-content:center;
     text-align: center;
     color:black;
     width: 100%;
     height: auto;     
     .title{
        justify-content: center;
    .sub{
        margin-top: -10px;}} 

     .items{
        text-align: start;
        margin-left: 6%;
        justify-content: center;
        margin-bottom: 7%;
        margin-top: 1%;
        display: grid;
        grid-template-columns: repeat(2, 450px);
        grid-template-rows: repeat( auto);
       @media screen and (min-width: 820px) and (max-width: 1300px){
        grid-template-columns: repeat(2, 400px);}
       @media screen and (min-width: 685px) and (max-width: 830px){
         grid-template-columns: repeat(2, 350px); }
       @media screen and (min-width: 0px) and (max-width: 685px){
         grid-template-columns: repeat(1, 350px);}

     .span{
     font-size: 0.8em;}

     p{ width: 390px;
        height: auto;
        text-align: justify;
        @media screen and (min-width: 820px) and (max-width: 1300px){
        width: 380px;}
       @media screen and (min-width: 0px) and (max-width: 830px){
         font-size: 0.8em;
         width: 300px;}
       @media screen and (min-width: 360px) and (max-width: 685px){
         margin-left: 15px;}
       @media screen and (min-width: 320px) and (max-width: 360px){
         margin-left: 20px;}
       @media screen and (min-width: 0px) and (max-width: 320px){
         width: 200px;
         margin-left: 70px;}}
         
      .ImgEcoFriendly{
        width: 420px;
        height: 450px;
      @media screen and (min-width: 830px) and (max-width: 1300px){
        width: 380px;
        height: 430px;}
      @media screen and (min-width: 0px) and (max-width: 830px){
        width: 300px;
        height: 360px;
      @media screen and (min-width: 0px) and (max-width: 685px){
        width: 150px;
        height: 150px;
        margin-left: 78px;
        margin-top: 20px;
        margin-bottom: 20px;
        border-radius: 100px; }
      @media screen and (min-width: 0px) and (max-width: 320px){
        width: 100px;
        height: 100px;
        margin-left: 110px;}
      }  }}`;

export const TitleBlog= styled.h2`
       color:#3e4095;
       font-size: 5.8em;
      @media screen and (min-width: 830px) and (max-width: 1300px){
        font-size: 5em;}
      @media screen and (min-width: 450px) and (max-width: 830px){
        font-size: 3em;}
      @media screen and (min-width: 320px) and (max-width: 450px){
        font-size: 1.8em;}
      @media screen and (min-width: 0px) and (max-width: 320px){
        font-size: 1.3em;
        margin-top: 120px;}`;

export const TitleBlogh2= styled.h2`
        color:#3e4095;
        margin-top: -30px;
        font-family:'Arboria-Black';
        font-size: 5.8em;
      @media screen and (min-width: 820px) and (max-width: 1300px){
        font-size: 5em;}
      @media screen and (min-width: 450px) and (max-width: 830px){
        font-size: 3em;
        margin-top: -20px;}
      @media screen and (min-width: 320px) and (max-width: 450px){
        font-size: 1.8em;
        margin-top: -15px;}
      @media screen and (min-width: 0px) and (max-width: 320px){
        font-size: 1.3em;
        margin-top: -10px;}`;

export const SubTitleBlog= styled.h2`
        font-size: 1.8em;
      @media screen and (min-width: 450px) and (max-width: 830px){
        font-size: 1.3em;}
      @media screen and (min-width: 0px) and (max-width: 450px){
        font-size: 0.8em;}
       @media screen and (min-width: 0px) and (max-width: 320px){
        font-size: 0.6em;}`;
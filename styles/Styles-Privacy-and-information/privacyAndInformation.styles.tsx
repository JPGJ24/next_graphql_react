import styled from 'styled-components';

export const ContainerPrivacyInformation= styled.div`
     padding-top:140px;
     background-size:cover;
     justify-content:center;
     text-align: center;
     color:black;
     width: 100%;
     height: auto;
     .ImgTitle{
         @media screen and (min-width: 515px) and (max-width: 880px){
           width:400px;
           height:70px;}
        @media screen and (min-width: 315px) and (max-width: 515px){
           width:280px;
           height:45px;}
        @media screen and (min-width: 0px) and (max-width: 315px){
           width:250px;
           height:40px;}
      }`;

export const ContainerText = styled.div`
        justify-content:center;
        text-align: justify;
        width: 100%;
        height: auto; 
        display: grid;
        grid-template-columns: repeat(2, 560px);
        grid-template-rows: repeat( auto);
     @media screen and (min-width: 880px) and (max-width: 1130px){
        font-size:0.9em;
        grid-template-columns: repeat(2, 450px);}
     @media screen and (min-width: 640px) and (max-width: 880px){
        font-size:0.9em;
        grid-template-columns: repeat(2, 330px);}
     @media screen and (min-width: 515px) and (max-width: 640px){
        font-size:0.9em;
        grid-template-columns: repeat(1, 530px);}
     @media screen and (min-width: 315px) and (max-width: 515px){
        font-size:0.9em;
        grid-template-columns: repeat(1, 350px);}
     @media screen and (min-width: 0px) and (max-width: 315px){
        font-size:0.9em;
        grid-template-columns: repeat(1, 300px);}
     .divText{
        margin: 30px;}`;
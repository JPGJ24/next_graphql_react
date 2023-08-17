import styled from "styled-components";

export const Container404 = styled.div`
    display: grid;
    place-items: center;
    text-align:center;
    background:rgb(198, 196, 225);
    height: 100vh;

.styleImg404{
    width: 748px;
    height: 590px;
 @media screen and (min-width: 0px) and (max-width: 1300px){
    width: 548px;
    height: 390px;
    }
 @media screen and (min-width: 0px) and (max-width: 820px){
    width: 248px;
    height: 190px;
   
  }
}`

export const Title404 = styled.h2`
   margin-top: 20px;
   font-family:'Bold';
   color:white;
@media screen and (min-width: 0px) and (max-width: 820px){
    font-size:1.3rem;}
 
 `
export const TitleSub404 = styled(Title404)`
    cursor: pointer;
    margin-top: 0px;
   font-family: Arboria-Light;
   &:hover{
        color:#3e4095;}
  
 
 `
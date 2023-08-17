import { keyframes } from "styled-components";
import styled  from "styled-components";

export const DivContainer = styled.div`
width: 100%;
max-width: auto;
margin: 0 auto;
  .ImgBanner{
    margin-top: 55px;
    width: 100%;
    height: auto;
  }
  .carousel-indicators{
    display: none;
  }`;

export const DivAnimation = styled.div`
width: 400px;
height: 400px;
margin-left:400px;
margin-top:-510px;
position:absolute;`;

export const Animation = keyframes`
from {
  transform: translateY(3vh);
}
to {
  transform: translateY(0);
}`;

export const BubbleAnimation = styled.div`
background-color: white;
border-radius: 50%;
height: 24px;
aspect-ratio: 1 / 1;
margin-left:40px;
margin-top:250px;
animation: 7s linear 0s infinite alternate ${Animation};`;

export const Bubble1 = styled(BubbleAnimation)`
margin-left:130px;
margin-top:-50px;
height: 47px;
animation: 7s linear 0s infinite alternate ${Animation};`;

export const Bubble2 = styled(BubbleAnimation)`
margin-left:180px;
margin-top:-80px;
height: 17px;
animation: 14s linear 0s infinite alternate ${Animation};`;

export const Bubble3 = styled(BubbleAnimation)`
margin-left:130px;
margin-top:-50px;
height: 24px;
animation: 5s linear 0s infinite alternate ${Animation};`;

export const Bubble4 = styled(BubbleAnimation)`
margin-left:200px;
margin-top:100px;
height: 67px;`;

export const Bubble5 = styled(BubbleAnimation)`
margin-left:70px;
margin-top:-70px;
height: 57px;
animation: 12s linear 0s infinite alternate ${Animation};`;

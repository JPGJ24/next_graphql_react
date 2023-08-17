import styled from "styled-components";
import { keyframes } from "styled-components";

export const Loading = keyframes`
 from { transform: none; }
    50% { transform: scale(1.5); }
    to { transform: none; }
`;

export const DivStart = styled.div`
   text-align: center;
   .Start {
	display: inline-block;
	animation: ${Loading} 1s infinite;
	transform-origin: center;
    height: 80px;
    width: 80px;
    margin-top: 400px;
    margin-right: 110px;}
 @media screen and (min-width: 280px) and (max-width: 1500px){
    margin-right:0px;
    margin-left:110px;}`;
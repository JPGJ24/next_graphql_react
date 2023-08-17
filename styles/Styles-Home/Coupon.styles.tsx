import styled from 'styled-components';

export const DivContent = styled.div`
  display: grid;
  justify-content: center;
  grid-template-columns: repeat(2,400px);
  place-items: center;
  height: 413px;
  @media screen and (min-width: 0px) and (max-width: 991px){
    grid-template-columns: repeat(1,80.1%);
    height: 526px;
  }
`;
export const TitleCupon = styled.h2`
    font-size: 2.5rem;
    /* color: #3e4095; */
    font-family: 'Insanibu';
    margin-bottom: 9px;
    margin-top: -2px;
    display: flex;
    justify-content: center;
`;
export const DivImgCupon = styled.div`
    height: 413px;
    width: 350px;
    /* background: #dedef1; */
    display: grid;
    place-items: center;
    border-radius: 1%;
    margin-right: 49px;
    @media screen and (min-width: 0px) and (max-width: 991px){
      height: 170px;
      width: 125%;
      margin-right: 0px;
      margin-top: -24px;
    }
    .ImgCupon{
      width: 250px;
      height: 288px;
      @media screen and (min-width: 0px) and (max-width: 991px){
        height: 170px;
        width: 162px;
      }
    }
`;
export const DivContentInfo = styled.div`
    text-align: center;
    margin-right: 48px;
    width: 100%;
    height: 93%;
      @media screen and (min-width: 0px) and (max-width: 991px){
        margin-right: 0px;
      }
    label{
      margin-bottom: -28px;
      @media screen and (min-width: 0px) and (max-width: 991px){
        margin-bottom: -48px;
      }
    }
    .inputCupon{
        width: 100%;
        padding: 12px 20px;
        margin: 8px 0;
        display: inline-block;
        border: 1px solid #ccc;
        border-radius: 4px;
        box-sizing: border-box;
        &:focus{ 
            border:none;	
            outline:none;
            border:1px solid #ccc;}
    }
    .checkbox{
        margin: 12px 13px 57px -69px;
        @media screen and (min-width: 0px) and (max-width: 490px){
            margin: 0px 10px 0px 0px;
        }
    }
`;
export const BtnCupon= styled.button`
  background: #3e4095;
  color: white;
  border-radius: 10px;
  width: 231PX;
  height: 41px;
  display: inline-block;
  font-size: 1.1em;
  border: 1px solid #3e4095;
  margin-top: 6px;
  line-height: 16px; 
    @media screen and (min-width: 0px) and (max-width: 440px){
      font-size: 0.9em;
    }
    &:hover{
      color:white;
      background:#3e4095 ;
      box-shadow: 6px 6px rgb(198, 196, 225);
      transition: .3s;
    }
`;
export const BtnThanks= styled.button`
  background: transparent;
  color: #ccc;
  width: 231PX;
  height: 41px;
  display: inline-block;
  font-size: 1.1em;
  border: none;
  margin-top: 10px;
    @media screen and (min-width: 0px) and (max-width: 991px){
      margin-top: 10px;
    }
    @media screen and (min-width: 0px) and (max-width: 424px){
      margin-top: 0px;
    }
`;
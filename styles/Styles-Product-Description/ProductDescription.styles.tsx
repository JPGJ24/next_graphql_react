import styled from 'styled-components';

export const ContainerDescription= styled.div`
        padding-top:110px;
        background-size:cover;
        justify-content:center;
        color:black;
        width: 100%;
        height: auto;  
        display: grid;
        grid-template-columns: repeat(2, 520px);
        grid-template-rows: repeat( auto);
     @media screen and (min-width: 880px) and (max-width: 1070px){
        display:grid;
        grid-template-columns: repeat(2, 430px);
        grid-template-rows: repeat( auto);}
     @media screen and (min-width: 0px) and (max-width: 880px){
        padding-top:80px;
        display:grid;
        grid-template-columns: repeat(1, 430px);
        grid-template-rows: repeat( auto);};

     .div{
    @media screen and (min-width: 0px) and (max-width: 880px){
            margin-bottom:60px;
           display:grid;
           grid-template-columns: repeat(1, 430px);
      @media screen and (min-width: 0px) and (max-width: 460px){
        margin:50px;
        grid-template-columns: repeat(1, 330px);}
     @media screen and (min-width: 0px) and (max-width: 370px){
        margin:79px;
        grid-template-columns: repeat(1, 270px);}}
           
    .divAcordion{
        grid-column: 1;
    }};
      
     .imgProduct{
        margin-top: 10%;
        margin-bottom: 20%;
        width: 380px;
        height: 520px;
     @media screen and (min-width: 0px) and (max-width: 880px){
        margin-top: 0%;
        margin-left: 20px;
        width: 200px;
        height: 320px;}};

/* CLASE DE EL COMPONENTE DE PRODUCT COMBOS */
      .imgCombos{
         position: absolute;
         width: 380px;
         height: 520px;
         @media screen and (min-width: 0px) and (max-width: 880px){
            margin-top: 160px;
            width: 225px;
            height: 296px;
            margin-left: 80px;
         }
      }
      .itemsCombo{
         margin-bottom: 80px;
        margin-top: 30px;
        margin-left: 250px;
        display: grid;
        grid-template-columns: repeat(2, 210px);
        grid-template-rows: repeat( auto);
        @media screen and (min-width: 0px) and (max-width: 1070px){
         margin-left:0px;
        display:grid;
        grid-template-columns: repeat(2, 240px);
        grid-template-rows: repeat( auto);}
     @media screen and (min-width: 0px) and (max-width: 880px){
        grid-column: 2;
        margin-left:-270px ;
        margin-bottom: 80px;
        margin-top: 70px;
        width: 300px;}
     @media screen and (min-width: 0px) and (max-width: 460px){
        grid-template-columns: repeat(2, 180px);
        grid-template-rows: repeat( auto);
        margin-left:-217px ;
        width: 100px;
        margin-top: 20px;}
     @media screen and (min-width: 0px) and (max-width: 370px){
        grid-template-columns: repeat(2, 160px);
        grid-template-rows: repeat( auto);
        margin-left:-185px;
        width: 100px;
        margin-top: 0px;}
      }




     .items{
        margin-bottom: 80px;
        margin-top: 30px;
        display: grid;
        grid-template-columns: repeat(3, 210px);
        grid-template-rows: repeat( auto);
     @media screen and (min-width: 0px) and (max-width: 1070px){
        display:grid;
        grid-template-columns: repeat(2, 240px);
        grid-template-rows: repeat( auto);}
     @media screen and (min-width: 0px) and (max-width: 880px){
        grid-column: 2;
        margin-left:-390px ;
        margin-bottom: 80px;
        margin-top: 70px;
        width: 300px;}
     @media screen and (min-width: 0px) and (max-width: 460px){
        grid-template-columns: repeat(2, 180px);
        grid-template-rows: repeat( auto);
        margin-left:-310px ;
        margin-top: 20px;}
     @media screen and (min-width: 0px) and (max-width: 370px){
        grid-template-columns: repeat(2, 160px);
        grid-template-rows: repeat( auto);
        margin-left:-265px;
        width: 100px;
        margin-top: 0px;}};

     .Presentation{
            margin-top: 15px;
            display: grid;
            grid-template-columns: repeat(3, 59px);
            grid-template-rows: repeat( auto);
        @media screen and (min-width: 0px) and (max-width: 460px){
            grid-template-columns: repeat(3, 55px);
            grid-template-rows: repeat( auto);}}

     .structureChecked{
        display: grid;
        grid-template-columns: repeat(1, 20px);
        grid-template-rows: repeat( auto);};
        
     label{
        cursor: pointer;};

     .check{
         margin-left: 9px;
         width: 15px;
         height: 15px;
         cursor: pointer;};

     .counter{
        width:120px;
        @media screen and (min-width: 0px) and (max-width: 415px){
        width: 115px;}}`;


export const TitleDescription= styled.h1`
        font-size: 2.4em;
        text-align: center;
        margin-bottom:50px;
        color: #3e4095;
    @media screen and (min-width: 0px) and (max-width: 880px){
        margin-bottom:550px;
        margin-top: -350px;}
    @media screen and (min-width: 0px) and (max-width: 460px){
        font-size: 1.9em;
        margin-top: -400px;}`;

export const TitleItems= styled.h1`
            font-size: 1.3em;
            color: #3e4095;`;

export const IconsBottles= styled.svg`
            width: 40px;
            height: 40px;
            margin-left: -6px;`;

export const ImgDescription= styled.img`
            position: absolute;
            width: 380px;
            height: 520px;      
         @media screen and (min-width: 0px) and (max-width: 880px){
            margin-top: 160px;
            width: 225px;
            height: 296px;
            margin-left: 80px;}`;

export const BtnDescription = styled.button`
       position: absolute;
       border:none;
       border-radius:10px ;
       color: white;
       transition: .3s;
       font-family:Arboria-Medium;
       background: #3e4095; 
       margin-bottom:50px;
       margin-top:-28px;
       margin-left: 120px;
       width: 154PX;
       height:33px;
       display: inline-block;
       font-size: 1.1em;
    @media screen and (min-width: 0px) and (max-width: 1070px){
        width: 100PX;
        height:28px;
        font-size: 0.9em;
        margin-bottom:30px;
        margin-top:20px;
        margin-left: 0px;
      }
    &:hover{
      color:white;
      background:#3e4095 ;
      box-shadow: 8px 8px rgb(198, 196, 225);
      transition: .3s;}`

export const BtnDescriptioncOMBOS = styled.button`
       position: absolute;
       border:none;
       border-radius:10px ;
       color: white;
       transition: .3s;
       font-family:Arboria-Medium;
       background: #3e4095; 
       margin-bottom:50px;
       margin-top:-48px;
       margin-left: 120px;
       width: 154PX;
       height:33px;
       display: inline-block;
       font-size: 1.1em;
    @media screen and (min-width: 0px) and (max-width: 1070px){
        width: 100PX;
        height:28px;
        font-size: 0.9em;
        margin-bottom:30px;
        margin-top:20px;
        margin-left: 0px;}
        @media screen and (min-width: 0px) and (max-width: 880px){
         width: 250PX;
         height:33px;
         margin-left: -77px;
         

      }

    &:hover{
      color:white;
      background:#3e4095 ;
      box-shadow: 8px 8px rgb(198, 196, 225);
      transition: .3s;}`

export const BtnCounter = styled.button`
  border:none;
  border-radius:100% ;
  color: white;
  font-family:Arboria-Medium;
  background: transparent;
  color: #3e4095;
  margin: 5px;
  width: 26PX;
  height:26px;
  font-size: 1.5em;
  @media screen and (min-width: 413px) and (max-width: 414px){
    margin:-2px;
   margin-bottom:18px;  }
  @media screen and (min-width: 0px) and (max-width: 500px){
   font-size: 1.3em;}
  `;
export const BtnCounterCOMBO = styled.button`
  border:none;
  border-radius:100% ;
  color: white;
  font-family:Arboria-Medium;
  background: transparent;
  color: #3e4095;
  margin: 5px;
  width: 26PX;
  height:26px;
  font-size: 1.5em;
  @media screen and (min-width: 0px) and (max-width: 500px){
   font-size: 1.3em;}
  `;
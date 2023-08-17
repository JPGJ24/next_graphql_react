import React from 'react'
import {
  DivContainer, DivLogo, DivText, ImgPackaging,
  ImgLogo, Text, Text1, 
} from '../../styles/Styles-Home/containerReuse.styles'
import { ContainerAnimation, LogoContainer } from '../../assets/Icons-SVG/Icons-Home/IconsPackaging';
import { useRouter } from 'next/router';
import { IReuse } from '../../interfaces/lContainerReuse';

const ContainerReuse = ({colors}:IReuse) => {
  const router = useRouter()
  const RefillBottles = () => {
    router.push("/refill-bottles")    
  }

  return (
    <DivContainer>
      {<div className={'Packaging'}>
        <DivLogo>
          <ImgPackaging >
            <ContainerAnimation 
            darkColor={`#${colors[0].darkColor}`} 
            lightColor={`#${colors[0].lightColor}`} />
          </ImgPackaging>

          <ImgLogo>
            <LogoContainer
             darkColor={`#${colors[0].darkColor}`} 
             lightColor={`#${colors[0].lightColor}`} />
          </ImgLogo>
        </DivLogo>

        <DivText>
        <style jsx>{`
              .span {
              color: ${`#${colors[0].darkColor}`};}
              .BtnEnvironment{
                background:${`#${colors[0].darkColor}`};
                color:${`#${colors[0].color}`};}
              .BtnEnvironment:hover{
                  color:${`#${colors[0].color}`};
                  background:${`#${colors[0].darkColor}`};
                  box-shadow: 10px 10px ${`#${colors[0].lightColor}`};}
         `}</style>
          <Text>Premiamos tu <span className='span'> COMPROMISO </span> con el medio ambiente.</Text>
          <Text1>Trae nuestros envases MONSI y obtén grandes beneficios.</Text1>
          <button className={'BtnEnvironment'} onClick={() => RefillBottles()}>Como participar</button>
        </DivText>
      </div>}
    </DivContainer>
  )
}
export default ContainerReuse
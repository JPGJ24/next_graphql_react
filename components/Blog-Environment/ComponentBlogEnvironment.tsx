import Image from 'next/image'
import React from 'react'
import ImgEcofriendlyimg from '../../assets/Img-App/Img-Blog-Environment/ecofriendlyimg.png'
import { ContainerBlog, SubTitleBlog, TitleBlog, TitleBlogh2 } from '../../styles/Styles-Blog-Environment/BlogEnvironment.styles'

const ComponentBlogEnvironment = () => {
  return (
    <ContainerBlog>
      <div className={'title'}>
        <TitleBlog>Comprometidos con</TitleBlog>
        <TitleBlogh2>el medio ambiente</TitleBlogh2>
          <SubTitleBlog >Para ayudar al medio ambiente y disminuir el cambio climático</SubTitleBlog>
          <SubTitleBlog className={'sub'}>nos sumamos a la lucha contra la contaminación ambiental.</SubTitleBlog>
    
        
      </div>

      <div className={'items'}>
         <Image className={'ImgEcoFriendly'} src={ImgEcofriendlyimg} alt={"img"} />
         <p>Gracias a la ardua investigación de nuestros empleados y el área encargada de formulación y desarrollo de productos MONSI, nos enfocamos en utilizar los mejores insumos del mercado, que sean amigables con el medio ambiente y así de esta manera influir positiva en nuestros clientes.<br/><br/> 
          Nuestros productos están compuestos por  tensoactivos que causen bajo impacto al medio ambiente, buscando que estos tengan, el mayor porcentaje de biodegradabilidad posible.<br/><br/>   
          Por otra parte nuestros productos no contienen fósforo, este es uno de los mayores contribuyentes a la eutrofización del ecosistema acuático lo cual produce efectos negativos en la demanda biológica  de oxígeno en el agua.<br/><br/>
          <span className={'span'}>Hecho por: Monsi 2022</span>
         </p>
      </div>
    </ContainerBlog>
  )
}

export default ComponentBlogEnvironment
import Image from 'next/image'
import React from 'react'
import ImgPQRS from '../../assets/Img-App/Img-PQRS/pqrs.png'
import { ContainerPQRs, TextPQRS, TitlePQRS } from '../../styles/Styles-PQRS/PQRS.styles'

const ComponentPQRS = () => {
  return (
    <ContainerPQRs>
        <div className={"box"}> 
              <form>
            <TitlePQRS>PQRS</TitlePQRS>
            <TextPQRS>Haznos saber tu petición, queja, reclamo o sugerencia, llenando los siguientes datos:</TextPQRS>
          
               <div className={"form__group field"}>
                           <input type="input" className={"form__input"} placeholder="Nombre Completo" />
                           <label  className={"form__label"}>Nombre Completo</label>
               </div>
               <div className={'grid'}>
	                     <div className={"form__group field"}>
                                    <select className={'select'}>
                                        <option value="0">Seleccione tipo de Documento</option>
                                        <option value="1">Cédula Ciudadanía</option>
                                        <option value="2">Cédula Extranjería</option>
                                        <option value="3">Pasaporte</option>
                                        <option value="4">NIT</option>
                                    </select>
	                     </div> 
                       <div className={"form__group field"}>
                                          <input type="number" className={"form__input"} placeholder="N° de Documento" />
                                          <label  className={"form__label"}>N° de Documento</label>
                         </div>
                </div>
                         <div className={"form__group field"}>
                                          <input type="number" className={"form__input"} placeholder="Teléfono" />
                                          <label  className={"form__label"}>Teléfono</label>
                         </div>
                         <div className={"form__group field"}>
                                          <input type="mail" className={"form__input"} placeholder="Correo Electrónico" />
                                          <label  className={"form__label"}>Correo Electrónico</label>
                         </div>
                   <div className={"form__group field"}>		
                           <textarea className={'text' }placeholder="¿Cuentanos Cual es tu PQRS?" required></textarea>

                   </div>
		         <button type="button" className={"btn"}>Enviar</button>
            </form>	
        </div>
        <Image className={'PQRSImg'} src={ImgPQRS} alt='pqrs'/>
    </ContainerPQRs>
  )
}

export default ComponentPQRS
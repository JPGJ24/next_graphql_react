import Image from 'next/image'
import React from 'react'
import { DivStart } from '../../../styles/Styles-Home/Styles-Icons/Styles.Start'
import  Spinner  from '../../Img-App/Img-Home/img-spinner/spinner.png'

const IconsStartLoading = () => {
  return (
    <DivStart>
        <Image className={'Start'} src={Spinner} alt='loanding'/>
    </DivStart>
  )
}

export default IconsStartLoading
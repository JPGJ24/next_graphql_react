import { useRouter } from 'next/router'
import React, { useState } from 'react'

const useOffers = () => {
const [event, setEvent] = useState()
const router = useRouter()

const handleClick = (e:any) => {
router.push(`/product-description/productCombos/#${e}`)
     return setEvent(e)
}


  return {
    setEvent ,
    event,
    handleClick,
    
	}
 }
 export default useOffers
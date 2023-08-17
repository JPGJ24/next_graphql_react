
import React, { useState } from 'react'

const useShoppingCart = () => {
  const [max, setMax] = useState(1);

  const increase = () => {
		setMax(max + 1)
		if (max === 99)
			return setMax(99)
	};

	const reduce = () => {
		setMax(max - 1)
		if (max === 0)
			return setMax(0)
	};
  return {
		max,
		increase,
		reduce
	}

}

export default useShoppingCart

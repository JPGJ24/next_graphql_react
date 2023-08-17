import { useState } from "react";
import { IPresentation, IProduct } from "../interfaces/IProduct";

export const useProduct = (product: IProduct) => {
	const [list, setList] = useState(product.presentations as IPresentation[]);

	const handleClick = (selected: string, e: any) => {
		if (e.target.checked) {	
			setList((prev: any) => prev.map((presentation: IPresentation) => {
				return {
					...presentation,
					isVisible: selected === presentation.name && e.target.checked
					
				}
			}))
		}
	};

	return {
		list,
		handleClick,
	}
}
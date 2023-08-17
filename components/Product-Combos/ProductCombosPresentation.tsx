import React from 'react';
import Accordion from 'react-bootstrap/Accordion';
import useShoppingCart from '../../hooks/useShoppingCart';
import { Anchor } from '../../styles/Styles-Home/ContactAdvisor.styles';
import { ContainerDescription, IconsBottles,  TitleDescription, BtnDescriptioncOMBOS, TitleItems,
BtnCounterCOMBO} from '../../styles/Styles-Product-Description/ProductDescription.styles';
import { useRouter } from 'next/router';
import { IPresentation_Combos, IProduct_Combos } from '../../interfaces/lProductCombos';

const ProductCombosPresentation = ({ products}:IProduct_Combos) => {
	const router = useRouter()
	const newEventUrlID = router.query.id
	const {max, increase, reduce } = useShoppingCart();
	const data = products.find((product:IPresentation_Combos) => product.id === newEventUrlID )

return (
	<>
      <ContainerDescription  key={data.id}>
			<div className={"imgProduct"}>
				<img className={'imgCombos'}

          			src={data.productsImages.edges[0].node.images.mediaItemUrl} 
          			alt={data.productsImages.edges[0].node.images.altText} />
			</div>
			<div className={'div'}>
				<div className={'divAcordion'}>
					<TitleDescription> {data.name}</TitleDescription>
					<Accordion defaultActiveKey="3">
						<Accordion.Item eventKey="0">
							<Accordion.Header>Descripción</Accordion.Header>
							<Accordion.Body>
								<div dangerouslySetInnerHTML={{__html: data.description }} />
							</Accordion.Body>
						</Accordion.Item>
						<Accordion.Item eventKey="2">
							<Accordion.Header>Condiciones de uso</Accordion.Header>
							<Accordion.Body>
							<div dangerouslySetInnerHTML={{__html: data.useConditions }} />
							</Accordion.Body>
						</Accordion.Item>
						<Accordion.Item eventKey="3">
							<Accordion.Header>Precauciones y Advertencias</Accordion.Header>
							<Accordion.Body>
								<div dangerouslySetInnerHTML={{__html: data.warnings }} />
							</Accordion.Body>
						</Accordion.Item>
					</Accordion>
				</div>
				<div className={'itemsCombo'}>
					<div className={'counter'}>
							<TitleItems>Cantidad:</TitleItems>
							<BtnCounterCOMBO onClick={reduce}>-</BtnCounterCOMBO>  {max}
							<BtnCounterCOMBO onClick={increase}>+</BtnCounterCOMBO>
						<div>
							<BtnDescriptioncOMBOS>
								<Anchor 
									href={"https://wa.me/573106237379?text=Hola,%20estoy interesado en comprar %20"+ max +"%20"+ data.name }
             						target="_blank">Cotizar
								</Anchor>
							</BtnDescriptioncOMBOS>
						</div>
					</div>
				</div>
			</div>
      </ContainerDescription>	
	</>
)
	
};
export default ProductCombosPresentation


import Accordion from 'react-bootstrap/Accordion';
import { useProduct } from "../../hooks/useProduct";
import useShoppingCart from '../../hooks/useShoppingCart';
import { IPresentation, IProduct } from "../../interfaces/IProduct";
import { Anchor } from '../../styles/Styles-Home/ContactAdvisor.styles';
import { ContainerDescription, IconsBottles,  TitleDescription, BtnDescription, TitleItems,
BtnCounter} from '../../styles/Styles-Product-Description/ProductDescription.styles';

const ProductDescription = (props: { product: IProduct }) => {
	const { product: {
		title,
		description,
		composition,
		useConditions,
		warnings
	} } = props;
	const { list, handleClick } = useProduct(props.product);
	const {max, increase, reduce } = useShoppingCart();

	return (
		<ContainerDescription>
			<div className={'imgProduct'}>
				{list && list.map((presentation: IPresentation, index: number) => presentation.isVisible && <presentation.component key={index} {...presentation.props} />)}
			</div>
			<div className={'div'}>
				<div className={'divAcordion'}>
					<TitleDescription>{title} MONSI</TitleDescription>
					<Accordion defaultActiveKey="0">
						<Accordion.Item eventKey="0">
							<Accordion.Header>Descripción</Accordion.Header>
							<Accordion.Body>
								{description}
							</Accordion.Body>
						</Accordion.Item>
						<Accordion.Item eventKey="1">
							<Accordion.Header>Composición</Accordion.Header>
							<Accordion.Body>
								{composition}
							</Accordion.Body>
						</Accordion.Item>
						<Accordion.Item eventKey="2">
							<Accordion.Header>Condiciones de uso</Accordion.Header>
							<Accordion.Body>
								{useConditions}
							</Accordion.Body>
						</Accordion.Item>
						<Accordion.Item eventKey="3">
							<Accordion.Header>Precauciones y Advertencias</Accordion.Header>
							<Accordion.Body>
								<div dangerouslySetInnerHTML={{__html: warnings }} />
							</Accordion.Body>
						</Accordion.Item>
					</Accordion>
				</div>

				<div className={'items'}>
					<div>
						<TitleItems>Presentación:</TitleItems>
						<div className={'Presentation'}>
							{list && list.map((presentation: IPresentation, index: number) =>
								<div className={'structureChecked'} key={`checkbox-${index}`}>
									<label>
										<IconsBottles>{presentation.image}</IconsBottles>
										{presentation.name}
										<input type="checkbox" className={'check'}
											value={presentation.name}
											onChange={(e) => handleClick(presentation.name, e)}
											checked={presentation.isVisible}
										/>
									</label>
								</div>
							)}
						</div>

					</div>
					

					<div className={'counter'}>
						<TitleItems>Cantidad:</TitleItems>
						<BtnCounter onClick={reduce}>-</BtnCounter>  {max}
						<BtnCounter onClick={increase}>+</BtnCounter>
						<div><BtnDescription>
							<Anchor href={"https://wa.me/573106237379?text=Hola,%20estoy interesado en comprar %20" + max +"%20" + list[0].name +'s' +"%20de%20" + props.product.title  }
              target="_blank">Cotizar</Anchor></BtnDescription></div>
						
					</div>

				</div>
			</div>
		</ContainerDescription>
	)
};
export default ProductDescription


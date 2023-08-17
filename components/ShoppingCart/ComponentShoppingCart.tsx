import { DeleteCart, Favorite } from '../../assets/Icons-SVG/Icons-Home/IconsNavbar'
import { BtnToPay, ContentItemSummary, ContentShoppingCart, TitleItems, TitleItemsPAY, SubTotal,Total } from '../../styles/styles-ShoppingCart/ItemSummary';
import { ContainerPay, ContentItemCard, DivAddProduct, Input, Sale, SaleTotal,  TitleProduct, TextProduct } from '../../styles/styles-ShoppingCart/ItemCard';
import CocinaImpecable from '../../assets/Img-App/Img-Home/img-Offers/lavaloza-offer.png'
import Visa from '../../assets/Img-App/Img-ShoppingCart/visa.png';
import MasterCard from '../../assets/Img-App/Img-ShoppingCart/mastercard.png';
import Maestro from '../../assets/Img-App/Img-ShoppingCart/maestro.png';
import PayPal from '../../assets/Img-App/Img-ShoppingCart/payPal.png';
import AmericanExpress from '../../assets/Img-App/Img-ShoppingCart/americanExpress.png';
import DinersClub from '../../assets/Img-App/Img-ShoppingCart/dinersClub.png';
import { BtnCounter } from '../../styles/Styles-Product-Description/ProductDescription.styles';
import useShoppingCart from '../../hooks/useShoppingCart';
import Image from 'next/image';


const ComponentShoppingCart = () => {
  const {max, increase, reduce } = useShoppingCart();

  return (
    <ContentShoppingCart>
      <ContentItemSummary>
      <div className={'SumarioDiv'} >
        <TitleItems>Sumario de artículos</TitleItems>
        <div className={'SumArticles'}>
          <label htmlFor="text" className={'all'}>
            <input type="checkbox" /> 
              Todo
             </label>
            <li>Artículo</li>
            <li>Precio</li>
            <li>Cantidad</li>
            <li>Total</li>  
        </div>
      </div>

      <div className={'DivSubtotal'}>
        <TitleItemsPAY>Resumen del pedido</TitleItemsPAY>
        <div className={'TotalArticles'}>
          <SubTotal>Subtotal:</SubTotal>
          <Total>$619.900</Total>
          <BtnToPay>Pagar ahora</BtnToPay>
        </div>
      </div>
   <ContentItemCard>
      <label htmlFor="text">
        <div className={'ProductSelect'}>
        <Input type="checkbox" />
        <Image className={'ImgProduct'} src={CocinaImpecable} alt="ProductMonsi" />
        <div className={'Description'}>
          <TitleProduct>COMBO Baños Relucientes</TitleProduct>
          <TextProduct>Galón Lavaloza + Galón Desengrasante
            + Galón Blanqueador + Limpiador multiusos 1 litro. Gratis</TextProduct>
        </div>
        <div className={'DivDefinition'}>Precio</div>
        <div className={'DivDefinition'}>Cantidad</div>
        <div className={'DivDefinition'}>Total</div>
        <Sale>$100.000</Sale>
        <div className={'StateIncrease'}>
          <BtnCounter onClick={reduce}>-</BtnCounter>
          {max}
          <BtnCounter onClick={increase}>+</BtnCounter>
        </div>
        <SaleTotal>$100.000</SaleTotal>
        <div className={'BtnIcons'}>
          <Favorite /> Guardar para más tarde &nbsp;&nbsp;<DeleteCart />
          
        </div>
        </div>
      </label>
      <DivAddProduct>
      <label htmlFor="text">
        <div className={'ProductSelect'}>
        <Input type="checkbox" />
        <Image className={'ImgProduct'} src={CocinaImpecable} alt="ProductMonsi" />
        <div className={'Description'}>
          <TitleProduct>COMBO Baños Relucientes</TitleProduct>
          <TextProduct>Galón Lavaloza + Galón Desengrasante
            + Galón Blanqueador + Limpiador multiusos 1 litro. Gratis</TextProduct>
        </div>
        <div className={'DivDefinition'}>Precio</div>
        <div className={'DivDefinition'}>Cantidad</div>
        <div className={'DivDefinition'}>Total</div>
        <Sale>$100.000</Sale>
        <div className={'StateIncrease'}>
          <BtnCounter onClick={reduce}>-</BtnCounter>
          {max}
          <BtnCounter onClick={increase}>+</BtnCounter>
        </div>
        <SaleTotal>$100.000</SaleTotal>
        <div className={'BtnIcons'}>
          <Favorite /> Guardar para más tarde &nbsp;&nbsp;<DeleteCart />
          
        </div>
        </div>
      </label>
      </DivAddProduct>
    </ContentItemCard>
   <ContainerPay>
      <h2 className={'TitlePay'}>Aceptamos</h2>
    <div className={'WayToPay'}>
        <Image className={'ImgPay'} src={Visa} alt="visa" />
        <Image className={'ImgPay'} src={MasterCard} alt="MasterCard" />
        <Image className={'ImgPay'} src={Maestro} alt="Maestro" />
        <Image className={'ImgPay'} src={PayPal} alt="PayPal" />
        <Image className={'ImgPay'} src={AmericanExpress} alt="AmericanExpress" />
        <Image className={'ImgPay'} src={DinersClub} alt="DinersClub" />
      </div>
    </ContainerPay>
    </ContentItemSummary>
    </ContentShoppingCart>
  )
}

export default ComponentShoppingCart
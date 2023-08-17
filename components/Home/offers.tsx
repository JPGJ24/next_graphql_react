import {
  BtnCard, TextCard, DivCard, SaleCard,
  DivCardSale, SaleCardThrough, Title, CardOffert,
} from '../../styles/Styles-Home/offers.styles';
import { IOffer, IOffers} from '../../interfaces/lOffers';
import Image from 'next/image';
import { useRouter } from 'next/router';

export default function Offers({ products }: IOffer) {
  const router = useRouter()
  const handleClick = (e:any) => {
    router.push(`/product-description/combos-presentation/${e}`)   
  }

  return (
  <>

    {products.map((product: IOffers) => (
      <CardOffert key={product.id}>
        <Image
          className={'ImgCards'}
          src={product.cover.mediaItemUrl} 
          alt={product.cover.altText}
          width={247}
          height={169} />
        <Title dangerouslySetInnerHTML={{ __html: product.name }}></Title>
        <TextCard dangerouslySetInnerHTML={{__html: product.description}} />
        {/* <DivCardSale>
              <SaleCard>$ 149,990 </SaleCard>
                <SaleCardThrough>$ 164,990 </SaleCardThrough>
               </DivCardSale> */}
        <DivCard>
          <BtnCard  onClick={() => {handleClick(product.id)}}>Ver Producto</BtnCard>
        </DivCard>
      </CardOffert>
    ))} 
  </>
  )
}





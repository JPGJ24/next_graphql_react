import React, {Suspense} from 'react';
import IconsStartLoading from '../assets/Icons-SVG/Icons-Home/IconsStartLoading';
import ContactAdvisor from '../components/Home/contactAdvisor';
import Environment from '../components/Home/environment';
import Footer from "../components/Home/footer"
import LineProduct from '../components/Home/LineProduct';
import Sample from '../components/Home/sample';
import Offers from '../components/Home/offers';
import ContainerReuse from '../components/Home/containerReuse';
import Banner from '../components/Home/Banner';
import NavbarMonsi from '../components/Home/navbar';
import { ContentMonsi, OffersColumns, TitleCard } from '../styles/Styles-Home/offers.styles';
import { CMS_WORDPRESS } from '../interfaces/lIndex';
import { useSession } from "next-auth/react";
import { getAllProducts } from '../lib/api/products';
import { getAllBanners } from '../lib/api/banners';
import { getAllHomeColors } from '../lib/api/colorContainerReuse';
import { getAllCoupons } from '../lib/api/coupon';
import { Coupon } from '../components/Home/discountCoupon';


export default function home({ products, banners, colors, coupons }: CMS_WORDPRESS) {
  return (
    <>
      <Suspense fallback={<IconsStartLoading />}>
        <NavbarMonsi />
        <Banner banners={banners} />
        <ContainerReuse colors={colors} />
        <ContentMonsi id='Offers'>
          <TitleCard>Ofertas</TitleCard>
          <OffersColumns>
            <Offers products={products} />
          </OffersColumns>
        </ContentMonsi>
        <LineProduct />
        <Environment />
        <Sample />
        <ContactAdvisor />
        <Footer />
      </Suspense>
      <Coupon coupons={coupons} />
    </>
  )
}

export async function getServerSideProps() {
  const products = await getAllProducts();
  const banners = await getAllBanners();
  const colors = await getAllHomeColors();
  const coupons = await getAllCoupons();

  return {
    props: {
      products,
      banners,
      colors,
      coupons
    }
  }
}




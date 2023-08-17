import React, {Suspense} from 'react';
import { Coupon } from "../components/Home/discountCoupon";
import { getAllCoupons } from '../lib/api/coupon';

export default function CouponComponent({ coupons }: any) {
  console.log(coupons)
  return (
    <>
      
    </>
  )
}

export async function getServerSideProps() {
  const coupons = await getAllCoupons();

  return {
    props: {
      coupons
    }
  }
}


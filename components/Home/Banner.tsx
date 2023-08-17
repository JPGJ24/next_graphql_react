import React from 'react';
import Carousel from 'react-bootstrap/Carousel';
import {DivContainer} from '../../styles/Styles-Home/banner.styles';
import Image from 'next/image';
import { IBanner, IBanners } from '../../interfaces/lBanner';


const Banner = ({banners}:IBanners ) => {
  return (
    <DivContainer >
      <Carousel fade>
        {banners && banners.map(({name, images}:IBanner) => (
          <Carousel.Item key={`carousel-${name}`}>
            <Image
              className={"ImgBanner"}
              src={images.sourceUrl}
              alt={images.altText}
              width={1920}
              height={620}/>
          </Carousel.Item>
        ))}
      </Carousel>
    </DivContainer>
  )
}

export default Banner
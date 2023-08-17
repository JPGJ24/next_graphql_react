interface IBanner {
    name:string;
    images:any;
    sourceUrl:string | number
    altText:string;
  }
interface IBanners {
    banners:any;
  }

  export type {
    IBanner,
    IBanners
  }

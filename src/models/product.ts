export default interface Product {
  id: number;
  imgSrc: string;
  description: string;
  category: string;
}

export interface HeaderProduct extends Product {
  path: string;
}

export interface CaseFull extends HeaderProduct {
  detailsMD: string;
}

export interface ProductFull extends Product {
  name: string;
  detailsMD: string;
  aboutSrc: [number, number];
}

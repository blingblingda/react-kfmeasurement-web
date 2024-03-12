export default interface Product {
  id: number;
  name?: string;
  imgSrc: string;
  description: string;
  category: string; 
  detailsMD?: string;
}

export interface HeaderProduct extends Product {
  path?: string;
}


export interface DetailProduct extends Product {
  slug: string;
}
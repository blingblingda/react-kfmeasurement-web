import productSeriesImg1 from "../../../assets/productSeries1.png";
import productSeriesImg2 from "../../../assets/productSeries2.png";
import productSeriesImg3 from "../../../assets/productSeries3.png";
import productSeriesImg4 from "../../../assets/productSeries4.png";
import productSeriesImg5 from "../../../assets/productSeries5.jpg";
import { HeaderProduct } from "../../../models/product";

const HeaderProductsList: HeaderProduct[] = [
  {
    id: 1,
    imgSrc: productSeriesImg1,
    description: "Surface density meter",
    category: "series_1",
    path: "/products",
  },
  {
    id: 2,
    imgSrc: productSeriesImg2,
    description: "Mining instrumentation",
    category: "series_2",
    path: "/products",
  },
  {
    id: 3,
    imgSrc: productSeriesImg3,
    description: "Power Supply System",
    category: "series_3",
    path: "/products",
  },
  {
    id: 4,
    imgSrc: productSeriesImg4,
    description: "Intelligent Products",
    category: "series_4",
    path: "/products",
  },
  {
    id: 5,
    imgSrc: productSeriesImg5,
    description: "All Products",
    category: "",
    path: "/products",
  },
];

export default HeaderProductsList;

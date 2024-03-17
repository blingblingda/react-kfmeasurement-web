import caseImg1 from "../../../assets/case1.png";
import caseImg2 from "../../../assets/case2.png";
import caseImg3 from "../../../assets/case3.png";
import caseImg4 from "../../../assets/case4.png";
import { HeaderProduct } from "../../../models/product";

const casesList: HeaderProduct[] = [
  {
    id: 1,
    imgSrc: caseImg1,
    description: "GuangWang pty ltd",
    category: "case_1",
    path: "",
  },
  {
    id: 2,
    imgSrc: caseImg2,
    description: "Jizhong Energy",
    category: "case_2",
    path: "",
  },
  {
    id: 3,
    imgSrc: caseImg3,
    description: "Huaibei Mining",
    category: "case_3",
    path: "",
  },
  {
    id: 4,
    imgSrc: caseImg4,
    description: "Yan Energy Group",
    category: "case_4",
    path: "",
  },
];

export default casesList;

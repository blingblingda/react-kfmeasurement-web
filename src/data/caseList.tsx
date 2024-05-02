import caseImg1 from "../assets/case1.png";
import caseImg2 from "../assets/case2.png";
import caseImg3 from "../assets/case3.png";
import caseImg4 from "../assets/case4.png";
import { CaseFull } from "../models/product";

const casesList: CaseFull[] = [
  {
    id: 1,
    imgSrc: caseImg1,
    description: "GuangWang pty ltd",
    category: "guangwang",
    path: "/guangwang",
    detailsMD: "/case1.md",
  },
  {
    id: 2,
    imgSrc: caseImg2,
    description: "Jizhong Energy",
    category: "jizhong",
    path: "/jizhong",
    detailsMD: "/case2.md",
  },
  {
    id: 3,
    imgSrc: caseImg3,
    description: "Huaibei Mining",
    category: "huaibei",
    path: "/huaibei",
    detailsMD: "/case3.md",
  },
  {
    id: 4,
    imgSrc: caseImg4,
    description: "Yan Energy Group",
    category: "yanenergy",
    path: "/yanenergy",
    detailsMD: "/case4.md",
  },
];

export default casesList;

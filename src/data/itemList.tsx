import P_01 from "../assets/products/p01.jpg";
import P_02 from "../assets/products/p02.png";
import P_03 from "../assets/products/p03.png";
import P_04 from "../assets/products/p04.jpg";
import P_05 from "../assets/products/p05.jpg";
import P_06 from "../assets/products/p06.jpg";
import P_07 from "../assets/products/p07.jpg";
import P_08 from "../assets/products/p08.jpg";
import P_09 from "../assets/products/p09.png";
import P_10 from "../assets/products/p10.png";
import P_11 from "../assets/products/p11.png";
import P_12 from "../assets/products/p12.png";
import P_13 from "../assets/products/p13.png";
import P_14 from "../assets/products/p14.png";
import P_15 from "../assets/products/p15.jpg";
import { ProductFull } from "../models/product";

const Items: ProductFull[] = [
  {
    id: 1,
    name: "Laser Beam Measurement Integrated Machine",
    description:
      "This product is used for detecting the coating density and thickness of battery cells",
    imgSrc: P_01,
    category: "New Energy Surface Density Measuring Instrument",
    detailsMD: "/item1.md",
    aboutSrc: [0, 1],
  },
  {
    id: 2,
    name: "X/β Ray Surface Density Meter",
    description:
      "For non-contact online detection of the areal density (mass per unit area) of lithium battery cathodes during coating",
    imgSrc: P_02,
    category: "New Energy Surface Density Measuring Instrument",
    detailsMD: "/item2.md",
    aboutSrc: [5, 3],
  },
  {
    id: 3,
    name: "β Ray Surface Density Meter",
    description:
      "For non-contact online detection of the areal density (weight per unit area) of the anode coating on lithium batteries",
    imgSrc: P_03,
    category: "New Energy Surface Density Measuring Instrument",
    detailsMD: "/item3.md",
    aboutSrc: [2, 4],
  },
  {
    id: 4,
    name: "VIS Intelligent Dry Separator",
    description: "Intelligent Online Coal Sorting System",
    imgSrc: P_04,
    category: "Mining Instruments and Meters",
    detailsMD: "/item4.md",
    aboutSrc: [3, 0],
  },
  {
    id: 5,
    name: "X-ray Online Ash Analyzer",
    description:
      "Coal ash exhibits varying attenuation absorption coefficients for X-rays",
    imgSrc: P_05,
    category: "Mining Instruments and Meters",
    detailsMD: "/item5.md",
    aboutSrc: [5, 2],
  },
  {
    id: 6,
    name: "Mining Electronic Belt Scale",
    description: "Next-Generation Bulk Material Dynamic Online Weighing System",
    imgSrc: P_06,
    category: "Mining Instruments and Meters",
    detailsMD: "/item6.md",
    aboutSrc: [1, 3],
  },
  {
    id: 7,
    name: "Explosion-Proof/Standard Ash Determinator",
    description: "Suitable for Rapid Measurement of Dynamic Coal Ash Content",
    imgSrc: P_07,
    category: "Mining Instruments and Meters",
    detailsMD: "/item7.md",
    aboutSrc: [5, 4],
  },
  {
    id: 8,
    name: "Intelligent Dynamic Measurement",
    description: "ICS-DW Dual Scale Frame Combination Belt Scale",
    imgSrc: P_08,
    category: "Mining Instruments and Meters",
    detailsMD: "/item8.md",
    aboutSrc: [1, 0],
  },
  {
    id: 9,
    name: "Mine Access Control System",
    description:
      "Access Control and Door Status Monitoring for Explosion-Proof Doors in Substation Buildings",
    imgSrc: P_09,
    category: "Mine Intelligent Power Supply System",
    detailsMD: "/item9.md",
    aboutSrc: [2, 4],
  },
  {
    id: 10,
    name: "Fiber Optic Temperature Sensing System",
    description: "Monitoring temperature in different environments",
    imgSrc: P_10,
    category: "Mine Intelligent Power Supply System",
    detailsMD: "/item10.md",
    aboutSrc: [0, 5],
  },
  {
    id: 11,
    name: "Electric Power Quality Monitoring System",
    description:
      "Improving Power Supply Quality and Ensuring Safe and Economic Operation of the Power System",
    imgSrc: P_11,
    category: "Mine Intelligent Power Supply System",
    detailsMD: "/item11.md",
    aboutSrc: [1, 3],
  },
  {
    id: 12,
    name: "Electrical Fire Monitoring System",
    description: "Early Prevention and Alarm of Electrical Fires",
    imgSrc: P_12,
    category: "Mine Intelligent Power Supply System",
    detailsMD: "/item12.md",
    aboutSrc: [5, 4],
  },
  {
    id: 13,
    name: "Conveyor Intelligent Speed Control System",
    description:
      "Enhanced the level of intelligence in the mines, achieving the goal of energy saving, consumption reduction, and safety efficiency.",
    imgSrc: P_13,
    category: "Mining Smart Products",
    detailsMD: "/item13.md",
    aboutSrc: [2, 3],
  },
  {
    id: 14,
    name: "EST series protection devices",
    description:
      "EST Series Protection Devices for Next-Generation Substation Integrated Automation System Software Platform",
    imgSrc: P_14,
    category: "Mining Smart Products",
    detailsMD: "/item14.md",
    aboutSrc: [3, 0],
  },
  {
    id: 15,
    name: "Remote Monitoring System",
    description: "Real-time monitoring of production data",
    imgSrc: P_15,
    category: "Mining Smart Products",
    detailsMD: "/item15.md",
    aboutSrc: [1, 5],
  },
];

export default Items;

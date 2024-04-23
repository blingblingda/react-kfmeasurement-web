import Strategy1 from "../../assets/Strategy1.jpeg";
import Strategy2 from "../../assets/Strategy2.jpg";
import PlateUI from "../UI/Plate/PlateUI";

const strategyList = [
  {
    title: "Measurement and Control",
    imgSrc: Strategy1,
    description:
      "The company's quality control sets an exemplary standard, emphasizing precision in measurement. Utilizing cutting-edge technology and rigorous processes, it ensures consistent product quality, adherence to specifications, and customer satisfaction.",
  },
  {
    title: "Accuracy and Reliability",
    imgSrc: Strategy2,
    description:
      "Through meticulous measurement practices and stringent checks, we ensure accuracy and consistently deliver products that meet or exceed industry standards, fostering trust and loyalty among customers.",
  },
];

const Strategy = () => {
  return (
    <div className="bg-light-grey py-4">
      {strategyList.map((item, index) => (
        <PlateUI
          title={item.title}
          imgSrc={item.imgSrc}
          description={item.description}
          isReverse={index % 2 !== 0}
        />
      ))}
    </div>
  );
};

export default Strategy;

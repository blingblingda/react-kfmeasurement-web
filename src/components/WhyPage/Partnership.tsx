// import { Carousel, Container, Stack } from "react-bootstrap";
// import LogoCard from "../UI/Card/LogoCard";
import logos from "../UI/ItemList/logoList";
import CarouselUI from "../UI/Carousel/CarouselUI";

// const Partnership = () => {
//   const groupSize = 3;
//   const groupRows = [];
//   for (let i = 0; i < logos.length; i += groupSize * 2) {
//     const row1 = logos.slice(i, i + groupSize);
//     const row2 = logos.slice(i + groupSize, i + groupSize * 2);
//     groupRows.push([row1, row2]);
//   }

//   return (
//     <>
//       <Container
//         className="py-5 my-3 text-dark-green bg-white text-center"
//         fluid
//       >
//         <h2 className="fs-2 pb-5">Partnership</h2>
//         <Carousel data-bs-theme="light" indicators={false}>
//           {groupRows.map((rows, index) => (
//             <Carousel.Item key={index}>
//               <Stack direction="vertical" gap={3}>
//                 {rows.map((row, rowIdx) => (
//                   <Stack
//                     key={rowIdx}
//                     direction="horizontal"
//                     gap={5}
//                     className="h-100 justify-content-center align-items-center"
//                   >
//                     {row.map((logo, logoIdx) => (
//                       <LogoCard key={logoIdx} logoSrc={logo} />
//                     ))}
//                   </Stack>
//                 ))}
//               </Stack>
//             </Carousel.Item>
//           ))}
//         </Carousel>
//       </Container>
//     </>
//   );
// };

const Partnership = () => {
  return (
    <CarouselUI
      items={logos}
      title="Partnership"
      imgWidth="15rem"
      imgHeight="10rem"
    />
  );
};

export default Partnership;

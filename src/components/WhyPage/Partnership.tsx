import { Carousel, Container, Stack } from "react-bootstrap";
import LogoCard from "../UI/Card/LogoCard";
import logo_1 from "../../assets/PartnerLogos/logo_1.jpg";
import logo_2 from "../../assets/PartnerLogos/logo_2.png";
import logo_3 from "../../assets/PartnerLogos/logo_3.jpeg";
import logo_4 from "../../assets/PartnerLogos/logo_4.jpg";
import logo_5 from "../../assets/PartnerLogos/logo_5.jpeg";
import logo_6 from "../../assets/PartnerLogos/logo_6.png";
import logo_7 from "../../assets/PartnerLogos/logo_7.png";
import logo_8 from "../../assets/PartnerLogos/logo_8.jpeg";
import logo_9 from "../../assets/PartnerLogos/logo_9.png";
import logo_10 from "../../assets/PartnerLogos/logo_10.jpeg";
import logo_11 from "../../assets/PartnerLogos/logo_11.png";
import logo_12 from "../../assets/PartnerLogos/logo_12.jpeg";
import logo_13 from "../../assets/PartnerLogos/logo_13.jpeg";
import logo_14 from "../../assets/PartnerLogos/logo_14.jpeg";
import logo_15 from "../../assets/PartnerLogos/logo_15.png";
import logo_16 from "../../assets/PartnerLogos/logo_16.png";
import logo_17 from "../../assets/PartnerLogos/logo_17.jpeg";
import logo_18 from "../../assets/PartnerLogos/logo_18.jpeg";
import logo_19 from "../../assets/PartnerLogos/logo_19.jpeg";
import logo_20 from "../../assets/PartnerLogos/logo_20.jpeg";

const logos = [
  logo_1,
  logo_2,
  logo_3,
  logo_4,
  logo_5,
  logo_6,
  logo_7,
  logo_8,
  logo_9,
  logo_10,
  logo_11,
  logo_12,
  logo_13,
  logo_14,
  logo_15,
  logo_16,
  logo_17,
  logo_18,
  logo_19,
  logo_20,
];

const Partnership = () => {
  const groupSize = 3;
  const groupRows = [];
  for (let i = 0; i < logos.length; i += groupSize * 2) {
    const row1 = logos.slice(i, i + groupSize);
    const row2 = logos.slice(i + groupSize, i + groupSize * 2);
    groupRows.push([row1, row2]);
  }

  return (
    <>
      <Container
        className="py-5 my-3 text-dark-green bg-white text-center"
        fluid
      >
        <h1 className="pb-5">Partnership</h1>
        <Carousel
          data-bs-theme="light"
          indicators={false}
        >
          {groupRows.map((rows, index) => (
            <Carousel.Item key={index}>
              <Stack direction="vertical" gap={3}>
                {rows.map((row, rowIdx) => (
                  <Stack
                    key={rowIdx}
                    direction="horizontal"
                    gap={5}
                    className="h-100 justify-content-center align-items-center"
                  >
                    {row.map((logo, logoIdx) => (
                      <LogoCard key={logoIdx} logoSrc={logo} />
                    ))}
                  </Stack>
                ))}
              </Stack>
            </Carousel.Item>
          ))}
        </Carousel>
      </Container>
    </>
  );
};

export default Partnership;

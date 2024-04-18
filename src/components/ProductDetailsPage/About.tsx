import { Container, Stack } from "react-bootstrap";
import AboutMainSection from "./AboutMainSection";

interface AboutProps {
  aboutSrc: [number, number];
}

const About = ({ aboutSrc }: AboutProps) => {
  return (
    <>
      <Stack direction="vertical" gap={1}>
        <AboutMainSection aboutSrc={aboutSrc} />
        <Container fluid className="text-center text-dark-green py-3">
          <h3 className="mb-5">What Our Clients Say</h3>
          <p>
            “KFCK products are impeccable in terms of technology, with excellent
            precision and efficiency, which is worthy of our full trust.”
          </p>
          <p>_____</p>
        </Container>
      </Stack>
    </>
  );
};
export default About;

import { useNavigate, useParams } from "react-router-dom";
import { Col, Container } from "react-bootstrap";
import Footer from "../Layout/Footer/Footer";
import Header from "../Layout/Header/Header";
import casesList from "../../data/caseList";
import { CaseFull } from "../../models/product";
import { useEffect, useState } from "react";
import ReactMarkdown from "react-markdown";

type caseNameParams = {
  caseName: string;
};

const CasePage = () => {
  const [content, setContent] = useState("");
  const navigate = useNavigate();
  const { caseName } = useParams<caseNameParams>();

  const caseItem: CaseFull | undefined = casesList.find(
    (item) => item.category === caseName
  );

  useEffect(() => {
    if (caseItem) {
      fetch(caseItem.detailsMD)
        .then((res) => res.text())
        .then((text) => {
          setContent(text);
        });
    } else {
      setContent("Case not found. Please try a different one.");
    }
  }, [caseItem]);

  const handleHomeClick: () => void = () => {
    navigate("/");
  };

  return (
    <>
      <Header />
      <main className="bg-light-grey pb-5">
        <Container className="px-0">
          <Col className="py-4 px-4 list-unstyled d-flex justify-content-start">
            <li className="path-text" onClick={handleHomeClick}>
              Home
            </li>
            <li className="li-before text-dark-green">
              {caseItem?.description}
            </li>
          </Col>
        </Container>
        <Container className="px-4">
          <ReactMarkdown children={content} />
        </Container>
      </main>
      <Footer />
    </>
  );
};

export default CasePage;

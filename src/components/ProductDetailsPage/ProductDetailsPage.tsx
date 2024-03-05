import { Col, Container } from "react-bootstrap";
import { useNavigate } from "react-router-dom";
import { useParams } from "react-router-dom";
import Footer from "../Layout/Footer/Footer";
import Header from "../Layout/Header/Header";
import Items from "../UI/ItemList/itemList";

const ProductDetailsPage = () => {
  let { productSlug } = useParams();
  const product = Items.filter((item) => item.slug === productSlug);
  const navigate = useNavigate();

  const handleHomeClick: () => void = () => {
    navigate("/");
  };
  const handleProductsClick: () => void = () => {
    navigate("/products");
  };

  return (
    <>
      <>
        <Header />
        <main className="bg-light-grey">
          <Container className="px-0">
            <Col className="py-4 list-unstyled d-flex justify-content-start">
              <li className="path-text" onClick={handleHomeClick}>
                Home
              </li>
              <li
                className=" li-before path-text"
                onClick={handleProductsClick}
              >
                Products
              </li>
              <li className="li-before text-dark-green">{product[0].name}</li>
            </Col>
          </Container>
          <Container>
            <h4>Display this product</h4>
            <div>{product[0].description}</div>
          </Container>
          <Container className="py-5">
            <small
              className="d-inline-block w-50 text-grey "
              style={{ lineHeight: "1.75" }}
            >
              Engineered for Australia's extreme summers & winters. Heat or cool
              your whole home or a single room with our range of climate
              solutions. Smart choice cooling. Leading warranties. Easy
              installation. Leading health features. Made to last. Types: split
              system air conditioning, multi air conditioning, ducted air
              conditioning, cassette air conditioning, window air conditioning,
              gas ducted heating, evaporative cooling
            </small>
          </Container>
        </main>
        <Footer />
      </>
    </>
  );
};

export default ProductDetailsPage;

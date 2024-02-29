import ProductCard from "../UI/Card/ProductCard";
import { Container, Row, Col } from "react-bootstrap";
import Items from "../UI/ItemList/itemList";
import Product from "../../models/product";

const products: Product[] = Items;

const chunkArray = (array: Product[], size: number) => {
  const chunkedArr = [];
  for (let i = 0; i < products.length; i += size) {
    chunkedArr.push(products.slice(i, i + size));
  }
  return chunkedArr;
};

const ProductList = () => {
  const rows: Product[][] = chunkArray(products, 3);

  return (
    <Container>
      {rows.map((row, rowIndex) => (
        <Row key={rowIndex} style={{ marginBottom: "20px" }}>
          {row.map((product) => (
            <Col key={product.id} sm={12} md={4} lg={4}>
              <ProductCard product={product} />
            </Col>
          ))}
        </Row>
      ))}
    </Container>
  );
};

export default ProductList;

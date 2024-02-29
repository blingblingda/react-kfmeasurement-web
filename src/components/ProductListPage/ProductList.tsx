// import { Col, Container, Stack } from "react-bootstrap";
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

// const ProductList = () => {
//   const groupSize = 4;
//   const groupProucts = [];
//   for (let i = 0; i < products.length; i = groupSize + i) {
//     groupProucts.push(products.slice(i, i + groupSize));
//   }
//   return (
//     <Container>
//       <Stack
//         direction="horizontal"
//         className="h-100 justify-content-center align-items-center"
//         gap={3}
//       >
//           {groupProucts.map((group) => (
//             <Col >
//               {group.map((item) => (
//                 <StarCard key={item.id} product={item}/>
//               ))}
//             </Col>
//           ))}
//       </Stack>
//     </Container>
//   );
// };

const ProductList = () => {
  const rows: Product[][] = chunkArray(products, 3);

  return (
    <Container>
      {rows.map((row, rowIndex) => (
        <Row key={rowIndex}>
          {row.map((product) => (
            <Col
              key={product.id}
              sm={12}
              md={4}
              lg={4}
              style={{ marginBottom: "20px" }}
            >
              <ProductCard product={product} />
            </Col>
          ))}
        </Row>
      ))}
    </Container>
  );
};

export default ProductList;

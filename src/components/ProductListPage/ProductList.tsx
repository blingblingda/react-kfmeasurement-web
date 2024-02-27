import { Col, Container, Stack } from "react-bootstrap";
import StarCard from "../UI/Card/StarCard";
import Items from "../UI/ItemList/itemList";

const products = Items;


const ProductList = () => {
  const groupSize = 4;
  const groupProucts = [];
  for (let i = 0; i < products.length; i = groupSize + i) {
    groupProucts.push(products.slice(i, i + groupSize));
  }
  return (
    <Container>
      <Stack
        direction="horizontal"
        className="h-100 justify-content-center align-items-center"
        gap={3}
      >
          {groupProucts.map((group) => (
            <Col >
              {group.map((item) => (
                <StarCard key={item.id} product={item}/>
              ))}            
            </Col>
          ))}
      </Stack>
    </Container>
  );
};

export default ProductList;

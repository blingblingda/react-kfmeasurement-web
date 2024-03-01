import Form from "react-bootstrap/Form";
import WebButton from "../UI/Button/WebButton";


interface ProductFilterProps {
  catSelect: (event: any) => void;
}

const ProductFilter = ({ catSelect }: ProductFilterProps) => {

  return (
    <>
      <aside
        className="text-white sticky-top bg-danger mx-3 rounded"
        style={{ top: "90px" }}
      >
        <h5>Find Your Products</h5>
        <Form>
          {["series_1", "series_2", "series_3", "series_4"].map((category) => (
            <div key={`${category}`} className="mb-3">
              <Form.Check
                type="radio"
                name="category"
                id={`${category}`}
                label={`${category}`}
                onChange={catSelect}
              />
            </div>
          ))}
        </Form>
      </aside>
    </>
  );
};
export default ProductFilter;

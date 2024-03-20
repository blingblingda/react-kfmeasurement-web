import Form from "react-bootstrap/Form";

interface ProductFilterProps {
  selectedCategories: string[];
  catSelect: (event: any) => void;
}

const ProductFilter = ({
  catSelect,
  selectedCategories,
}: ProductFilterProps) => {
  return (
    <>
      <aside
        className="text-dark-green sticky-top bg-snow-white mx-3 mt-3 py-2 px-3 rounded"
        style={{ top: "90px" }}
      >
        <h5 className="py-3">Find Your Products</h5>
        <Form>
          {[
            "New Energy Surface Density Measuring Instrument",
            "Mining Instruments and Meters",
            "Mine Intelligent Power Supply System",
            "Mining Smart Products",
          ].map((category) => (
            <div key={`${category}`} className="mb-3">
              <Form.Check
                type="checkbox"
                name="category"
                id={`${category}`}
                label={`${category}`}
                checked={selectedCategories.includes(category)}
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

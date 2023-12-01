import { Link } from "react-router-dom";

const Product = ({ product }) => {
  return (
    <Link to={`/products/${product.id}`}>
      <p>{product.title}</p>
    </Link>
  );
};

export { Product };

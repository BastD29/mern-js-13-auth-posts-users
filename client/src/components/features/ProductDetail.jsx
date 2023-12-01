import { useNavigate, useParams } from "react-router";
import { useGetProductByIdQuery } from "../../store/products/apiSlice";

const ProductDetail = () => {
  const navigate = useNavigate();
  const { id } = useParams();

  const { data: product, error, isLoading } = useGetProductByIdQuery(id);

  if (isLoading) return <p>Loading...</p>;
  if (error) return <p>Error occurred</p>;

  return (
    <>
      <button onClick={() => navigate("/products")}>{"<<< Products"}</button>
      {product && (
        <div>
          <h1>{product.title}</h1>
          <p>{product.description}</p>
        </div>
      )}
    </>
  );
};

export { ProductDetail };

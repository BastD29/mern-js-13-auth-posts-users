import { useGetProductsQuery } from "../../store/products/apiSlice";
import { Product } from "./Product";

const Products = () => {
  const { data: products, error, isLoading } = useGetProductsQuery();

  console.log("products:", products);
  console.log("type of products:", typeof products);

  if (isLoading) return <p>Loading...</p>;
  if (error) return <p>Error occurred</p>;

  return (
    <>
      <h1>Products</h1>
      <ul>
        {products.map((product) => (
          <Product product={product} key={product.id} />
        ))}
      </ul>
    </>
  );
};

export { Products };

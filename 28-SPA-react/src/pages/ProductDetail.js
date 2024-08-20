import { useParams } from "react-router-dom";

function ProductDetailPage() {
  const params = useParams().productId;

  return (
    <>
      <h1>Product Detail</h1>
      <p>{params}</p>
    </>
  );
}

export default ProductDetailPage;

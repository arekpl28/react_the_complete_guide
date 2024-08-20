import { Link, useParams } from "react-router-dom";

function ProductDetailPage() {
  const params = useParams().productId;

  return (
    <>
      <h1>Product Detail</h1>
      <p>{params}</p>
      <p>
        <Link to=".." relative="path">
          Back
        </Link>
      </p>
    </>
  );
}

export default ProductDetailPage;

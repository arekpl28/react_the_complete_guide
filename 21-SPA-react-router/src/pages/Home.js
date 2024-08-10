import { Link } from "react-router-dom";

function HomePage() {
  return (
    <>
      <h1>My home page</h1>
      <p>
        <Link to="/products">Products</Link>
      </p>
    </>
  );
}

export default HomePage;

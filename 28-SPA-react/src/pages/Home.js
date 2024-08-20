import { Link, useNavigate } from "react-router-dom";

function HomePage() {
  const navigate = useNavigate();

  function navigateButton() {
    navigate("/products");
  }

  return (
    <>
      <h1>Home</h1>
      <p>
        Go to <Link to="/products">he list of products</Link>
      </p>
      <button onClick={navigateButton}>Go to Products</button>
    </>
  );
}

export default HomePage;

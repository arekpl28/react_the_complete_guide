import { useNavigate } from "react-router-dom";

function HomePage() {
  const navigate = useNavigate();

  function navigateHandle() {
    navigate("/products");
  }

  return (
    <>
      <h1>My home page</h1>
      <button onClick={navigateHandle}>Navigate</button>
    </>
  );
}

export default HomePage;

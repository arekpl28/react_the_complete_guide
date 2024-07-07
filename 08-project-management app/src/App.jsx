import { useState } from "react";
import NewProject from "./components/NewProject";
import ProjectsSidebar from "./components/ProjectsSidebar";
import NoProjectSelected from "./components/NoProjectSelected";

function App() {
  const [active, setActive] = useState(false);
  function handleClick() {
    setActive(true);
  }
  return (
    <main className="h-screen my-8 flex gap-8">
      <ProjectsSidebar onClick={handleClick} />
      {active ? <NewProject /> : <NoProjectSelected onClick={handleClick} />}
    </main>
  );
}

export default App;

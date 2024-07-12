import { useState } from "react";

function Quiz() {
  const [activeQuestion, setActiveQuestion] = useState(0);
  const [userAnswers, setUserAnswers] = useState([]);

  return <p>Currently active Question</p>;
}

export default Quiz;

import { useState } from "react";

export default function Player() {
  const [enteredPlayerName, setEnteredPlayerName] = useState("");
  const [submitted, setSubmitted] = useState(false);
  function handleChange(event) {
    setSubmitted(false);
    setEnteredPlayerName(event.target.value);
  }
  function handleClick() {
    setSubmitted(!submitted);
  }
  return (
    <section id="player">
      <h2>Welcome {submitted ? enteredPlayerName : "enknown entity"}</h2>
      <p>
        <input
          type="text"
          value={enteredPlayerName}
          onChange={(e) => handleChange(e)}
        />
        <button onClick={handleClick}>Set Name</button>
      </p>
    </section>
  );
}

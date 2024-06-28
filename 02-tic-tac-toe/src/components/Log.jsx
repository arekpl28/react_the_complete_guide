function Log({ turns }) {
  return (
    <ol id="log">
      <h2>Game Log</h2>
      <ol>
        {turns.map((turn, index) => (
          <li key={index}>
            {`Player ${turn.player} placed on row ${turn.square.row + 1}, col ${
              turn.square.col + 1
            }`}
          </li>
        ))}
      </ol>
    </ol>
  );
}

export default Log;

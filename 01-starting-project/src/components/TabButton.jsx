export default function TabButton(props) {
  function handleClick() {
    console.log("dziala");
  }
  return (
    <li>
      <button onClick={handleClick}>{props.children}</button>
    </li>
  );
}

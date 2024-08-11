import { Link } from "react-router-dom";

const DUMMY_EVENTS = [
  { id: "e1", title: "Some event" },
  { id: "e2", title: "Another event" },
];

function EventsPage() {
  return (
    <>
      <h1>EventsPage</h1>
      <ul>
        {DUMMY_EVENTS.map((item) => (
          <li key={item.id}>
            <Link to={item.id}>{item.title}</Link>
          </li>
        ))}
      </ul>
    </>
  );
}

export default EventsPage;

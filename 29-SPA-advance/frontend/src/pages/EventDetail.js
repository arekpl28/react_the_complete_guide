import { useParams } from "react-router-dom";

function EventDetailPage() {
  const params = useParams().eventId;
  return (
    <>
      <h1>EventDetail</h1>
      <p>{params}</p>
    </>
  );
}

export default EventDetailPage;

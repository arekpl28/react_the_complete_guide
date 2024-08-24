import { useLoaderData } from "react-router-dom";

import EventsList from "../components/EventsList";

function EventsPage() {
  const data = useLoaderData();

  // if (data.isError) {
  //   return <p>{data.message}</p>;
  // }

  const { events } = data;

  return <EventsList events={events} />;
}

export default EventsPage;

export async function loader() {
  const response = await fetch("http://localhost:8080/events");

  if (!response.ok) {
    //  return { isError: true, message: "Failed to fetch events" };
    throw new Response(JSON.stringify({ message: "Failed to fetch events" }), {
      status: 500,
    });
  } else {
    return response;
  }
}

import { eventDetails } from "@/app/types/event";

const backend = process.env.NEXT_PUBLIC_HOST;
const eventUrl = "/api/events";

async function getEvents(): Promise<eventDetails[]> {
  const response = await fetch(`${backend}${eventUrl}`, {
    method: "GET",
    headers: {
      "Content-Type": "application/json",
    },
  });

  const data = await response.json();

  return data;
}

async function getEventById(id: number): Promise<eventDetails> {
  const response = await fetch(`${backend}${eventUrl}/${id}`, {
    method: "GET",
    headers: {
      "Content-Type": "application/json",
    },
  });

  const data = await response.json();

  return data;
}

async function filterEvents(id: number): Promise<eventDetails[]> {
  const response = await fetch(`${backend}${eventUrl}/filter/${id}`, {
    method: "GET",
    headers: {
      "Content-Type": "application/json",
    },
  });

  return [...await response.json()];
}

const Events = {
  getEvents,
  getEventById,
  filterEvents
};

export default Events;

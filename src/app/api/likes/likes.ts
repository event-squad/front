import { EventLiked } from "@/app/types/event";
import backendUrl from "../backend";

const likeUrl = "/api/likes";

async function getLikes(token: string): Promise<EventLiked[]> {
  const response = await fetch(`${backendUrl}${likeUrl}`, {
    method: "GET",
    headers: {
      "Content-Type": "application/json",
      Authorization: `Bearer ${token}`,
    },
  });

  return await response.json();
}

async function dislikeEvent(token: string, eventId: number) {
  await fetch(`${backendUrl}${likeUrl}/${eventId}`, {
    method: "DELETE",
    headers: {
      "Content-Type": "application/json",
      Authorization: `Bearer ${token}`,
    },
  });
}

async function likeEvent(token: string, eventId: number) {
  const response = await fetch(`${backendUrl}${likeUrl}`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      Authorization: `Bearer ${token}`,
    },
    body: JSON.stringify({ eventId }),
  });
}

async function getLikedEvents(token: string) {
  const response = await fetch(`${backendUrl}${likeUrl}/detailed`, {
    method: "GET",
    headers: {
      "Content-Type": "application/json",
      Authorization: `Bearer ${token}`,
    },
  });

  return await response.json();
}

const Like = {
  getLikes,
  dislikeEvent,
  likeEvent,
  getLikedEvents
};

export default Like;

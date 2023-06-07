import { EventLiked } from "@/app/types/event";
import backendUrl from "../backend";

const likesUrl = "/api/likes";

async function getLikes(token: string): Promise<EventLiked[]> {
  const response = await fetch(`${backendUrl}${likesUrl}`, {
    method: "GET",
    headers: {
      "Content-Type": "application/json",
      Authorization: `Bearer ${token}`,
    },
  });

  return await response.json();
}

async function likeEvent(token: string, eventId: number) {
  await fetch(`${backendUrl}${likesUrl}`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      Authorization: `Bearer ${token}`,
    },
    body: JSON.stringify({ eventId }),
  });
}

async function dislikeEvent(token: string, eventId: number) {
  await fetch(`${backendUrl}${likesUrl}/${eventId}`, {
    method: "DELETE",
    headers: {
      "Content-Type": "application/json",
      Authorization: `Bearer ${token}`,
    },
  });
}

const Like = {
  getLikes,
  likeEvent,
  dislikeEvent,
};

export default Like;

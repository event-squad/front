const backend = process.env.NEXT_PUBLIC_HOST;

function getEvents() {
  const response = fetch(`${backend}/api/events`, {
    method: "GET",
    headers: {
      "Content-Type": "application/json",
    },
  });
  
  return response;
}

const Events = {
 getEvents
};

export default Events;

import eventMockData from "./eventMockData";

export function getEventData(id: string) {

    const event = eventMockData.filter((i) => i.id === Number(id));
    return event[0];
    
}

export default function EventPage({ params }: { params: { id: string } }) {

    const event = getEventData(params.id);


    return (
    <div>
        {!event && <p>Evento não encontrado</p>}
        {event && event.name}
    </div>
    )
}
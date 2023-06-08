export type eventDetails = {
 id: number;
 name: string;
 description: string;
 status: number | Date;
 endDate: Date;
 price: string;
 city: string;
 state: string;
 createdAt: Date;
 startDate: Date;
 updatedAt: Date;
}

export type EventLiked = {
 id: number;
 userId: number;
 eventId: number;
}

export type EventLikedDetails = {
 id: number;
 userId: number;
 name: string;
 description: string;
 status: number | Date;
 endDate: Date;
 price: string;
 city: string;
 state: string;
 createdAt: Date;
 startDate: Date;
 updatedAt: Date;
}
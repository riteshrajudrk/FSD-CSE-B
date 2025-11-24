import React from "react";
import { Link } from "react-router-dom";
import BookmarkButton from "./BookmarkButton";
import RemindButton from "./RemindButton";
import "./EventCard.css";

export default function EventCard({ event }) {
  const start = new Date(event.startDate).toLocaleDateString();
  const end = event.endDate ? new Date(event.endDate).toLocaleDateString() : null;
  return (
    <div className="event-card card">
      <div className="event-top row">
        <div>
          <h3 className="event-title"><Link to={`/events/${event._id}`} className="link">{event.title}</Link></h3>
          <div className="small">{start}{end ? ` — ${end}` : ""} · {event.location?.type || "online"}</div>
        </div>
        <div className="actions col">
          <BookmarkButton eventId={event._id} />
          <RemindButton eventId={event._id} />
        </div>
      </div>
      <p className="desc small">{event.shortSummary || (event.description && event.description.slice(0,160) + "...")}</p>
      <div className="tags row">
        {(event.tags || []).slice(0,4).map((t)=> <span className="tag" key={t}>#{t}</span>)}
      </div>
    </div>
  );
}

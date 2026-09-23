import { CalendarDays, Clock, MapPin } from "lucide-react";
import "./EventCard.css";

function EventCard({ event }) {
  return (
    <article className="event-card">
      <div className="event-date">
        <span>{event.month}</span>
        <strong>{event.day}</strong>
      </div>

      <div className="event-content">
        <span className="event-category">{event.category}</span>

        <h3>{event.title}</h3>

        <p>{event.description}</p>

        <div className="event-details">
          <span>
            <CalendarDays size={15} />
            {event.date}
          </span>

          <span>
            <Clock size={15} />
            {event.time}
          </span>

          <span>
            <MapPin size={15} />
            {event.location}
          </span>
        </div>
      </div>
    </article>
  );
}

export default EventCard;
import EventCard from "./EventCard";
import "./Events.css";

const events = [
  {
    title: "Annual Sports Day",
    category: "Sports",
    day: "18",
    month: "Oct",
    date: "October 18, 2026",
    time: "9:00 AM – 2:00 PM",
    location: "School Playground",
    description:
      "A fun-filled day of games, races, teamwork, and joyful activities for our young learners.",
  },
  {
    title: "Children's Art Exhibition",
    category: "Creative",
    day: "07",
    month: "Nov",
    date: "November 7, 2026",
    time: "10:00 AM – 1:00 PM",
    location: "School Hall",
    description:
      "Come and celebrate the creativity of our children as they showcase their artwork and classroom projects.",
  },
  {
    title: "Parents & Teachers Meet",
    category: "School",
    day: "21",
    month: "Nov",
    date: "November 21, 2026",
    time: "11:00 AM – 1:00 PM",
    location: "School Auditorium",
    description:
      "An opportunity for parents and teachers to connect, discuss children's progress, and share ideas.",
  },
  {
    title: "Winter Fun Day",
    category: "Celebration",
    day: "12",
    month: "Dec",
    date: "December 12, 2026",
    time: "10:00 AM – 3:00 PM",
    location: "School Campus",
    description:
      "A cheerful school celebration filled with games, music, activities, food, and wonderful memories.",
  },
];

function Events() {
  return (
    <section className="events-section" id="events">
      <div className="events-container">

        <div className="section-heading">
          <span className="section-tag">
            SCHOOL EVENTS
          </span>

          <h2>
            Moments That Make
            <span>School Special</span>
          </h2>

          <p>
            From celebrations and sports to creative activities and
            parent gatherings, there is always something exciting
            happening at our school.
          </p>
        </div>

        <div className="events-grid">
          {events.map((event) => (
            <EventCard
              key={`${event.title}-${event.date}`}
              event={event}
            />
          ))}
        </div>

      </div>
    </section>
  );
}

export default Events;
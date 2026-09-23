import ProgramCard from "./ProgramCard";
import "./Programs.css";

const programs = [
  {
    name: "Play Group",
    age: "Age 2–3",
    description:
      "A warm and playful first step where children develop social, emotional, and communication skills.",
    focus: "Play • Social Skills • Discovery",
  },
  {
    name: "Nursery",
    age: "Age 3–4",
    description:
      "Children learn through hands-on activities, stories, music, art, and meaningful everyday experiences.",
    focus: "Language • Creativity • Independence",
  },
  {
    name: "LKG",
    age: "Age 4–5",
    description:
      "A foundation program that builds early literacy, numeracy, motor skills, and curiosity.",
    focus: "Literacy • Numbers • Exploration",
  },
  {
    name: "UKG",
    age: "Age 5–6",
    description:
      "Children strengthen their academic foundations while developing confidence and problem-solving skills.",
    focus: "Reading • Writing • Thinking",
  },
  {
    name: "Grade 1",
    age: "Age 6–7",
    description:
      "A balanced learning experience combining academics, creativity, collaboration, and practical activities.",
    focus: "Foundation • Creativity • Confidence",
  },
  {
    name: "Grade 2",
    age: "Age 7–8",
    description:
      "Students expand their knowledge through interactive lessons, projects, reading, and discovery.",
    focus: "Knowledge • Projects • Collaboration",
  },
  {
    name: "Grade 3",
    age: "Age 8–9",
    description:
      "Students develop deeper understanding, independent thinking, communication, and leadership skills.",
    focus: "Critical Thinking • Leadership • Learning",
  },
];

function Programs() {
  return (
    <section className="programs-section" id="programs">

      <div className="section-container">

        <div className="section-heading">

          <span className="section-tag">
            OUR PROGRAMS
          </span>

          <h2>
            Learning for Every
            <span>Stage of Childhood</span>
          </h2>

          <p>
            Our programs are designed to help children learn naturally,
            develop confidence, and build strong foundations for the
            years ahead.
          </p>

        </div>

        <div className="programs-grid">
          {programs.map((program) => (
            <ProgramCard
              key={program.name}
              program={program}
            />
          ))}
        </div>

      </div>

    </section>
  );
}

export default Programs;
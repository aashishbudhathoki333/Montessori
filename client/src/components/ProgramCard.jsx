import {
  Baby,
  Palette,
  BookOpen,
  Sparkles,
  Pencil,
  Calculator,
  GraduationCap,
} from "lucide-react";
import "./ProgramCard.css";

const icons = {
  "Play Group": Baby,
  Nursery: Palette,
  LKG: BookOpen,
  UKG: Sparkles,
  "Grade 1": Pencil,
  "Grade 2": Calculator,
  "Grade 3": GraduationCap,
};

function ProgramCard({ program }) {
  const Icon = icons[program.name] || GraduationCap;

  return (
    <article className="program-card">

      <div className="program-icon">
        <Icon size={28} />
      </div>

      <span className="program-age">
        {program.age}
      </span>

      <h3>{program.name}</h3>

      <p>{program.description}</p>

      <div className="program-footer">
        <span>{program.focus}</span>
      </div>

    </article>
  );
}

export default ProgramCard;
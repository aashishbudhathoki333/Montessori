import {
  Heart,
  ShieldCheck,
  Lightbulb,
  Users,
} from "lucide-react";
import "./About.css";

const features = [
  {
    icon: Heart,
    title: "Child-Centered Learning",
    description:
      "We respect every child's individual pace, interests, abilities, and learning journey.",
  },
  {
    icon: ShieldCheck,
    title: "Safe & Caring Environment",
    description:
      "Children learn and grow in a welcoming environment where their safety and wellbeing matter.",
  },
  {
    icon: Lightbulb,
    title: "Learning Through Discovery",
    description:
      "Hands-on activities encourage children to explore, question, experiment, and think independently.",
  },
  {
    icon: Users,
    title: "Experienced Educators",
    description:
      "Our teachers guide children with patience, care, encouragement, and thoughtful instruction.",
  },
];

function About() {
  return (
    <>
      <section className="about-section" id="about">
        <div className="about-container">

          <div className="about-visual">
            <div className="about-image">
              <span>🏫</span>

              <div className="about-image-label">
                <strong>Growing Together</strong>
                <span>Since 2015</span>
              </div>
            </div>

            <div className="about-floating-card">
              <span>🌱</span>

              <div>
                <strong>Every child matters</strong>
                <small>Every child can shine.</small>
              </div>
            </div>
          </div>

          <div className="about-content">

            <span className="section-tag">
              ABOUT OUR SCHOOL
            </span>

            <h2>
              A Place Where
              <span>Children Love to Learn</span>
            </h2>

            <p>
              We believe that early childhood is a beautiful journey
              of discovery. Our school provides children with a warm,
              engaging, and supportive environment where they can
              learn naturally through exploration and meaningful
              experiences.
            </p>

            <p>
              From their first classroom experiences to Grade 3,
              we help children develop strong academic foundations,
              confidence, creativity, independence, and respect for
              others.
            </p>

            <div className="about-values">
              <div>
                <strong>Our Mission</strong>
                <span>
                  To nurture curious, confident, and compassionate
                  learners.
                </span>
              </div>

              <div>
                <strong>Our Vision</strong>
                <span>
                  To create a joyful foundation for lifelong learning.
                </span>
              </div>
            </div>

          </div>

        </div>
      </section>

      <section className="why-section">
        <div className="why-container">

          <div className="section-heading">

            <span className="section-tag">
              WHY CHOOSE US
            </span>

            <h2>
              Growing Minds.
              <span>Building Futures.</span>
            </h2>

            <p>
              We combine care, creativity, and meaningful learning
              experiences to give every child a strong beginning.
            </p>

          </div>

          <div className="features-grid">
            {features.map((feature) => {
              const Icon = feature.icon;

              return (
                <div className="feature-card" key={feature.title}>

                  <div className="feature-icon">
                    <Icon size={26} />
                  </div>

                  <h3>{feature.title}</h3>

                  <p>{feature.description}</p>

                </div>
              );
            })}
          </div>

        </div>
      </section>
    </>
  );
}

export default About;
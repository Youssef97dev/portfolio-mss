// Style
import "./resume.scss";

// Components
import { Card } from "../../components";

// Data
import { DataResume } from "../../data/Data";

const Resume = () => {
  return (
    <section className="resume container section" id="resume">
      <h2 className="section__title">Resume</h2>

      <div className="resume__container grid">
        <div className="timeline grid">
          {DataResume.map((item, index) => {
            if (item.category === "education") {
              return (
                <Card
                  key={index}
                  icon={item.icon}
                  title={item.title}
                  year={item.year}
                  description={item.desc}
                />
              );
            }
          })}
        </div>

        <div className="timeline grid">
          {DataResume.map((item, index) => {
            if (item.category === "experience") {
              return (
                <Card
                  key={index}
                  icon={item.icon}
                  title={item.title}
                  year={item.year}
                  description={item.desc}
                />
              );
            }
          })}
        </div>
      </div>
    </section>
  );
};

export default Resume;

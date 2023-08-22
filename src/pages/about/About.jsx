// Style
import "./about.scss";

const About = () => {
  return (
    <section className="about container section" id="about">
      <h2 className="section__title">About Me</h2>
      <div className="about__container grid">
        <div className="about__data grid">
          <div className="about__info">
            <p className="about__description">
              Hello and welcome to my portfolio! I'm a Fullstack developer who's
              really into ReactJS and NodeJS. I love everything about the
              digital world and always enjoy learning about new technologies.
              I've worked on a bunch of different projects, which has helped me
              get really good at what I do. I'm great at working with a team,
              and I can learn new things super fast, which makes me a perfect
              fit for all kinds of projects. Have a look through my portfolio to
              see all the cool stuff I've been a part of!
            </p>
            <a
              href="https://drive.google.com/file/d/1_c66xWwdQNg2Gl4spaYal75zXIF5vWj9/view"
              target="_blank"
              rel="noreferrer"
              className="btn"
            >
              Download CV
            </a>
          </div>

          <div className="about__skills grid">
            <div className="skills__data">
              <div className="skills__titles">
                <h3 className="skills__name">Javascript</h3>
                <span className="skills__number">70%</span>
              </div>

              <div className="skills__bar">
                <span className="skills__percentage javascript"></span>
              </div>
            </div>

            <div className="skills__data">
              <div className="skills__titles">
                <h3 className="skills__name">ReactJs</h3>
                <span className="skills__number">80%</span>
              </div>

              <div className="skills__bar">
                <span className="skills__percentage reactjs"></span>
              </div>
            </div>

            <div className="skills__data">
              <div className="skills__titles">
                <h3 className="skills__name">Redux | Context API | Hooks</h3>
                <span className="skills__number ">70%</span>
              </div>

              <div className="skills__bar">
                <span className="skills__percentage redux"></span>
              </div>
            </div>

            <div className="skills__data">
              <div className="skills__titles">
                <h3 className="skills__name">NodeJs | ExpressJS | MongoDB</h3>
                <span className="skills__number ">80%</span>
              </div>

              <div className="skills__bar">
                <span className="skills__percentage expressjs"></span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;

// Style
import "./home.scss";
import Me from "../../assets/Me.PNG";

// Components
import { HeaderSocials, ScrollDown, Shapes } from "../../components";

const Home = () => {
  return (
    <section className="home container" id="home">
      <div className="intro">
        <img src={Me} alt="" className="home__img" />
        <h1 className="home__name">Youssef Moussafi</h1>
        <span className="home__status">I'm a Fullstack developer</span>
        <HeaderSocials />
        <a
          href="https://drive.google.com/file/d/1_c66xWwdQNg2Gl4spaYal75zXIF5vWj9/view"
          target="_blank"
          rel="noreferrer"
          className="btn"
        >
          Download CV
        </a>
        <ScrollDown />
      </div>
      <Shapes />
    </section>
  );
};

export default Home;

// Style
import "./portfolio.scss";

// Data
import { Work } from "../../data/Data";

const Portfolio = () => {
  return (
    <section className="work container section" id="portfolio">
      <h2 className="section__title">Recent Works</h2>
      <div className="work__container grid">
        {Work.map((item) => {
          const { id, image, title, url, github } = item;
          return (
            <div className="work__card" key={id}>
              <div className="work__thumbnail">
                <img src={image} alt="" className="work__img" />
                <div className="work__mask"></div>
              </div>

              <h3 className="work__title">{title}</h3>
              <div className="work__links">
                <a
                  href={url}
                  target="_blank"
                  rel="noreferrer"
                  className="work__button"
                >
                  <i className="icon-link work__button-icon"></i>
                </a>
                <a
                  href={github}
                  target="_blank"
                  rel="noreferrer"
                  className="work__button"
                >
                  <i class="fa-brands fa-github work__button-icon"></i>
                </a>
              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
};

export default Portfolio;

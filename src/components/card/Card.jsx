const Card = ({ icon, title, year, description }) => {
  return (
    <div className="timeline__item">
      <i className={icon}></i>
      <span className="timeline__date">{year}</span>
      <h3 className="timeline__title">{title}</h3>
      <p className="timeline__text">{description}</p>
    </div>
  );
};

export default Card;

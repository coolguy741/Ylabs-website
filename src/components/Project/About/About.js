import styles from './About.module.css';

export const About = ({ title, description, logoUrl, cards }) => {
  return (
    <div className={styles.About}>
      <div className={styles.Main}>
        <div className={styles.Content}>
          <h1 className="deskTitleMedium">{title}</h1>
          <p className="deskTitleSmall">
            {description.map((data, key) => (
              <p key={key}>{data}</p>
            ))}
          </p>
        </div>
        <div className={styles.IconContainer}>
          <img className={styles.Icon} src={logoUrl} alt="Arufabudo Image" />
        </div>
      </div>
      <div className={`${styles.Cards} horizontalScrollbar`}>
        {cards.map((card, key) => (
          <div className={`${styles.Card} forbidSelection`} key={key}>
            <h2 className="deskTitleSmall">{card.title}</h2>
            <p className="deskTextRegular">{card.description}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

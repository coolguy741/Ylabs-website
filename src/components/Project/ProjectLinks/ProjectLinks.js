import styles from './ProjectLinks.module.css';

export const ProjectLinks = ({ projectLinks }) => {
  console.log('Debug: Planifai', projectLinks.linkText);
  return (
    <div className={styles.Container}>
      {projectLinks.map((projectLink, key) => {
        return (
          <div className={styles.Item} key={key}>
            <a
              className={`${
                projectLink.linkName === 'Planifai'
                  ? styles.Planifai
                  : projectLink.linkName === 'Rapidcoder'
                  ? styles.Rapidcoder
                  : styles.Arufabudo
              } navigationLinkComponentStyles`}
            >
              <div className={`${styles.Text} deskTextRegular`}>
                {projectLink.linkText}
              </div>
              <div className={styles.Logo}></div>
              <img
                className={styles.Image}
                src={projectLink.imageSrc}
                alt={projectLink.imageAlt}
              />
            </a>
          </div>
        );
      })}
    </div>
  );
};

import styles from './MileStones.module.css';

export const MileStones = ({ milestones }) => {
  return (
    <div className={styles.MileStones}>
      <div className={styles.Container}>
        <div className={styles.Main}>
          <h1 className={`${styles.Title} deskTitleBig`}>Milestones</h1>
          <div className={styles.Events}>
            {milestones.map((milestone, key) => {
              return (
                <div className={styles.Event} key={key}>
                  <div className={`${styles.Date} deskTextRegular`}>{milestone.date}</div>
                  <div className={`${styles.Content} deskTitleSmall`}>
                    {milestone.title}
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </div>
  );
};

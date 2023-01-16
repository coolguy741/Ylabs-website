import styles from './LinkContainer.module.css';

export const LinkContainer = ({ website }) => {
  return (
    <div className={styles.LinkContainer}>
      <a href={`https://${website}`} class={`${styles.Title} deskTitleBig`}>
        {website}
      </a>
    </div>
  );
};

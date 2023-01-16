import styles from './LinkContainer.module.css';

export const LinkContainer = ({ url }) => {
  return (
    <div className={styles.LinkContainer}>
      <a href={url} class={`${styles.Title} deskTitleBig`}>
        {url}
      </a>
    </div>
  );
};

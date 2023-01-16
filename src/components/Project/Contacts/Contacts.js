import styles from './Contacts.module.css';

export const Contacts = () => {
  return (
    <div className={styles.Container}>
      <address className={styles.Main}>
        <div className={`${styles.Address} deskTitleSmall`}>
          Headquartered in Switzerland, Ylabs is situated in a melting pot of innovation
          and creativity.
        </div>
        <div className={`${styles.Contacts} deskTitleBig`}>
          <a
            className={styles.Email}
            href="mailto:Hello@ylabs.swiss"
            aria-label="company-email"
          >
            hello@ylabs.swiss
          </a>
          <a
            className={styles.Phone}
            href="tel:41415000705"
            aria-label="company-phone-number"
          >
            +41 41 520 06 70
          </a>
        </div>
        <div className={styles.SocialMedias}>
          <a
            className={styles.Linkedin}
            href="https://linkedin.com/company/ylabs-gmbh/"
          ></a>
        </div>
        <div className="deskTextRegular">© 2022 by Ylabs</div>
        <a href="https://ylabs-cyber-security.web.app/" className={styles.Logo}></a>
      </address>
    </div>
  );
};

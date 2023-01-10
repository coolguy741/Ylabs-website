import { Footer } from 'components/Footer';
import { Meta } from 'components/Meta';
import styles from './Details.module.css';

export const Details = () => {
  return (
    <div className={styles.home}>
      <Meta title="" description="Ylabs website" />
      <div>Details</div>
      <Footer />
    </div>
  );
};

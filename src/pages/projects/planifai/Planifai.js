import { Footer } from 'components/Footer';
import { Meta } from 'components/Meta';
import styles from './Planifai.module.css';

export const Planifai = () => {
  return (
    <div className={styles.Planifai}>
      <Meta title="" description="Ylabs website" />
      <div>Planifai</div>
      <Footer />
    </div>
  );
};

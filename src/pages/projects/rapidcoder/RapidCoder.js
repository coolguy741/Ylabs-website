import { Footer } from 'components/Footer';
import { Meta } from 'components/Meta';
import styles from './RapidCoder.module.css';

export const RapidCoder = () => {
  return (
    <div className={styles.RapidCoder}>
      <Meta title="" description="Ylabs website" />
      <div>Editing now</div>
      <Footer />
    </div>
  );
};

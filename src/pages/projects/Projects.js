import { Footer } from 'components/Footer';
import { Meta } from 'components/Meta';
import styles from './Projects.module.css';
import { ImageSlider } from 'components/ImageSlider';

export const Projects = () => {
  return (
    <div className={styles.projects}>
      <Meta title="" description="Ylabs website" />
      <ImageSlider />
      <Footer />
    </div>
  );
};

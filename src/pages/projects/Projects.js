import { Meta } from 'components/Meta';
import styles from './Projects.module.css';
import { ImageSlider } from 'components/ImageSlider';
import { slidesData } from './ProjectsData';

export const Projects = () => {
  return (
    <div className={styles.projects}>
      <Meta title="" description="Ylabs website" />
      <ImageSlider slidesData={slidesData} first />
    </div>
  );
};

import { Meta } from 'components/Meta';
import styles from './Projects.module.css';
import { ProjectSlider } from 'components/ProjectSlider';
import { slidesData } from './ProjectsData';

export const Projects = () => {
  return (
    <div className={styles.projects}>
      <Meta title="" description="Ylabs website" />
      <ProjectSlider slidesData={slidesData} first />
    </div>
  );
};

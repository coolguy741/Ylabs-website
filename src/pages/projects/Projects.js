import { Meta } from 'components/Meta';
import styles from './Projects.module.css';
import { ProjectSlider } from 'components/ProjectSlider';

const slidesData = [
  {
    image: '/images/arufabudo/arufa_thumb_project.jpg',
    title: 'Arufabudo',
    meta: 'Premium, ready-made and custom-made boxing gear',
    path: '/projects/arufabudo',
  },
  {
    image: '/images/planify/image4.jpg',
    title: 'Planifai',
    meta: 'Comprehensive Business plan for 300$',
    path: '/projects/planifai',
  },
  {
    image: '/images/rapidcoder/image5.jpg',
    title: 'Rapidcoder',
    meta: 'Advance computer science courses',
    path: '/projects/rapidcoder',
  },
];

export const Projects = () => {
  return (
    <div className={styles.projects}>
      <Meta title="" description="Ylabs website" />
      <ProjectSlider slidesData={slidesData} first />
    </div>
  );
};

import { Footer } from 'components/Footer';
import { Meta } from 'components/Meta';
import { Intro } from 'pages/projects/Intro';
import styles from './Projects.module.css';

export const Projects = () => {
  return (
    <div className={styles.home}>
      <Meta title="" description="Ylabs website" />
      <Intro
        id="intro"
        description1="We transform our startup ideas into market-ready entities."
        description2="Since 2017, we have been conceptualizing, developing, and directing revolutionary businesses. We dare to attempt what hasn’t been attempted before, embrace the unknown, and have a great time doing so."
      />
      <Footer />
    </div>
  );
};

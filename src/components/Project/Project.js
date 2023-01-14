import styles from './Project.module.css';
import { HeadingImage } from './HeadingImage';
import { About } from './About';
import { ImageSlider } from './ImageSlider';
import { MileStones } from './MileStones';
import { LinkContainer } from './LinkContainer';
import { Contacts } from './Contacts';

export const Project = ({ arufabudoData }) => {
  console.log('arufabudoData', arufabudoData);
  return (
    <div className={styles.Project}>
      <HeadingImage src={arufabudoData.headingImage} />
      <About
        icon={arufabudoData.about.icon}
        title={arufabudoData.about.title}
        description={arufabudoData.about.description}
        cards={arufabudoData.about.cards}
      />
      <ImageSlider images={arufabudoData.images} />
      <MileStones milestones={arufabudoData.milestones} />
      <LinkContainer url={arufabudoData.url} />
      <Contacts />
    </div>
  );
};

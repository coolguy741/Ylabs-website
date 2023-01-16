import styles from './Project.module.css';
import { HeadingImage } from './HeadingImage';
import { About } from './About';
import { ImageSlider } from './ImageSlider';
import { MileStones } from './MileStones';
import { LinkContainer } from './LinkContainer';
import { Contacts } from './Contacts';
import { Services } from './Services';

export const Project = ({ arufabudoData }) => {
  console.log('Debug: arufabudoData', arufabudoData);
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
      <Services services={arufabudoData.services} />
      <MileStones milestones={arufabudoData.milestones} />
      <LinkContainer url={arufabudoData.url} />
      <Contacts />
    </div>
  );
};

import styles from './Project.module.css';
import { HeaderImage } from './HeaderImage';
import { About } from './About';
import { ImageSlider } from './ImageSlider';
import { MileStones } from './MileStones';
import { LinkContainer } from './LinkContainer';
import { Contacts } from './Contacts';
import { Services } from './Services';
import { ProjectLinks } from './ProjectLinks';

export const Project = ({ arufabudoData }) => {
  console.log('Debug: arufabudoData', arufabudoData);
  return (
    <div className={styles.Project}>
      <HeaderImage
        src={arufabudoData.headerImage.src}
        alt={arufabudoData.headerImage.alt}
      />
      <About
        logoUrl={arufabudoData.about.logoUrl}
        title={arufabudoData.about.title}
        description={arufabudoData.about.description}
        cards={arufabudoData.about.cards}
      />
      <ImageSlider images={arufabudoData.images} />
      <Services services={arufabudoData.services} />
      <MileStones milestones={arufabudoData.milestones} />
      <LinkContainer website={arufabudoData.website} />
      <ProjectLinks projectLinks={arufabudoData.projectLinks} />
      <Contacts />
    </div>
  );
};

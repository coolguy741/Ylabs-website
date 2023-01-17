import styles from './Project.module.css';
import { HeaderImage } from './HeaderImage';
import { About } from './About';
import { ImageSlider } from './ImageSlider';
import { MileStones } from './MileStones';
import { LinkContainer } from './LinkContainer';
import { Contacts } from './Contacts';
import { Services } from './Services';
import { ProjectLinks } from './ProjectLinks';

export const Project = ({ data }) => {
  return (
    <div className={styles.Project}>
      <HeaderImage src={data.headerImage.src} alt={data.headerImage.alt} />
      <About
        logoUrl={data.about.logoUrl}
        title={data.about.title}
        description={data.about.description}
        cards={data.about.cards}
      />
      <ImageSlider images={data.images} />
      <Services services={data.services} />
      <MileStones milestones={data.milestones} />
      <LinkContainer website={data.website} />
      <ProjectLinks projectLinks={data.projectLinks} />
      <Contacts />
    </div>
  );
};

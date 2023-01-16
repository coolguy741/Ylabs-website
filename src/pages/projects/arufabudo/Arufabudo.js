// import { Project } from 'components/Project';
import styles from './Arufabudo.module.css';
import { Project } from 'components/Project';

const ArufabudoData = {
  headerImage: {
    src: '/images/arufabudo/arufa_thumb_project.jpg',
    alt: 'arufa-gloves',
  },
  about: {
    title: 'Arufabudo is a manufacturer and seller of premium boxing gear.',
    logoUrl: '/logo/logo-word-arufabudo.png',
    description: [
      'Our product line will consist of goods including boxing gloves, clothing, and accessories. Arufabudo gear will be available in both, ready-made and custom-made designs. Arufabudo gear will be available in both, ready-made and custom-made designs.',
    ],
    cards: [
      {
        title: 'Warriorship',
        description:
          'True boxers and combat sportsmen fit the ‘warrior’ label perfectly. The discipline, resilience, and honor they possess are all attributes we want our customers to exude when representing Arufabudo.',
      },
      {
        title: 'Unity',
        description:
          'Our products are symbolic of the interconnected community we are building. On the surface, people see high-quality boxing gear. However, at our core, we are a family of diverse individuals who strive to become the best versions of themselves.',
      },
      {
        title: 'Personalization',
        description:
          'All Arufabudo products are customizable with affixable patches containing scannable individual IDs. Our customers can own a piece of history, knowing that their glove, garment, or accessory is one of a kind.',
      },
    ],
  },
  images: [
    {
      image: '../../../../assets/images/arufabudo/arufabudo_boxing_gloves.jpg',
      thumbImage: '../../../../assets/images/arufabudo/arufabudo_boxing_gloves.jpg',
    },
    {
      image: '../../../../assets/images/arufabudo/arufabudo_instagram_teaser.jpeg',
      thumbImage: '../../../../assets/images/arufabudo/arufabudo_instagram_teaser.jpeg',
    },
    {
      image: '../../../../assets/images/arufabudo/arufabudo_instagram_teaser_2.jpeg',
      thumbImage: '../../../../assets/images/arufabudo/arufabudo_instagram_teaser_2.jpeg',
    },
    {
      image: '../../../../assets/images/arufabudo/arufabudo_boxingbag.jpeg',
      thumbImage: '../../../../assets/images/arufabudo/arufabudo_boxingbag.jpeg',
    },
    {
      image: '../../../../assets/images/arufabudo/arufabudo_stage_teaser.jpeg',
      thumbImage: '../../../../assets/images/arufabudo/arufabudo_stage_teaser.jpeg',
    },
  ],
  milestones: [
    {
      date: 'January 2022',
      title: 'Project launch',
    },
    {
      date: 'July 2022',
      title: 'Development of Boxing Glove',
    },
    {
      date: 'July 2022',
      title: 'Design Collection-lineup',
    },
  ],
  services: [
    {
      title: 'Blockchain-infused boxing',
      description:
        'We are integrating blockchain technology into customizable patches that are able to be affixed on Arufabudo’s gloves, apparel, and accessories. Every patch will contain a unique ID that distinguishes it from other patches. As a result, all custom-made products are non-replicable.',
    },
    {
      title: 'Fighting with purpose',
      description:
        'Living in a time where the state of our environment is critical, we are making a conscious effort to do our part in creating a sustainable future for all. For each purchase of Arufabudo gear, a tree will be planted. Additionally, we have managed to utilize fewer layers of leather in the production of our boxing gloves to not only improve performance but be more eco-friendly.',
    },
  ],
  website: 'Website will soon be available.',
  projectLinks: [
    {
      linkName: 'Planifai',
      linkText: 'Planifai. Comprehensive Business plan for 300$',
      imageSrc: '/images/planify/tablet-phone.png',
      imageAlt: 'tablet-phone.png',
      logoSrc: 'url("/logo/planifai_mark.png")',
    },
    {
      linkName: 'Rapidcoder',
      linkText: 'Rapidcoder. Advance computer science courses',
      imageSrc: '/images/rapidcoder/PCOnTable.png',
      imageAlt: 'PCOnTable.png',
      logoSrc: 'url("/logo/rapidcoder_mark.png")',
    },
  ],
};

export const Arufabudo = () => {
  return <Project arufabudoData={ArufabudoData} />;
};

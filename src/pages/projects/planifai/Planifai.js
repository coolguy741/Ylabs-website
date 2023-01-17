import { Footer } from 'components/Footer';
import { Meta } from 'components/Meta';
import styles from './Planifai.module.css';
import { Project } from 'components/Project';

const PlanifaiData = {
  headerImage: {
    src: '/images/planify/phoneWithContent.jpg',
    alt: 'planifai-phone',
  },
  about: {
    title:
      'PlanifAi is an AI-powered platform that creates comprehensive business plans in a matter of minutes.',
    description: [
      'Our product is an in-house developed extension of the deep-learning software GTP-3.',
      'The platform will operate in the format of a web application. Ultimately, we want to provide opportunity and direction for all aspiring entrepreneurs and business owners across the world',
    ],
    logoUrl: '/logo/logo-word/logo-word-planifai.png',
    cards: [
      {
        title: 'Privacy',
        description:
          'When planning a startup business, it is always safer to keep your cards to your chest. What better way to keep your project under wraps than an ‘invisible’ and portable business consultant?',
      },
      {
        title: 'Accessibility',
        description:
          'Creating a business plan is a process that requires flexibility and adaptability. Our platform enables users to make changes to their business plans on the go - it can be accessed from any location via mobile, tablet, or computer.',
      },
      {
        title: 'Logicality',
        description:
          'The platform is programmed to allow users to create their business plans as simply and efficiently as possible. Our in-house extension of GTP-3 continuously undergoes extensive deep-learning in order to provide surefire business plans for businesses in a wide range of industries.',
      },
    ],
  },
  images: [
    {
      image: '/images/planify/image1.jpg',
      thumbImage: '/images/planify/image1.jpg',
    },
    {
      image: '/images/planify/image2.jpg',
      thumbImage: '/images/planify/image2.jpg',
    },
    {
      image: '/images/planify/image3.jpg',
      thumbImage: '/images/planify/image3.jpg',
    },
    {
      image: '/images/planify/image4.jpg',
      thumbImage: '/images/planify/image4.jpg',
    },
    {
      image: '/images/planify/image5.jpg',
      thumbImage: '/images/planify/image5.jpg',
    },
    {
      image: '/images/planify/image6.jpg',
      thumbImage: '/images/planify/image6.jpg',
    },
    {
      image: '/images/planify/image7.jpg',
      thumbImage: '/images/planify/image7.jpg',
    },
  ],
  services: [
    {
      title: 'Unchartered waters',
      description:
        'Every year, 305 million startups are registered. Among the millions of startups, AI-based businesses rank first in popularity. On the other hand, the AI business consulting space is a blue ocean. We are on track to go live in a market that we can pioneer but also go live in a broader industry that is booming.',
    },
    {
      title: 'The full-spectrum',
      description:
        'Traditional business consultants specialize in a particular industry or group of related-industries. The in-house extension of the GTP-3 software our team has developed is revolutionary - PlanifAi will be able to provide actionable and comprehensive business plans for all industries.',
    },
  ],
  showAdditionalText: false,
  milestones: [
    {
      date: 'May - July 2022',
      title: 'Conception, initiation, and planning',
    },
    {
      date: 'August - November 2022',
      title: 'Core development',
    },
    {
      date: 'November - January 2022',
      title: 'UX/UI development',
    },
  ],
  website: 'Website will soon be available.',
  projectLinks: [
    {
      linkName: 'Arufabudo',
      linkText: 'Arufabudo. Premium, ready-made and custom-made boxing gear',
      imageSrc: '/images/arufabudo/arufabudo_thumbnail.jpeg',
      imageAlt: 'gloves.png',
      logoSrc: 'url("/logo/rapidcoder_mark.png")',
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
      image: '/images/arufabudo/arufabudo_boxing_gloves.jpg',
      thumbImage: '/images/arufabudo/arufabudo_boxing_gloves.jpg',
    },
    {
      image: '/images/arufabudo/arufabudo_instagram_teaser.jpeg',
      thumbImage: '/images/arufabudo/arufabudo_instagram_teaser.jpeg',
    },
    {
      image: '/images/arufabudo/arufabudo_instagram_teaser_2.jpeg',
      thumbImage: '/images/arufabudo/arufabudo_instagram_teaser_2.jpeg',
    },
    {
      image: '/images/arufabudo/arufabudo_boxingbag.jpeg',
      thumbImage: '/images/arufabudo/arufabudo_boxingbag.jpeg',
    },
    {
      image: '/images/arufabudo/arufabudo_stage_teaser.jpeg',
      thumbImage: '/images/arufabudo/arufabudo_stage_teaser.jpeg',
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

export const Planifai = () => {
  // return <Project data={PlanifaiData} />;
  return <div>Editing now</div>;
};

import { useEffect, useRef } from 'react';
import React from 'react';
import { Showcase } from './lib/Showcase';
import { Slides } from './lib/Slides';
import styles from './ImageSlider.module.css';

const slidesData = [
  {
    image: '/images/1.jpg',
    title: 'Segovia',
    meta: 'Spain / Castile and León',
  },
  {
    image: '/images/2.jpg',
    title: 'Barcelona',
    meta: 'Spain / Catalonia',
  },
  {
    image: '/images/3.jpg',
    title: 'Málaga',
    meta: 'Spain / Andalusia',
  },
  {
    image: '/images/4.jpg',
    title: 'Pamplona',
    meta: 'Spain / Navarre',
  },
  {
    image: '/images/5.jpg',
    title: 'Bilbao',
    meta: 'Spain / Biscay',
  },
];

export const ImageSlider = ({ data }) => {
  const ref = useRef();

  useEffect(() => {
    const slides = new Slides(slidesData);
    const showcase = new Showcase(slidesData, {
      onActiveIndexChange: activeIndex => {
        slides.onActiveIndexChange(activeIndex);
      },
      onIndexChange: index => {
        slides.onMove(index);
      },
      onZoomOutStart: ({ activeIndex }) => {
        slides.appear();
      },
      onZoomOutFinish: ({ activeIndex }) => {},
      onFullscreenStart: ({ activeIndex }) => {
        slides.disperse(activeIndex);
      },
      onFullscreenFinish: ({ activeIndex }) => {},
    });

    showcase.mount(ref.current);
    slides.mount(ref.current);
    showcase.render();

    window.addEventListener('resize', function () {
      showcase.onResize();
    });

    window.addEventListener('mousemove', function (ev) {
      showcase.onMouseMove(ev);
    });

    console.log('Debug: useEffect');
  }, []);

  return <div className={styles.ImageSlider} ref={ref} />;
};

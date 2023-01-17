import { useEffect, useRef } from 'react';
import React from 'react';
import { Showcase } from './lib/Showcase';
import { Slides } from './lib/Slides';
import styles from './ProjectSlider.module.css';

export const ProjectSlider = ({ slidesData }) => {
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
  }, []);

  return <div className={styles.ProjectSlider} ref={ref} />;
};

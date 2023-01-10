import { Meta } from 'components/Meta';
import { Intro } from 'pages/Home/Intro';
import styles from './Home.module.css';
import { useRouter } from 'next/router';
import React from 'react';

export const Home = () => {
  const intervalRef = React.useRef(null);
  const router = useRouter();

  const onMouseDown = () => {
    console.log('Debug: ', 'downMouse');
    intervalRef.current = setInterval(() => {
      nextPage();
    }, 1000);
  };

  const onMouseUp = () => {
    console.log('Debug: ', 'upMouse');
    if (intervalRef.current) {
      clearInterval(intervalRef.current);
      intervalRef.current = null;
    }
  };

  const nextPage = () => {
    if (intervalRef.current) {
      console.log('Debug: ', 'nextPage');
      clearInterval(intervalRef.current);
      intervalRef.current = null;
      router.push('/projects');
    }
  };

  return (
    <div className={styles.home} onMouseDown={onMouseDown} onMouseUp={onMouseUp}>
      <Meta title="" description="Ylabs website" />
      <Intro
        id="intro"
        description1="We transform our startup ideas into market-ready entities."
        description2="Since 2017, we have been conceptualizing, developing, and directing revolutionary businesses. We dare to attempt what hasn’t been attempted before, embrace the unknown, and have a great time doing so."
      />
    </div>
  );
};

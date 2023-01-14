import styles from './HeadingImage.module.css';
import Image from 'next/image';

export const HeadingImage = ({ src }) => {
  return <img src={src} alt="Arufabudo Picture" layout="fill" />;
};

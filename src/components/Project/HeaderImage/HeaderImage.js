import styles from './HeaderImage.module.css';
import Image from 'next/image';

export const HeaderImage = ({ src, alt }) => {
  return <img src={src} alt={alt} layout="fill" />;
};

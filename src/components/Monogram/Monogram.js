import { forwardRef, useId } from 'react';
import { classes } from 'utils/style';
import styles from './Monogram.module.css';

export const Monogram = forwardRef(({ highlight, className, ...props }, ref) => {
  const id = useId();
  const clipId = `${id}monogram-clip`;

  return (
    <svg
      aria-hidden
      className={classes(styles.monogram, className)}
      width="40"
      height="40"
      viewBox="0 0 40 40"
      ref={ref}
      {...props}
    >
      <defs>
        <clipPath id={clipId}>
          <path
            d="M7.45115 40.0003C11.5663 40.0003 14.9023 36.6643 14.9023 32.5492C14.9023 28.4341 11.5663 25.0981 7.45115 25.0981C3.33599 25.0981 0 28.4341 0 32.5492C0 36.6643 3.33599 40.0003 7.45115 40.0003Z"
            fill="#11131F"
          />
          <path
            fill-rule="evenodd"
            clip-rule="evenodd"
            d="M0 0H40L20.0004 20.1984L0 0Z"
            fill="#11131F"
          />
          <path
            d="M8.29013 11.3511L6.51123 13.13L24.1308 30.834L25.9097 29.0551L8.29013 11.3511Z"
            fill="#11131F"
          />
        </clipPath>
      </defs>
      <rect clipPath={`url(#${clipId})`} width="100%" height="100%" />
      {highlight && (
        <g clipPath={`url(#${clipId})`}>
          <rect className={styles.highlight} width="100%" height="100%" />
        </g>
      )}
    </svg>
  );
});

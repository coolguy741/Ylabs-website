import React, { useEffect } from 'react';
import styles from './ImageSlider.module.css';
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/effect-coverflow';
import 'swiper/css/pagination';

// import required modules
import { EffectCoverflow, Pagination } from 'swiper';

export const ImageSlider = ({ images }) => {
  useEffect(() => {
    console.log('debug: Images', images);
  }, []);
  return (
    <div className={styles.ImageSlider}>
      <Swiper
        effect={'coverflow'}
        grabCursor={true}
        centeredSlides={true}
        slidesPerView={'auto'}
        coverflowEffect={{
          rotate: 50,
          stretch: 0,
          depth: 100,
          modifier: 2,
          slideShadows: true,
        }}
        pagination={false}
        modules={[EffectCoverflow, Pagination]}
        className="mySwiper"
      >
        {images.map((image, key) => {
          return (
            <SwiperSlide key={key}>
              <img src={image.image} />
            </SwiperSlide>
          );
        })}
      </Swiper>
    </div>
  );
};

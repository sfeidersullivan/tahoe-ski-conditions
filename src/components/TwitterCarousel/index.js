import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';

import Twidget from '../twidget';
import { mountainMap } from '../../constants';
import { getMountains } from '../../localStorage';

// Import Swiper styles
import 'swiper/swiper.scss';

const TwitterCarousel = () => {
  const mountains = getMountains();
  return (
    <Swiper
      spaceBetween={50}
      slidesPerView={1}
    >
      {mountains.map(mountain => (
        <SwiperSlide>
          <Twidget {...(mountainMap[mountain] || {})}/>
        </SwiperSlide>
      ))}
    </Swiper>
  );
};

export default TwitterCarousel;

import React from 'react';
import PropTypes from 'prop-types';
import { Swiper, SwiperSlide } from 'swiper/react';

import Twidget from '../twidget';
import { mountainMap } from '../../constants';

// Import Swiper styles
import 'swiper/swiper.scss';

const TwitterCarousel = ({ mountains }) => (
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

TwitterCarousel.propTypes = {
  mountains: PropTypes.arrayOf(PropTypes.string).isRequired,
};

export default TwitterCarousel;

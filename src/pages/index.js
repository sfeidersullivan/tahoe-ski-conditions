import React, { useState } from "react"
import { Carousel } from 'react-responsive-carousel';

import Layout from "../components/layout"
import SEO from "../components/seo"
import Twidget from '../components/twidget';
import { mountainMap } from '../constants';
import { getMountains } from '../localStorage';

import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader

const IndexPage = () => {
  const mountains = getMountains();
  return (
    <Layout>
      <SEO title="Home" />
      <div style={{  }}>
        <Carousel swipeable>
          {mountains.map(mountain => (
            <Twidget {...(mountainMap[mountain] || {})}/>
          ))}
        </Carousel>
      </div>
    </Layout>
  );
};

export default IndexPage

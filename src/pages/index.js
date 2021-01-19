import React, { useState } from "react"
import { Link } from "gatsby"
import { Carousel } from 'react-responsive-carousel';

import Layout from "../components/layout"
import Image from "../components/image"
import SEO from "../components/seo"
import Twidget from '../components/twidget';

import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader

const mountainMap = {
  'kirkwood': {
    url: 'https://twitter.com/KWconditions?ref_src=twsrc%5Etfw',
    name: 'Kirkwood Conditions',
  },
  'heavenly': {
    url: 'https://twitter.com/KWconditions?ref_src=twsrc%5Etfw',
    name: 'Heavenly Conditions',
  },
};

const IndexPage = () => {
  const [mountains, setMountains] = useState(['kirkwood', 'heavenly']);
  return (
    <Layout>
      <SEO title="Home" />
      <div style={{  }}>
        <Carousel swipeable>
          {mountains.map(mountain => (
            <Twidget {...mountainMap[mountain]}/>
          ))}
        </Carousel>
      </div>
    </Layout>
  );
};

export default IndexPage

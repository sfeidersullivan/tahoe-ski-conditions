import React from "react"

import Layout from "../components/layout"
import SEO from "../components/seo"
import { getMountains } from '../localStorage';
import TwitterCarousel from '../components/TwitterCarousel';

const weatherUrl = 'https://forecast.io/embed/#lat=38.8758&lon=-119.9356&name=South%20Lake%20Tahoe,%20CA';
const IndexPage = () => {
  const mountains = getMountains();
  return (
    <Layout>
      <SEO title="Home" />
      <div style={{  }}>
        <iframe
          title='weather'
          type='text/html'
          height={ 250 }
          width={ '100%' }
          frameBorder='0'
          src={weatherUrl}
        />
        <TwitterCarousel mountains={mountains} />
      </div>
    </Layout>
  );
};

export default IndexPage

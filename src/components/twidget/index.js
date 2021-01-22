import React from 'react';
import PropTypes from 'prop-types';

const Twidget = ({ url, name }) => (
  <div style={{ backgroundColor: 'white', pointerEvents: 'none' }}>
    <a
      className="twitter-timeline"
      // height={600}
      style={{ margin: 0 }}
      href={url}>
        {name}
    </a> 
    <script async src="https://platform.twitter.com/widgets.js" charSet="utf-8"></script>
  </div>
);

Twidget.propTypes = {
  url: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
};

export default Twidget;

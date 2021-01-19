import React from 'react';

const Twidget = ({ url, name }) => {

  return (
    <div style={{ backgroundColor: 'white' }}>
      <a
        className="twitter-timeline"
        height={600}
        style={{ margin: 0 }}
        href={url}>
          {name}
      </a> 
      <script async src="https://platform.twitter.com/widgets.js" charSet="utf-8"></script>
    </div>
  );
};

export default Twidget;

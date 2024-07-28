// pages/index.tsx

import React from 'react';
import FullScreenIframe from '../components/FullScreenIframe';

const Home: React.FC = () => {
  return (
    <div>
      <FullScreenIframe src="https://demo.awaikenthemes.com/html-preview/medipro/" title="Full Screen Iframe Example" />
    </div>
  );
};

export default Home;

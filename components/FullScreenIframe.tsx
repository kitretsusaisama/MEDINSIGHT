// components/FullScreenIframe.tsx

import React from 'react';
import styles from './FullScreenIframe.module.css';

interface FullScreenIframeProps {
  src: string;
  title: string;
}

const FullScreenIframe: React.FC<FullScreenIframeProps> = ({ src, title }) => {
  return (
    <div className={styles.iframeContainer}>
      <iframe src={src} title={title} className={styles.iframe}></iframe>
    </div>
  );
};

export default FullScreenIframe;

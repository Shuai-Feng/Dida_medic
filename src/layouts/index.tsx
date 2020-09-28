import React, { useEffect } from 'react';
import NavHeader from '@/components/NavHeader';
import Footer from '@/components/Footer';

import '@/style/iconfont/iconfont.css';
import './style.less';
import '@pub/animate.min.css';
import '@pub/reset.css';

const Gl_layout: React.FunctionComponent<{}> = props => {
  useEffect(() => {}, []);
  return (
    <div className="Gl_layout" style={{ minWidth: 1200 }}>
      <div className="background"></div>
      <NavHeader />
      <div className="container">{props.children}</div>
      <Footer />
    </div>
  );
};

export default Gl_layout;

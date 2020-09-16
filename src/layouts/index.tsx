import * as React from 'react';
import NavHeader from '@/components/NavHeader';
import Footer from '@/components/Footer';

import '@/style/iconfont/iconfont.css';
import '@pub/animate.min.css';
import '@pub/reset.css';

const Gl_layout: React.FunctionComponent<{}> = props => {
  return (
    <div>
      <NavHeader />
      <div className="container">{props.children}</div>
      <Footer />
    </div>
  );
};

export default Gl_layout;

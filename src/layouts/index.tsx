import * as React from 'react';
import NavHeader from '@/components/NavHeader';
import Footer from '@/components/Footer';
import { Redirect } from 'umi';

import '@/style/iconfont/iconfont.css';
import '@pub/reset.css';

const Gl_layout: React.FunctionComponent<{}> = props => {
  return (
    <div>
      <Redirect from="/" to="/home" />
      <NavHeader />
      <div className="container" style={{ minHeight: 600, background: '#999' }}>
        {props.children}
      </div>
      <Footer />
    </div>
  );
};

export default Gl_layout;

import * as React from 'react';
import { footer_wrapper } from './style.less';
interface IFooterProps {}

const Footer: React.FunctionComponent<IFooterProps> = props => {
  return (
    <div className="Footer">
      <div className={footer_wrapper}>
        © 2023 by Shuaifeng. Proudly created with React and less
        <a href="http://Shuaifeng.xyz/CgDoc">Shuaifeng.xyz</a>
      </div>
    </div>
  );
};

export default Footer;

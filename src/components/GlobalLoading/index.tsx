import * as React from 'react';
import { Spin } from 'antd';
interface IGloadingProps {}

const Gloading: React.FunctionComponent<IGloadingProps> = props => {
  return (
    <div
      className="glloading"
      style={{ minHeight: 300, textAlign: 'center', lineHeight: 300 }}
    >
      <Spin />
      loading...
    </div>
  );
};

export default Gloading;

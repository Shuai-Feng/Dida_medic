import * as React from 'react';
import { Spin } from 'antd';
interface IGloadingProps {}

const Gloading: React.FunctionComponent<IGloadingProps> = props => {
  return (
    <div className="glloading">
      <Spin />
      loading...
    </div>
  );
};

export default Gloading;

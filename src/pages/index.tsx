import * as React from 'react';
import { Redirect } from 'umi';
interface IIndexPageProps {}

const IndexPage: React.FunctionComponent<IIndexPageProps> = props => {
  return (
    <div>
      <Redirect to="/home" />
    </div>
  );
};

export default IndexPage;

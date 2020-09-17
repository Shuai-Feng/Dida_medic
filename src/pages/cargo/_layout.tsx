import * as React from 'react';
import './style.less';

interface ICargoLayoutProps {}

const CargoLayout: React.FunctionComponent<ICargoLayoutProps> = props => {
  return (
    <div className="Cargolayout">
      <div className="teamHeader">
        <h1>商品介绍</h1>
        <h2>Cargo</h2>
      </div>
      {props.children}
    </div>
  );
};

export default CargoLayout;

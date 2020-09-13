import React, { useEffect, FunctionComponent } from 'react';
interface ICargoProps {}

const Cargo: FunctionComponent<ICargoProps> = props => {
  useEffect(() => {
    var str: number = prompt('考了多少分鸭');
    if (str > 90) {
      alert('4个绩点');
    } else if (str > 80) {
      alert('3个绩点');
    } else if (str > 70) {
      alert('2个绩点');
    } else if (str > 60) {
      alert('1个绩点');
    } else {
      alert('就这？');
    }
  }, []);
  return <div>Cargo</div>;
};

export default Cargo;

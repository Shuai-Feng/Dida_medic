import * as React from 'react';

interface IMgContainerProps {
  width?: number;
  className?: string;
}

const MgContainer: React.FunctionComponent<IMgContainerProps> = props => {
  let wrapperWidth = props.width || 1000;
  let className = props.className || '';

  return (
    <div
      style={{ margin: '0 auto', width: wrapperWidth, overflow: 'hidden' }}
      className={className}
    >
      {props.children}
    </div>
  );
};

export default MgContainer;

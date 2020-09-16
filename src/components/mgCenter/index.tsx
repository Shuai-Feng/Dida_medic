import * as React from 'react';

interface IMgContainerProps {
  width?: number;
  className?: string;
  style?: React.CSSProperties;
}

const MgContainer: React.FunctionComponent<IMgContainerProps> = props => {
  let wrapperWidth = props.width || 1000;
  let className = props.className || '';
  let style = props.style || {
    margin: '0 auto',
    width: wrapperWidth,
    overflow: 'hidden',
  };
  return (
    <div style={style} className={className}>
      {props.children}
    </div>
  );
};

export default MgContainer;

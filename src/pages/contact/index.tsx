import React, { useEffect, FunctionComponent } from 'react';
import './style.less';
// @ts-ignore
const BMap = window.BMap;

interface IContactPageProps {}

const ContactPage: FunctionComponent<IContactPageProps> = props => {
  let initialMap = () => {
    if (!BMap) return;
    //获取地图实例
    let myMap = new BMap.Map('myMap');
    //生成坐标点
    var point = new BMap.Point(119.60436762, 39.94546157);
    myMap.centerAndZoom(point, 18);
  };
  useEffect(() => {
    initialMap();
  }, []);
  return (
    <div className="ContactPage">
      <div className="teamHeader">
        <h1>联系我们</h1>
        <h2>Contact Us</h2>
      </div>
      <div className="wrapper">
        <div id="myMap" className="left"></div>
        <div className="right"></div>
      </div>
    </div>
  );
};

export default ContactPage;

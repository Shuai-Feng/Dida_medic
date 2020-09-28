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
        <div id="myMap" className="left">
          欸？网络好像出了点问题
        </div>
        <div className="right">
          <div className="right_wrapper">
            <h1>联系我们</h1>
            <p>电话：12345678901</p>
            <p>邮箱：wise_life@foxmail.com</p>
            <p>地址：广州海珠区新港东路51号 北岛创意园B4栋 37度智能家居</p>
            <input type="text" placeholder="请输入姓名" />
            <input type="text" placeholder="邮箱" />
            <textarea placeholder="留言信息" />
            <button>留言</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactPage;

import React, { useEffect } from 'react';
import Swiper from 'swiper';
import './style.less';
import 'swiper/dist/css/swiper.css';

interface IBannerProps {}

const Banner: React.FunctionComponent<IBannerProps> = props => {
  //组件渲染完成
  useEffect(() => {
    let mySwiper = new Swiper('.swiper-container', {
      pagination: {
        el: '.swiper-pagination',
      },
      navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
      },
      effect: 'fade',
      loop: true,
    });
  }, []);

  return (
    <div className="banner">
      <div className="swiper-container">
        <div className="swiper-wrapper">
          <div className="swiper-slide">
            <h1 className="slide_title">榔头科技</h1>
            <p className="slide_text">随时随地 每时每刻</p>
          </div>
          <div className="swiper-slide">
            <h1 className="slide_title">一人通 多人用</h1>
            <p className="slide_text">只需一人申请，整个项目组全部收益</p>
          </div>
          <div className="swiper-slide">
            <h1 className="slide_title">办法总比困难多</h1>
            <p className="slide_text">别担心我们会处理大部分困难</p>
          </div>
        </div>
        <div className="swiper-pagination"></div>
        <div className="swiper-button-prev"></div>
        <div className="swiper-button-next"></div>
      </div>
    </div>
  );
};

export default Banner;

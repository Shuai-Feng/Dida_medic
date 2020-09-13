import React from 'react';
import { Link } from 'umi';
import MgWrapper from '@/components/mgCenter';
import Banner from '@/components/HomePage/Banner';
import './style.less';

interface textData {
  id: number;
  title: string;
  content: Array<string>;
}
const Home: React.FunctionComponent<{}> = props => {
  const introData: Array<textData> = [
    {
      id: 1,
      title: '专业',
      content: [
        '智慧生活的美好在于它是你最放松、最私密的空间。每一个家都有它的光线、气味、形状、温度，每一个家都是独一无二的。家之美，或热情活力，或恬静沉稳，找到最舒适的家具生活状态，便是我们希望为你实现的小确幸我们相信优质的家居产品，首要的是拥有美观的外表。在产品的造型设计、色彩搭配、材质选择上，我们都进行了精心的考量，最终呈现出简洁优雅的科技家具智能产品，为你的家增添格调。',
      ],
    },
    {
      id: 2,
      title: '专心',
      content: [
        '所有的智能元素都巧妙地隐藏于设计中，创造更方便的使用体验。我们觉得，智能技术在现代家居生活中扮演的是一个低调可靠的辅助角色，而作为使用者的你，才是家的主人。',
      ],
    },
    {
      id: 3,
      title: '专注',
      content: [
        '2019年，我们陆续推出全新的智能家具系列——包括智能卧房、衣柜、办公桌椅、沙发、亲子家具等。未来将推出更多智能与美观并重的家居产品，帮更多用户打造有温度的家。',
      ],
    },
  ];

  return (
    <div>
      {/* 很大一块轮播图 */}
      <div className="banner">
        <Banner />
      </div>
      {/* 介绍部分 */}
      <div className="recommend">
        <MgWrapper>
          <p>我们的服务更涵盖了衣食住行任何方面</p>
          <Link to="/contact" className="btn">
            立刻咨询
          </Link>
          <p>
            our service covers the basic necessities of life care and other
            aspects of people.
          </p>
        </MgWrapper>
      </div>
      <div className="intro">
        <MgWrapper>
          {introData.map((item: textData, index: number) => {
            return (
              <div key={index} className={'subintro intro_' + index}>
                <h2 key={index}>{item.title}</h2>
                {item.content.map((text: any, index: number) => {
                  return <p key={index}>{text}</p>;
                })}
              </div>
            );
          })}
        </MgWrapper>
      </div>
    </div>
  );
};

export default Home;
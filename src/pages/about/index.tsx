import React, { useEffect, useState } from 'react';
import classnames from 'classnames';
import MgWrapper from '@/components/mgCenter';
import './style.less';
//引入一个图
import Space from '@/common/Page_about/intro_img1.svg';
import Shield from '@/common/Page_about/intro_img2.svg';
import Plant from '@/common/Page_about/intro_img3.svg';
import Person from '@/common/Page_about/intro_img4.svg';
import { Divider } from 'antd';
interface IAboutProps {}
interface introData {
  key: string;
  title: string;
  subtitle: string;
  subtext: string;
  img: any;
}
const About: React.FunctionComponent<IAboutProps> = props => {
  //检车当前滚动条滚动的位置
  const introDataList: Array<introData> = [
    {
      key: 'intro1',
      title: '人类计划',
      subtitle: 'Human Transportation',
      subtext:
        ' 由于世界上的人类数量大于环保基数，我们计划将部分人类送入太空。被选入送入太空的人将被选为我们相信，通过转移部分人力资源，将会给地球带来更大的收益。同时，促进宇宙旅游行业的发展。',
      img: Space,
    },
    {
      key: 'intro2',
      title: '人类计划',
      subtitle: 'Human Transportation',
      subtext:
        ' 由于世界上的人类数量大于环保基数，我们计划将部分人类送入太空。被选入送入太空的人将被选为我们相信，通过转移部分人力资源，将会给地球带来更大的收益。同时，促进宇宙旅游行业的发展。',
      img: Shield,
    },
    {
      key: 'intro3',
      title: '人类计划',
      subtitle: 'Human Transportation',
      subtext:
        ' 由于世界上的人类数量大于环保基数，我们计划将部分人类送入太空。被选入送入太空的人将被选为我们相信，通过转移部分人力资源，将会给地球带来更大的收益。同时，促进宇宙旅游行业的发展。',
      img: Plant,
    },
    {
      key: 'intro4',
      title: '人类计划',
      subtitle: 'Human Transportation',
      subtext:
        ' 由于世界上的人类数量大于环保基数，我们计划将部分人类送入太空。被选入送入太空的人将被选为我们相信，通过转移部分人力资源，将会给地球带来更大的收益。同时，促进宇宙旅游行业的发展。',
      img: Person,
    },
  ];
  const [scrollTop, setScroll] = useState(0);

  let handleScroll = () => {
    setScroll(document.documentElement.scrollTop || document.body.scrollTop);
  };
  //选渲染左右分栏的的intro
  let handleintro = (
    data: Array<introData>,
    baseheight: number = 0,
  ): Array<any> => {
    let result: Array<any> = [];
    data.forEach((item: introData, index: number) => {
      let showDistant: number = index * 300 + baseheight;
      result.push(
        <div
          key={index}
          onClick={(e: any) => {
            console.log(e.target.getBoundingClientRect().bottom);
          }}
        >
          {!(index % 2) ? (
            <div className={'intro' + ' ' + item.key}>
              <div className={`box ${index % 2 ? 'rightimg' : 'leftimg'}`}>
                <img
                  className={classnames(
                    { flipInX: scrollTop >= showDistant },
                    'intro_img animated',
                  )}
                  src={item.img}
                  alt=""
                />
              </div>
              <div className={`box ${index % 2 ? 'lefttext' : 'righttext'}`}>
                <div
                  className={classnames(
                    { fadeIn: scrollTop >= showDistant },
                    'description animated hidden',
                  )}
                >
                  <h1>
                    {item.title}
                    <span className="subtitle">{item.subtitle}</span>
                  </h1>
                  <div className="line"></div>
                  <div className="subtext">{item.subtext}</div>
                </div>
              </div>
            </div>
          ) : (
            <div className={'intro' + ' ' + item.key + ' darkTheme'}>
              <div className={`box ${index % 2 ? 'lefttext' : 'righttext'}`}>
                <div
                  className={classnames(
                    { fadeIn: scrollTop >= showDistant, hidden: index },
                    'description animated hidden',
                  )}
                >
                  <h1>
                    {item.title}
                    <span className="subtitle">{item.subtitle}</span>
                  </h1>
                  <div className="line"></div>
                  <div className="subtext">{item.subtext}</div>
                </div>
              </div>
              <div
                className={`box ${index % 2 ? 'rightimg' : 'leftimg'}`}
                onClick={() => {
                  console.log(scrollTop);
                }}
              >
                <img
                  className={classnames(
                    { flipInX: scrollTop >= showDistant, hidden: index },
                    'intro_img animated hidden',
                  )}
                  src={item.img}
                  alt=""
                />
              </div>
            </div>
          )}
        </div>,
      );
    });
    return result;
  };

  //模拟componentDidMount
  useEffect(() => {
    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  //大人 连续写5遍太low了，你会遍历的
  return (
    <div className="aboutPage">
      <div className="teamHeader">
        <h1>关于我们</h1>
        <h2>About Us</h2>
      </div>

      {handleintro([introDataList[0], introDataList[1]])}

      <div className="long_intro1">
        <MgWrapper className="wrapper">
          <span className="iconfont">&#xe618;</span>
          <h1>—— 技术实力雄厚 ——</h1>
          <p>
            榔头科技始创于2020年，团队秉承“忠诚合作、积极乐观、努力开拓、自强不息；
          </p>
          <p>
            科技改变生活”的理念和价值观，在竞争激烈的国内外市场中艰苦创业。现已形成中小型电子设备开发与研制一体化的模式。
          </p>
          <p>
            我们致力于坚持技术创新从而不断创造社会价值、推动科技发展；同时，我们也提倡团队协作、公平公正，强调团队成员共同成长，鼓励创新，使每个成员充分发挥才智和潜能。
          </p>
          <p>
            未来，榔头科技将朝着更多方向发展，作出更多尝试，以应对科技领域日新月异的挑战。为全社会乃至全球贡献力量。
          </p>
        </MgWrapper>
      </div>
      {handleintro([introDataList[2], introDataList[3]], 1200)}
      <div className="long_intro1">
        <MgWrapper className="wrapper">
          <span className="iconfont">&#xe618;</span>
          <h1>—— 技术实力雄厚 ——</h1>
          <p>
            榔头科技始创于2020年，团队秉承“忠诚合作、积极乐观、努力开拓、自强不息；
          </p>
          <p>
            科技改变生活”的理念和价值观，在竞争激烈的国内外市场中艰苦创业。现已形成中小型电子设备开发与研制一体化的模式。
          </p>
          <p>
            我们致力于坚持技术创新从而不断创造社会价值、推动科技发展；同时，我们也提倡团队协作、公平公正，强调团队成员共同成长，鼓励创新，使每个成员充分发挥才智和潜能。
          </p>
          <p>
            未来，榔头科技将朝着更多方向发展，作出更多尝试，以应对科技领域日新月异的挑战。为全社会乃至全球贡献力量。
          </p>
        </MgWrapper>
      </div>
    </div>
  );
};

export default About;

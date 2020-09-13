import * as React from 'react';
import MgWrapper from '@/components/mgCenter';
import './style.less';

//引入一个图
import card from '@/common/card.svg';
interface IAboutProps {}

const About: React.FunctionComponent<IAboutProps> = props => {
  return (
    <div className="aboutPage">
      <div className="intro1">
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
      <div className="intro">
        <MgWrapper className="wrapper">
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
      <div className="intro">
        <MgWrapper className="wrapper">
          <img src={card} alt="" />
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

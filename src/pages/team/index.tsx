import React, { FunctionComponent } from 'react';
import MgWarpper from '@/components/mgCenter';
import { Row, Col, Avatar } from 'antd';
import './style.less';

interface ITeamPageProps {}

const TeamPage: FunctionComponent<ITeamPageProps> = props => {
  const memberData = [
    {
      name: '李帅锋',
      dept: '技术部部长',
      intro:
        '2年前端开发经验曾服务搜狐奥运传递路线FLASH开发在代码中体验完美生活,汇总客户反馈意见',
    },
  ];
  return (
    <div className="TeamPage">
      <div className="teamHeader">
        <h1>我们的团队</h1>
        <h2>Our Team</h2>
      </div>
      <MgWarpper width={1200} className="CardWrapper">
        <Row gutter={[40, 20]}>
          <Col span={12}>
            <div className="medicCard">
              <Avatar size={120} src={'https://api.uomg.com/api/rand.avatar'}>
                U
              </Avatar>
              <div className="description">
                <p className="title">
                  李帅锋<span className="subtitle">技术部主管</span>
                </p>
                <p className="intro">
                  7年前端开发经验曾服务搜狐奥运传递路线FLASH开发在代码中体验完美生活
                  ,汇总客户反馈意见
                </p>
              </div>
            </div>
          </Col>
          <Col span={12}>
            <div className="medicCard">
              <Avatar size={120} src={'https://api.uomg.com/api/rand.avatar'}>
                U
              </Avatar>
              <div className="description">
                <p className="title">
                  李帅锋<span className="subtitle">技术部主管</span>
                </p>
                <p className="intro">
                  7年前端开发经验曾服务搜狐奥运传递路线FLASH开发在代码中体验完美生活
                  ,汇总客户反馈意见
                </p>
              </div>
            </div>
          </Col>
          <Col span={12}>
            <div className="medicCard">
              <Avatar size={120} src={'https://api.uomg.com/api/rand.avatar'}>
                U
              </Avatar>
              <div className="description">
                <p className="title">
                  李帅锋<span className="subtitle">技术部主管</span>
                </p>
                <p className="intro">
                  7年前端开发经验曾服务搜狐奥运传递路线FLASH开发在代码中体验完美生活
                  ,汇总客户反馈意见
                </p>
              </div>
            </div>
          </Col>
          <Col span={12}>
            <div className="medicCard">
              <Avatar size={120} src={'https://api.uomg.com/api/rand.avatar'}>
                U
              </Avatar>
              <div className="description">
                <p className="title">
                  李帅锋<span className="subtitle">技术部主管</span>
                </p>
                <p className="intro">
                  7年前端开发经验曾服务搜狐奥运传递路线FLASH开发在代码中体验完美生活
                  ,汇总客户反馈意见
                </p>
              </div>
            </div>
          </Col>
        </Row>
      </MgWarpper>
    </div>
  );
};

export default TeamPage;

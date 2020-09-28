import React, { FunctionComponent, useEffect } from 'react';
import MgWarpper from '@/components/mgCenter';
import { Row, Col, Avatar } from 'antd';
import axios from 'axios';
import './style.less';

interface ITeamPageProps {}

const TeamPage: FunctionComponent<ITeamPageProps> = props => {
  const memberData = [
    {
      name: '李帅锋',
      dept: '技术部部长',
      intro:
        '2年前端开发经验曾服务搜狐奥运传递路线FLASH开发在代码中体验完美生活,汇总客户反馈意见',
      icon: '741023025',
    },
    {
      name: '田跃博',
      dept: '研发部工程师',
      intro:
        '2年前端开发经验曾服务搜狐奥运传递路线FLASH开发在代码中体验完美生活,汇总客户反馈意见',
      icon: '1634323868',
    },
    {
      name: '徐传利',
      dept: '研发部工程师',
      intro:
        '2年前端开发经验曾服务搜狐奥运传递路线FLASH开发在代码中体验完美生活,汇总客户反馈意见',
      icon: '2625905598',
    },
    {
      name: '董文壮',
      dept: '产品宣传部门',
      intro:
        '2年前端开发经验曾服务搜狐奥运传递路线FLASH开发在代码中体验完美生活,汇总客户反馈意见',
      icon: '3222796058',
    },
    {
      name: '李烜',
      dept: '产品宣传部门',
      intro:
        '2年前端开发经验曾服务搜狐奥运传递路线FLASH开发在代码中体验完美生活,汇总客户反馈意见',
      icon: '1477677742',
    },
    {
      name: '高饶',
      dept: '产品宣传部门',
      intro:
        '2年前端开发经验曾服务搜狐奥运传递路线FLASH开发在代码中体验完美生活,汇总客户反馈意见',
      icon: '2441822180',
    },
    {
      name: '戚路阔',
      dept: '产品宣传部门',
      intro:
        '2年前端开发经验曾服务搜狐奥运传递路线FLASH开发在代码中体验完美生活,汇总客户反馈意见',
      icon: '2817462912',
    },
    {
      name: '祁亚洲',
      dept: '产品运营部',
      intro:
        '2年前端开发经验曾服务搜狐奥运传递路线FLASH开发在代码中体验完美生活,汇总客户反馈意见',
      icon: '1083294751',
    },
    {
      name: '骆世港',
      dept: '产品运营部',
      intro:
        '2年前端开发经验曾服务搜狐奥运传递路线FLASH开发在代码中体验完美生活,汇总客户反馈意见',
      icon: '582057049',
    },
    {
      name: '靖文翰',
      dept: '产品公关部',
      intro:
        '2年前端开发经验曾服务搜狐奥运传递路线FLASH开发在代码中体验完美生活,汇总客户反馈意见',
      icon: '201933351',
    },
  ];
  //请求头像照片
  let handleRequest = () => {
    axios.get('/getIcon').then(res => {
      console.log(res);
    });
  };

  let handleCardrender = (memberData: Array<any>) => {
    return memberData.map((item, index) => {
      return (
        <Col span={12} key={index}>
          <div className="medicCard">
            <Avatar
              size={120}
              src={`http://q1.qlogo.cn/g?b=qq&nk=${item.icon}&s=640`}
            >
              Loading...
            </Avatar>
            <div className="description">
              <p className="title">
                {item.name}
                <span className="subtitle">{item.dept}</span>
              </p>
              <p className="intro">{item.intro}</p>
            </div>
          </div>
        </Col>
      );
    });
  };
  useEffect(() => {
    handleRequest();
  }, []);
  return (
    <div className="TeamPage">
      <div className="teamHeader">
        <h1>我们的团队</h1>
        <h2>Our Team</h2>
      </div>
      <MgWarpper width={1200} className="CardWrapper">
        <Row gutter={[40, 20]}>{handleCardrender(memberData)}</Row>
      </MgWarpper>
    </div>
  );
};

export default TeamPage;

import * as React from 'react';
import { Card, Button } from 'antd';
export interface ILongPageProps {}

export interface ILongPageState {
  total_mail: number;
  total_timeStamp: string | number;
  success_mail: number;
  success_timeStamp: string | number;
  fail_mail: number;
  fail_timeStamp: string | number;
}

export default class LongPage extends React.Component<
  ILongPageProps,
  ILongPageState
> {
  // 模拟假设数据的基础值
  //_mail代表相应数值
  //_timeStamp代表响应时间时间戳
  state = {
    total_mail: 0,
    total_timeStamp: '',
    success_mail: 0,
    success_timeStamp: '',
    fail_mail: 0,
    fail_timeStamp: '',
  };

  //请求对应数据，返回对应参数
  handleTotalRequest = async (param: 'total' | 'success' | 'fail') => {
    // 根据参数所返回数值       这个代表获取数据 我就瞎写了
    let newData = {};
    let infoNum: any = await fetch('/url');
    //然后使用state更新值
    newData[param] = infoNum;
    newData[param + '_timeStamp'] = +new Date();
    this.setState(newData);
  };

  //显示初始数据
  componentDidMount() {
    //调用三次显示数据
    this.handleTotalRequest('total');
    this.handleTotalRequest('success');
    this.handleTotalRequest('fail');

    //确定初始时间戳以便计算时间
    this.setState({
      total_timeStamp: +new Date(),
      success_timeStamp: +new Date(),
      fail_timeStamp: +new Date(),
    });
  }
  public render() {
    return (
      <div>
        <Card title="logstro流量总计">
          {this.state.total_mail}
          <Button
            onClick={() => {
              this.handleTotalRequest('total');
            }}
          >
            {} 点击刷新
          </Button>
        </Card>
        <Card title="投递成功函数总计">
          {this.state.success_mail}
          <Button
            onClick={() => {
              this.handleTotalRequest('success');
            }}
          >
            {} 点击刷新
          </Button>
        </Card>
        <Card title="投递失败行数总计">
          {this.state.fail_mail}
          <Button
            onClick={() => {
              this.handleTotalRequest('fail');
            }}
          >
            {} 点击刷新
          </Button>
        </Card>
      </div>
    );
  }
}

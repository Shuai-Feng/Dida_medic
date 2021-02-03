import * as React from 'react';
import { Card, Button } from 'antd';
export interface ILongPageProps {}

export interface ILongPageState {}

export default class LongPage extends React.Component<
  ILongPageProps,
  ILongPageState
> {
  // 模拟假设数据的基础值
  state = {
    total_mail: 0,
    success_mail: 0,
    fail_mail: 0,
  };

  //请求对应数据，返回对应参数
  handleTotalRequest = async (param: 'total' | 'success' | 'fail') => {
    // 根据参数所返回数值       这个代表获取数据 我就瞎写了
    let infoNum: any = await fetch('/url');
    //然后使用state更新值
    this.setState(({}[param] = infoNum));
  };

  //显示初始数据
  componentDidMount() {
    //调用三次显示数据
    this.handleTotalRequest('total');
    this.handleTotalRequest('success');
    this.handleTotalRequest('fail');
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
            刷新
          </Button>
        </Card>
        <Card title="投递成功函数总计">
          {this.state.success_mail}
          <Button
            onClick={() => {
              this.handleTotalRequest('success');
            }}
          >
            刷新
          </Button>
        </Card>
        <Card title="投递失败行数总计">
          {this.state.fail_mail}
          <Button
            onClick={() => {
              this.handleTotalRequest('fail');
            }}
          >
            刷新
          </Button>
        </Card>
      </div>
    );
  }
}

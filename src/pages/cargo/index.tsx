import React, { FunctionComponent, useState, useEffect } from 'react';
import { Card, Row, Col, Modal, Pagination, Button, Descriptions } from 'antd';

import { createClient } from 'pexels';

import classnames from 'classnames';
import './style.less';
const client = createClient(
  '563492ad6f91700001000001186d8ce40622434c9288fcee0c5570c6',
);
const DesItem = Descriptions.Item;
const { Meta } = Card;

interface ICargoProps {}
interface CargoItem {
  id: string;
  img: string;
  title: string;
  type: 'ammor' | 'damage' | 'support' | undefined;
  subtitle: string;
  discription: string;
  price: string | number;
}
const Cargo: FunctionComponent<ICargoProps> = props => {
  useEffect(() => {
    const query = 'tree';
    client.photos.search({ query, per_page: 1 }).then(photos => {
      console.log(photos);
    });
  }, []);
  const formlayout = {
    sm: 24,
    md: 6,
  };

  //商品展示列表
  const cargoListData: Array<CargoItem> = [
    {
      id: '1',
      type: 'ammor',
      img: 'https://os.alipayobjects.com/rmsportal/QBnOOoLaAfKPirc.png',
      title: '纳米激素',
      subtitle: 'Nano Boost',
      discription: '阿巴阿巴阿巴阿巴阿巴阿巴阿巴阿巴阿巴阿巴阿巴',
      price: 12.2,
    },
    {
      id: '2',
      type: 'ammor',
      img:
        'https://images.pexels.com/photos/2199293/pexels-photo-2199293.jpeg?auto=compress&cs=tinysrgb&h=650&w=940',
      title: '纳米激素',
      subtitle: 'Nano Boost',
      discription: '阿巴阿巴阿巴阿巴阿巴阿巴阿巴阿巴阿巴阿巴阿巴',
      price: 12.2,
    },
    {
      id: '3',
      type: 'ammor',
      img:
        'https://images.pexels.com/photos/4219912/pexels-photo-4219912.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500',
      title: '纳米激素',
      subtitle: 'Nano Boost',
      discription: '阿巴阿巴阿巴阿巴阿巴阿巴阿巴阿巴阿巴阿巴阿巴',
      price: 12.2,
    },
    {
      id: '4',
      type: 'damage',
      img:
        'https://images.pexels.com/photos/2880507/pexels-photo-2880507.jpeg?auto=compress&cs=tinysrgb&fit=crop&h=627&w=1200',
      title: '纳米激素',
      subtitle: 'Nano Boost',
      discription: '阿巴阿巴阿巴阿巴阿巴阿巴阿巴阿巴阿巴阿巴阿巴',
      price: 12.2,
    },
    {
      id: '5',
      type: 'damage',
      img: 'https://os.alipayobjects.com/rmsportal/QBnOOoLaAfKPirc.png',
      title: '纳米激素',
      subtitle: 'Nano Boost',
      discription: '阿巴阿巴阿巴阿巴阿巴阿巴阿巴阿巴阿巴阿巴阿巴',
      price: 12.2,
    },
    {
      id: '6',
      type: 'damage',
      img: 'https://os.alipayobjects.com/rmsportal/QBnOOoLaAfKPirc.png',
      title: '纳米激素',
      subtitle: 'Nano Boost',
      discription: '阿巴阿巴阿巴阿巴阿巴阿巴阿巴阿巴阿巴阿巴阿巴',
      price: 12.2,
    },
    {
      id: '7',
      type: 'support',
      img: 'https://os.alipayobjects.com/rmsportal/QBnOOoLaAfKPirc.png',
      title: '纳米激素',
      subtitle: 'Nano Boost',
      discription: '阿巴阿巴阿巴阿巴阿巴阿巴阿巴阿巴阿巴阿巴阿巴',
      price: 12.2,
    },
    {
      id: '8',
      type: 'support',
      img: 'https://os.alipayobjects.com/rmsportal/QBnOOoLaAfKPirc.png',
      title: '纳米激素',
      subtitle: 'Nano Boost',
      discription: '阿巴阿巴阿巴阿巴阿巴阿巴阿巴阿巴阿巴阿巴阿巴',
      price: 12.2,
    },
  ];

  const [visible, setVisible] = useState(false);
  let initalCargo: CargoItem = {
    id: '',
    type: undefined,
    img: '',
    title: '',
    subtitle: '',
    discription: '',
    price: 0,
  };
  //用于存放总筛选数据
  const [cargoitem, setCargoItem] = useState(initalCargo);
  //用户判断用户当前筛选选项
  const [filter, setFilter] = useState('all');

  //关闭模态窗口
  let hanldeModalOpen = (Cargoitem: CargoItem) => {
    setVisible(true);
    setCargoItem(Cargoitem);
  };

  const filterItem = cargoListData.filter((item: CargoItem) => {
    if (filter == 'all') {
      return true;
    } else {
      return item.type == filter;
    }
  });

  return (
    <div className="CargoPage">
      <div className="teamHeader">
        <h1>商品展示</h1>
        <h2>Cargo list</h2>
      </div>
      <div className="wrapper" style={{ padding: '40px 0px' }}>
        <Row gutter={[40, 32]} style={{ width: 1200, margin: '0 auto' }}>
          <ul className="filter">
            <li
              className={classnames({ hover: filter == 'all' }, 'filterItem')}
              onClick={() => {
                setFilter('all');
              }}
            >
              全部
            </li>
            <li
              className={classnames({ hover: filter == 'ammor' }, 'filterItem')}
              onClick={() => {
                setFilter('ammor');
              }}
            >
              <span className="iconfont">&#xe6d7;</span>
              重装
            </li>
            <li
              className={classnames(
                { hover: filter == 'damage' },
                'filterItem',
              )}
              onClick={() => {
                setFilter('damage');
              }}
            >
              <span className="iconfont">&#xe6e0;</span>
              输出
            </li>
            <li
              className={classnames(
                { hover: filter == 'support' },
                'filterItem',
              )}
              onClick={() => {
                setFilter('support');
              }}
            >
              <span className="iconfont">&#xe6d1;</span>
              辅助
            </li>
          </ul>
          {filterItem.map((item: CargoItem, index: number) => {
            return (
              <Col {...formlayout} key={index}>
                <Card
                  hoverable
                  cover={<img height={350} alt="example" src={item.img} />}
                  onClick={() => {
                    hanldeModalOpen(item);
                  }}
                >
                  <Meta title={item.title} description={item.subtitle} />
                </Card>
              </Col>
            );
          })}
          <Col md={10} offset={16}>
            <Pagination showQuickJumper defaultCurrent={2} total={50} />
          </Col>
        </Row>

        <Modal
          visible={visible}
          width={1200}
          style={{ minHeight: 500 }}
          onCancel={() => {
            setVisible(false);
          }}
          footer={null}
          title={`${cargoitem.title} ${cargoitem.id}`}
        >
          <Row style={{ padding: 18 }}>
            <Row gutter={[24, 10]}>
              <Col md={8} sm={24}>
                <img
                  style={{ width: '100%', maxHeight: 500 }}
                  src={cargoitem.img}
                  alt=""
                />
              </Col>
              <Col md={16} sm={24} style={{ overflowX: 'auto' }}>
                <Descriptions layout="vertical" bordered>
                  {Object.keys(cargoitem).map((keyname: string) => {
                    return (
                      <DesItem label={keyname} key={keyname}>
                        {cargoitem[keyname]}
                      </DesItem>
                    );
                  })}
                </Descriptions>
                <Row style={{ marginTop: 28 }}>
                  <Col offset={16}>
                    <Button type="primary" style={{ marginRight: 24 }}>
                      立刻下单
                    </Button>
                    <Button>加入购物车</Button>
                  </Col>
                </Row>
              </Col>
            </Row>
          </Row>
        </Modal>
      </div>
    </div>
  );
};

export default Cargo;

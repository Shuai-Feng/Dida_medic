import React, { FunctionComponent } from 'react';
import { NavLink } from 'umi';
import logo from '@/common/hammer_logo.jpg';
import './style.less';
const NavHeader: FunctionComponent<{}> = () => {
  return (
    <div className={`NavHeader`}>
      <div className="mg1000">
        <ul className="header_warpper">
          <li className="navlogo">
            <img src={logo} style={{ height: 40 }} alt="" />
          </li>
          <li className="headerItem">
            <NavLink activeClassName="itemActive" to="/home">
              首页
            </NavLink>
          </li>
          <li className="headerItem">
            <NavLink activeClassName="itemActive" to="/cargo">
              商品
            </NavLink>
          </li>
          <li className="headerItem">
            <NavLink activeClassName="itemActive" to="/about">
              关于我们
            </NavLink>
          </li>
          <li className="headerItem">
            <NavLink activeClassName="itemActive" to="/team">
              团队成员
            </NavLink>
          </li>
          <li className="headerItem">
            <NavLink activeClassName="itemActive" to="/contact">
              联系我们
            </NavLink>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default NavHeader;

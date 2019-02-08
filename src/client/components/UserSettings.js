import React from 'react';
import { Menu, Dropdown, Icon } from 'antd';
import './scss/antd.scss';

const menu =
    <Menu>
        <Menu.Item>
            <a target="_blank" rel="noopener noreferrer" href="http://www.alipay.com/">Settings</a>
        </Menu.Item>
        <Menu.Item>
            <a target="_blank" rel="noopener noreferrer" href="http://www.taobao.com/">Log out</a>
        </Menu.Item>
    </Menu>;
           

export default class UserSettings extends React.Component{

    render(){
        return(
            <div>
                <Dropdown overlay={menu}>
                    <a className="ant-dropdown-link" href="#">
                        <Icon type="user" />
                    </a>
                </Dropdown>,
            </div>
        )
    }
}
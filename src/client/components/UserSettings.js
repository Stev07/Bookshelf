import React from "react";
import {Menu, Dropdown, Icon} from "antd";
import "./scss/antd.scss";
import {Link} from "react-router-dom";

export default class UserSettings extends React.Component {
    constructor(props) {
        super(props);
    }

    menu = (
        <Menu>
            <Menu.Item>
                <Link to="/userinterface">{"Settings"}</Link>
            </Menu.Item>
            <Menu.Item>
                <Link to="/coach">{"Coachs"}</Link>
            </Menu.Item>
            <Menu.Item>
                <Link to="/" onClick={this.logout}>
                    {"Log out"}
                </Link>
            </Menu.Item>
        </Menu>
    );

    logout = () => {
        localStorage.clear();
    };

    render() {
        return (
            <div>
                <Dropdown overlay={this.menu}>
                    <a className="ant-dropdown-link" href="#">
                        <Icon className="icon" type="user" />
                    </a>
                </Dropdown>
            </div>
        );
    }
}

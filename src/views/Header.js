import React from 'react';
import '../assets/style/Header.scss';
import { Collapse,Navbar,NavbarToggler,NavbarBrand,Nav,NavItem,NavLink,UncontrolledDropdown,DropdownToggle,DropdownMenu,DropdownItem } from 'reactstrap'; 


class Header extends React.Component {
    constructor(props) {
        super(props);

        // ユーザ切り替え ドロップダウンメニュー
        this.state = { isOpen: false };
        this.toggle = this.toggle.bind(this);
    }

    // ドロップダウンメニューを開く・閉じる
    toggle() {
        this.setState({ isOpen: !this.state.isOpen });
    }

    render() {
        // this.propsの省略
        const { users, userInfo, changeSendUser } = this.props;
        // メッセージを送るユーザ画像のパス
        const sendUserImg = require('../assets/img/User/' + users[userInfo.send].img);

        return (
            <header>
                <Navbar color="light" light expand="md">

                    {/* ヘッダー左側 */}
                    <NavbarBrand disabled>
                        <img src={sendUserImg} alt="User" height="45px"/>&nbsp;&nbsp;{users[userInfo.send].name}
                    </NavbarBrand>

                    {/* ヘッダー右側 */}
                    <NavbarToggler onClick={this.toggle} />
                    <Collapse isOpen={this.state.isOpen} navbar>
                        <Nav className="ml-auto" navbar>

                            {/* ユーザ保持ポイント */}
                            <NavItem><NavLink disabled href="#">拍手できる数: {users[userInfo.send].retention}</NavLink></NavItem>
                            <NavItem><NavLink disabled href="#">拍手された数: {users[userInfo.send].praise}</NavLink></NavItem>

                            {/* ドロップダウンメニュー */}
                            <UncontrolledDropdown nav inNavbar>
                                <DropdownToggle nav caret>ユーザーの切り替え</DropdownToggle>
                                <DropdownMenu right>
                                    {/* this.props.usersの配列から名前と画像を取り出す */}
                                    {users.map((user, index) => {
                                        const choiceUser = require('../assets/img/User/' + users[index].img);
                                        return <DropdownItem key={index} onClick={() => changeSendUser(index)}>
                                                <img src={choiceUser} alt="User" height="25px"/>&nbsp;&nbsp;{user.name}
                                               </DropdownItem>
                                    })}
                                </DropdownMenu>
                            </UncontrolledDropdown>

                        </Nav>
                    </Collapse>

                </Navbar>
            </header>
        );
    }
}

export default Header;
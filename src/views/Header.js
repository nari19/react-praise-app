import React from 'react';
import '../assets/style/Header.scss';

import {
    Collapse,Navbar,NavbarToggler,NavbarBrand,Nav,NavItem,NavLink,
    UncontrolledDropdown,DropdownToggle,DropdownMenu,DropdownItem 
} from 'reactstrap';

import User from '../assets/img/User/f_f_event_97_s512_f_event_97_0bg.png';

class Header extends React.Component {
    constructor(props) {
        super(props);

        this.toggle = this.toggle.bind(this);
        this.state = {
            isOpen: false
        };
        }
        toggle() {
        this.setState({
            isOpen: !this.state.isOpen
        });
    }
    render() {
        return (
            <header>
                <Navbar color="light" light expand="md">
                    <NavbarBrand href="/">
                        <img src={User} alt="User" height="45px"/>&nbsp;&nbsp;kazuki
                    </NavbarBrand>
                    <NavbarToggler onClick={this.toggle} />
                    <Collapse isOpen={this.state.isOpen} navbar>
                        <Nav className="ml-auto" navbar>
                            <NavItem><NavLink disabled href="#">拍手できる数: 70</NavLink></NavItem>
                            <NavItem><NavLink disabled href="#">拍手された数: 0</NavLink></NavItem>

                            <UncontrolledDropdown nav inNavbar>
                                <DropdownToggle nav caret>ユーザーの切り替え</DropdownToggle>
                                <DropdownMenu right>
                                    <DropdownItem>taro</DropdownItem>
                                    <DropdownItem>jiro</DropdownItem>
                                    <DropdownItem>saburo</DropdownItem>
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
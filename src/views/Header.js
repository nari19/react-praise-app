import React from 'react';
import '../assets/style/Header.scss';

import { Form, Input, Container, Row, Col } from 'reactstrap';
import User from '../assets/img/User/f_f_event_97_s512_f_event_97_0bg.png';

class Header extends React.Component {
    render() {
        return (
            <header>
                <Container>
                    <Row>
                        <Col>
                            <img src={User} alt="User" height="60px"/>
                            aaaaaaaaaaaaaaaaa
                            <Form className="form"><Input type="search" placeholder="&#xf002; Search by Channel" /></Form>
                        </Col>
                    </Row>
                </Container>
            </header>
        );
    }
}

export default Header;
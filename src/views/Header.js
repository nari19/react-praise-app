import React from 'react';
import '../assets/style/Header.scss';

import { Form, Input, Container, Row, Col } from 'reactstrap';

class Header extends React.Component {
    render() {
        return (
            <header>
                <Container>
                    <Row>
                        <Col className="column">
                            <Form className="form">
                                <Input type="search" placeholder="&#xf002; Search by Channel" />                                
                            </Form>
                        </Col>
                        <Col className="column" xs="12" md="3">
                            <div className="menus">
                                <div className="menu-wrapper"><a href="#"><i className="fa fa-user-circle menu" aria-hidden="true"></i></a></div>
                                <div className="menu-wrapper"><a href="#"><i className="fa fa-pie-chart menu" aria-hidden="true"></i></a></div>
                                <div className="menu-wrapper"><a href="#"><i className="fa fa-video-camera menu" aria-hidden="true"></i></a></div>
                            </div>
                        </Col>
                    </Row>
                </Container>
            </header>
        );
    }
}

export default Header;
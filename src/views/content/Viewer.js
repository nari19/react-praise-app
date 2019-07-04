import React from 'react';
import { Row, Col, Card, CardText, CardBody } from 'reactstrap';
import User from '../../assets/img/User/10.png';
class Viewer extends React.Component {
    render() {
        return(
            <div className="Viewer">
                <Card>
                    <Row><Col>
                        <img src={User} alt="User" height="38px"/>&nbsp;kazuki
                        <i className="fa fa-arrow-right"></i>
                        <img src={User} alt="User" height="38px"/>&nbsp;kazuki
                    </Col></Row>
                    <hr />
                    <CardBody>
                        <CardText>今日も元気にお仕事なさってますね。こっちまで明るい気持ちになります!</CardText>
                        <i className="fa fa-sign-language h3"></i>&nbsp;&nbsp;
                        <span className="h5 text-dark">5</span>
                        <CardText className="pull-right text-muted h6">2019/04/23 11:51</CardText>
                    </CardBody>
                </Card>
            </div>
        );
    }
}

export default Viewer;
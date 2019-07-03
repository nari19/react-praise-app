import React from 'react';
import { Row, Col, Card, CardText, CardBody } from 'reactstrap';
import User from '../../assets/img/User/f_f_event_97_s512_f_event_97_0bg.png';

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
                        <CardText>Some quick example text to build on the card title and make up the bulk of the card's content.</CardText>
                    </CardBody>
                </Card>
            </div>
        );
    }
}

export default Viewer;
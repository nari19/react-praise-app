import React from 'react';
import { Row, Col, Card, CardText, CardBody } from 'reactstrap';

class Viewer extends React.Component {
    render() {
        // this.propsの省略
        const { users, posts } = this.props;
        return(
            <div className="Viewer">
                {/* this.props.postsの配列から中身を取り出す */}
                {posts.map((post, index) => {
                    // 送る相手の画像
                    const sendUserImg = require('../../assets/img/User/' + users[post.send].img);
                    // 受け取る相手の画像
                    const receiveUserImg = require('../../assets/img/User/' + users[post.receive].img);

                    return <Card key={index}>
                        <Row><Col>
                            {/* 送る相手 */}
                            <img src={sendUserImg} alt="User" height="38px"/>&nbsp;{users[post.send].name}
                            <i className="fa fa-arrow-right"></i>
                            {/* 受け取る相手 */}
                            <img src={receiveUserImg} alt="User" height="38px"/>&nbsp;{users[post.receive].name}
                        </Col></Row>
                        <hr />
                        <CardBody>
                            {/* 賞賛メッセージ */}
                            <CardText>{post.content}</CardText>

                            {/* 賞賛ボタン */}
                            <i className="fa fa-sign-language h3"></i>&nbsp;&nbsp;
                            <span className="h5 text-dark">{post.praise}</span>

                            {/* 日付 */}
                            <CardText className="pull-right text-muted h6">{post.date}</CardText>
                        </CardBody>
                    </Card>
                })}
            </div>
        );
    }
}

export default Viewer;
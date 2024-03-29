import React from 'react';
import { Row, Col, Card, CardText, CardBody, Tooltip } from 'reactstrap';


class Viewer extends React.Component {
    constructor(props) {
        super(props);

        // 拍手ユーザ一覧　オーバーレイ
        this.state = {
            tooltipOpen: []
        };
        this.toggle = this.toggle.bind(this);
    }

    // 投稿の数が変更された時に実行
    componentDidUpdate(prevProps) {
        if(this.props.postsCount !== prevProps.postsCount) {
            // 3回投稿された場合は、tooltipOpenステートに{false,false,false}が入る
            const clapDefaultArray = new Array(this.props.postsCount).fill(false);
            this.setState({tooltipOpen: clapDefaultArray})
        }
    }

    toggle(index) {
        // マウスホバーした部分のフラグを変える
        let toggleFlagArray = this.state.tooltipOpen;
        toggleFlagArray[index] = !this.state.tooltipOpen[index];
        // オーバーレイの表示・非表示
        this.setState({ tooltipOpen: toggleFlagArray });
        // Contaier.jsのclapInfoDataステートを更新
        this.props.onMouseOver(index);
    }

    render() {
        // this.propsの省略
        const { users, userInfo, posts, clickPraise, clapInfoData } = this.props;

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

                            {/* 拍手ボタン */}
                            <i className="fa fa-sign-language h3" onClick={() => clickPraise(index, userInfo.send)}></i>&nbsp;&nbsp;
                            {/* 拍手数 */}
                            <span className="h5 text-dark" id={"clapOverlay"+index}>{post.praise.length}</span>
                            {/* 拍手ユーザ一覧　オーバーレイ */}
                            <Tooltip placement="right" isOpen={this.state.tooltipOpen[index]} target={"clapOverlay"+index} toggle={() => this.toggle(index)}>
                                {/* this.props.posts.praiseの配列から名前と画像を取り出す */}
                                {clapInfoData.map((clap, i) => {
                                    const clapUser = require('../../assets/img/User/' + users[clap.user].img);
                                    return <div key={i} className="clapList">
                                        <img src={clapUser} alt="User" height="22px"/>
                                        <span className="h6">
                                            &nbsp;&nbsp;{users[clap.user].name}
                                            {/* ポイントの表示 */}
                                            &nbsp;&nbsp;{clap.num}
                                        </span>
                                    </div>
                                })}
                            </Tooltip>
                            
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
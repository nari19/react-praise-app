import React from 'react';
import { Card, CardText, CardBody, FormGroup, Input, Button, ButtonDropdown, DropdownToggle, DropdownMenu, DropdownItem } from 'reactstrap'; 


class Post extends React.Component {
    constructor(props) {
        super(props);

        this.state = { 
            dropdownOpen: false,  // ユーザ切り替え ドロップダウンメニュー
            postContent: ""       // 投稿フォームの内容
        };
        this.toggle = this.toggle.bind(this);
        this.handleChange = this.handleChange.bind(this);
    }

    // ドロップダウンメニューを開く・閉じる
    toggle() {
        this.setState({ dropdownOpen: !this.state.dropdownOpen });
    }

    // 投稿フォームに変更があったらステートを更新する
    handleChange(e) {
        this.setState({ postContent: e.target.value });
    }

    // 投稿ボタンが押されたらpostContentステートの中身を消去し、propsのpostAdd関数を実行する
    sendDate() {
        const { postAdd, userInfo } = this.props;
        const { postContent } = this.state;
        console.log(Date.now());
        postAdd(postContent, userInfo.send, userInfo.receive);
        this.setState({ postContent: ""});
    }

    render() {
        // this.propsの記述を省略
        const { users, userInfo, changeReceiveUser } = this.props;
        // this.stateの記述を省略
        const { postContent, dropdownOpen } = this.state;

        // メッセージを受け取るユーザ画像のパス
        const receiveUserImg = require('../../assets/img/User/' + users[userInfo.receive].img);

        return(
            <div className="Post">
                <Card>
                    <CardBody>
                        {/* 投稿フォーム */}
                        <CardText>褒めたい人の行動をみんなに紹介しよう！</CardText>
                        <FormGroup>
                            <Input type="textarea" name="text" rows="4" value={postContent} onChange={this.handleChange}/>
                        </FormGroup>

                        {/* 送る相手を選択 */}
                        <img src={receiveUserImg} alt="User" height="38px"/>&nbsp;
                        <ButtonDropdown isOpen={dropdownOpen} toggle={this.toggle} >
                            <DropdownToggle caret>
                                褒める相手[ {users[userInfo.receive].name} ]
                            </DropdownToggle>
                            <DropdownMenu>
                                {/* this.props.usersの配列から名前と画像を取り出す */}
                                    {users.map((user, index) => {
                                        const choiceUser = require('../../assets/img/User/' + users[index].img);
                                        return <DropdownItem key={index} onClick={() => changeReceiveUser(index)}>
                                                <img src={choiceUser} alt="User" height="25px"/>&nbsp;&nbsp;{user.name}
                                               </DropdownItem>
                                })}
                            </DropdownMenu>
                        </ButtonDropdown>

                        {/* 投稿ボタン */}
                        <Button type="submit" className="pull-right"
                                onClick={() => this.sendDate()}>投稿</Button>
                    </CardBody>
                </Card>
            </div>
        );
    }
}

export default Post;
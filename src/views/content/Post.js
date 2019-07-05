import React from 'react';
import { Card, CardText, CardBody, Button } from 'reactstrap';
import { FormGroup, Input } from 'reactstrap';
import { ButtonDropdown, DropdownToggle, DropdownMenu, DropdownItem } from 'reactstrap'; 

class Post extends React.Component {
    constructor(props) {
        super(props);

        this.toggle = this.toggle.bind(this);
        this.state = {
            dropdownOpen: false
        };
        }
        toggle() {
        this.setState({
            dropdownOpen: !this.state.dropdownOpen
        });
    }
    render() {
        // this.props.userInfo.send 等の記述を userInfo.send で短く記述
        const { users, userInfo, postAdd } = this.props;
        // メッセージを受け取るユーザ画像のパス
        const receiveUserImg = require('../../assets/img/User/' + users[userInfo.receive].img);

        return(
            <div className="Post">
                <Card>
                    <CardBody>
                        {/* 投稿フォーム */}
                        <CardText>褒めたい人の行動をみんなに紹介しよう！</CardText>
                        <FormGroup>
                            <Input type="textarea" name="postForm" rows="4"/>
                        </FormGroup>

                        {/* 送る相手を選択 */}
                        <img src={receiveUserImg} alt="User" height="38px"/>&nbsp;
                        <ButtonDropdown isOpen={this.state.dropdownOpen} toggle={this.toggle} >
                            <DropdownToggle caret>
                                褒める相手を選ぶ
                            </DropdownToggle>
                            <DropdownMenu>
                                {/* this.props.usersの配列から名前と画像を取り出す */}
                                    {users.map((user, index) => {
                                        const choiceUser = require('../../assets/img/User/' + users[index].img);
                                        return <DropdownItem key={index} onClick={() => postAdd(index)}>
                                                <img src={choiceUser} alt="User" height="25px"/>&nbsp;&nbsp;{user.name}
                                               </DropdownItem>
                                })}
                            </DropdownMenu>
                        </ButtonDropdown>

                        {/* 投稿ボタン */}
                        <Button type="submit" name="postForm" className="pull-right"
                                onClick={() => postAdd()}>投稿</Button>
                    </CardBody>
                </Card>
            </div>
        );
    }
}

export default Post;
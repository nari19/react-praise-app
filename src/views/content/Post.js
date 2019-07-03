import React from 'react';
import { Card, CardText, CardBody, Button } from 'reactstrap';
import { FormGroup, Input } from 'reactstrap';
import { ButtonDropdown, DropdownToggle, DropdownMenu, DropdownItem } from 'reactstrap'; 
import User from '../../assets/img/User/f_f_event_97_s512_f_event_97_0bg.png';

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
        return(
            <div className="Post">
                <Card>
                    <CardBody>
                        <CardText>褒めたい人の行動をみんなに紹介しよう！</CardText>
                        <FormGroup>
                            <Input type="textarea" name="text" id="exampleText" rows="4"/>
                        </FormGroup>

                        <img src={User} alt="User" height="38px"/>&nbsp;

                        <ButtonDropdown isOpen={this.state.dropdownOpen} toggle={this.toggle} >
                            <DropdownToggle caret>
                                褒める相手を選ぶ
                            </DropdownToggle>
                            <DropdownMenu>
                                <DropdownItem>taro</DropdownItem>
                                <DropdownItem>jiro</DropdownItem>
                                <DropdownItem>saburo</DropdownItem>
                            </DropdownMenu>
                        </ButtonDropdown>

                        <Button className="pull-right">投稿</Button>
                    </CardBody>
                </Card>
            </div>
        );
    }
}

export default Post;
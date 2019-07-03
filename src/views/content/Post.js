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
        return(
            <div className="Post">
                <Card>
                    <CardBody>
                        <CardText>投稿機能を使って、褒めたい人の行動をみんなに紹介しよう！</CardText>
                        <FormGroup>
                            <Input type="textarea" name="text" id="exampleText" rows="4"/>
                        </FormGroup>

                        <ButtonDropdown isOpen={this.state.dropdownOpen} toggle={this.toggle} >
                            <DropdownToggle caret>
                                紹介する相手を選ぶ
                            </DropdownToggle>
                            <DropdownMenu>
                                <DropdownItem>taro</DropdownItem>
                                <DropdownItem>jiro</DropdownItem>
                                <DropdownItem>saburo</DropdownItem>
                                <DropdownItem divider />
                                <DropdownItem>Another Action</DropdownItem>
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
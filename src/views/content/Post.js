import React from 'react';
import { Card, CardText, CardBody, CardTitle, CardSubtitle, Button } from 'reactstrap';

class Post extends React.Component {
    render() {
        return(
            <div className="Post">
                <p className="content-title">Post Frequency</p>
                <Card>
                    Post
                    <hr />
                    <CardBody>
                        <CardTitle>Card title</CardTitle>
                        <CardSubtitle>Card subtitle</CardSubtitle>
                        <CardText>Some quick example text to build on the card title and make up the bulk of the card's content.</CardText>
                        <Button>Button</Button>
                    </CardBody>
                </Card>
            </div>
        );
    }
}

export default Post;
import React from 'react';
import '../../assets/style/Content.scss';

import Viewer from './Viewer.js';
import Post from './Post.js';

class Container extends React.Component {
    render() {
        return(
            <main>
                <Post />
                <p className="content-title">みんなの投稿</p>
                <Viewer />
                <Viewer />
                <Viewer />
            </main>
        );
    }
}

export default Container;
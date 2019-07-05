import React from 'react';
import '../../assets/style/Content.scss';

import Viewer from './Viewer.js';
import Post from './Post.js';


class Container extends React.Component {
    constructor(props){
        super(props)

        // 投稿情報 [内容、送る相手、受け取る相手、日付、ポイント]
        this.state = {
            posts: []
        }
        this.postAdd = this.postAdd.bind(this)
      }

      // 投稿をpostsステートに追加
      postAdd(send, receive) {
        // Postコンポーネントから受け取ったデータをオブジェクトに挿入して、stateのpostsに配列で追加
        this.state.posts.push({content: "aaa", send: send, receive: receive, date: "2019/5/4 18:21", praise: 0})
        // setStateを使ってstateを上書き
        this.setState({posts: this.state.posts})
      }

    render() {
        // this.propsの省略
        const { users, userInfo, changeReceiveUser } = this.props;
        // this.stateの省略
        const { posts } = this.state;
        return(
            <main>
                {/* 投稿機能コンポーネント */}
                <p className="content-title h5 text-dark">賞賛メッセージの投稿</p>
                <Post users={users} userInfo={userInfo} 
                      postAdd={this.postAdd}
                      changeReceiveUser={changeReceiveUser}/>
                
                {/* 投稿表示コンポーネント */}
                <p className="content-title h5 text-dark">みんなの投稿</p>
                <Viewer users={users} posts={posts}/>
            </main>
        );
    }
}

export default Container;
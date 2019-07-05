import React from 'react';
import '../../assets/style/Content.scss';

import Viewer from './Viewer.js';
import Post from './Post.js';

class Container extends React.Component {
    constructor(props){
        super(props)
        // 投稿情報 [id、内容、送る相手、受け取る相手、日付、ポイント]
        this.state = {
            posts: [
                {id: 0, content: "aaa", send: 0, receive: 1, date: "2019/5/4 18:21", praise: 0}
            ]
        }
        this.postAdd = this.postAdd.bind(this)
      }

      // 投稿をpostsステートに追加
      postAdd(e) {
        // フォームから受け取ったデータをオブジェクトに挿入して、stateのtodo配列に追加
        this.state.posts.push({id: 0, content: postForm.value, send: 0, receive: 1, date: "", praise: 0})
        // setStateを使ってstateを上書き
        this.setState({posts: this.state.posts})
      }

    render() {
        // this.propsの省略
        const { users, userInfo } = this.props;
        // this.stateの省略
        const { posts } = this.state;
        return(
            <main>
                {/* 投稿機能コンポーネント */}
                <p className="content-title h5 text-dark">賞賛メッセージの投稿</p>
                <Post users={users} userInfo={userInfo} 
                      postAdd={this.postAdd}/>
                
                {/* 投稿表示コンポーネント */}
                <p className="content-title h5 text-dark">みんなの投稿</p>
                <Viewer users={users} posts={posts}/>
            </main>
        );
    }
}

export default Container;
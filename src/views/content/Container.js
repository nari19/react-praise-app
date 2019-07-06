import React from 'react';
import '../../assets/style/Content.scss';

import Viewer from './Viewer.js';
import Post from './Post.js';


class Container extends React.Component {
    constructor(props){
        super(props)

        // 投稿情報 [内容、送る相手、受け取る相手、日付、ポイント]
        this.state = { posts: []}
        this.postAdd = this.postAdd.bind(this)
      }

      // 投稿をpostsステートに追加
      postAdd(postContent, send, receive) {
        // 日時の取得
        const now = new Date();
        const Year = now.getFullYear();
        const Month = now.getMonth()+1;
        const Date_a = now.getDate();
        const Hour = now.getHours();
        const Min = now.getMinutes();
        const newDate = Year + "/" + Month + "/" + Date_a + " " + Hour + ":" + Min;

        // Postコンポーネントから受け取ったデータをオブジェクトに挿入して、stateのpostsに配列に追加
        this.state.posts.unshift({content: postContent, send: send, receive: receive, date: newDate, praise: 0})
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
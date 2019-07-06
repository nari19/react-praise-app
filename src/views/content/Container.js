import React from 'react';
import '../../assets/style/Content.scss';

import Viewer from './Viewer.js';
import Post from './Post.js';


class Container extends React.Component {
    constructor(props){
        super(props)

        // 投稿情報 [内容、送る相手、受け取る相手、日付、ポイント]
        this.state = { posts: [{content: "postContent", send: 3, receive: 4, date: "2019/3/7 16:21", praise: 0}]}
        this.postAdd = this.postAdd.bind(this)
        this.clickPrise = this.clickPrise.bind(this)
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

    // 賞賛ボタンを押したときに発火
    clickPrise(i) {
        // スプレッド構文でstateの値を一部分だけ変更する https://teratail.com/questions/118307
        const changedState = {...this.state};
        changedState.posts[i].praise += 1;
        this.setState(changedState);
       
        // 賞賛した相手とされた相手のポイントを変更
        const receive = changedState.posts[i].receive
        this.props.changeUsersPoint(receive);
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
                <Viewer users={users} posts={posts} clickPrise={this.clickPrise}/>
            </main>
        );
    }
}

export default Container;
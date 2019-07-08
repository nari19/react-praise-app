import React from 'react';
import '../../assets/style/Content.scss';

import Viewer from './Viewer.js';
import Post from './Post.js';


class Container extends React.Component {
    constructor(props){
        super(props)

        this.state = { 
            posts: [],  // 投稿情報 [content: 内容、send: 送る相手、receive; 受け取る相手、date; 日付、praise: ポイント]
            clapInfoData: [],  // 拍手一覧情報 [{num: 拍手した数, user: 拍手した人}]
            postsCount: 0   // 投稿の数 投稿ボタンが押されたことを確認するために使う
        }
        this.postAdd = this.postAdd.bind(this);
        this.clickPraise = this.clickPraise.bind(this);
        this.onMouseOver = this.onMouseOver.bind(this);
    }

    // 初回のみ実行
    componentDidMount() {
        if(localStorage.container){ // もし前回のデータがあったら、ローカルストレージの値を取得し、更新する
          const saveDate = JSON.parse(localStorage.container);
          this.setState({
            posts: saveDate.posts,
            clapInfoData: saveDate.clapInfoData,
            postContent: saveDate.postContent
          })
        }
      }
    
    // state,propsが変更されたら実行
    componentDidUpdate() {
        // ローカルストレージにステートの情報を保存
        localStorage.setItem('container', JSON.stringify(this.state));
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
        this.state.posts.unshift({content: postContent, send: send, receive: receive, date: newDate, praise: []})
        // setStateを使ってstateを上書き
        this.setState({posts: this.state.posts})

        // 投稿の数を取得 Viewer.js（componentDidUpdate）で利用
        this.setState({postsCount: this.state.posts.length}) 
    }

    // 拍手ボタンを押したときに発火
    clickPraise(i, sendUser) {
        const { posts } = this.state;
        const { users } = this.props;
        if(users[sendUser].retention === 0) {
            alert("拍手できる数が0です");
        } else if(posts[i].send === sendUser || posts[i].receive === sendUser) {
            alert("投稿された人、投稿した人は拍手が出来ません")
        } else {
            // 要素の数を数える
            const praiseCount = posts[i].praise.filter(x => {return x===sendUser}).length;
            if(praiseCount === 15) {
                alert("１つの投稿に15回以上の拍手は出来ません");
            } else {
                // スプレッド構文でstateの値を一部分だけ変更する https://teratail.com/questions/118307
                const changedState = {...this.state};
                changedState.posts[i].praise.push(sendUser);
                this.setState(changedState);
            
                // 賞賛した相手とされた相手のポイントを変更
                const send = changedState.posts[i].send
                const receive = changedState.posts[i].receive
                this.props.changeUsersPoint(send, receive);
            }
        }
    }

    // 拍手の数にホバーした際、clapInfoDataステートを更新
    onMouseOver(index) {
        const { posts } = this.state;
        // 配列で格納している拍手のデータ(posts.praise)を連想配列に整形する
        const clapUniqArray = [...new Set(posts[index].praise)]; // 重複しない値を取り出す
        const clapArray = [];
        clapUniqArray.forEach(e => {
            let count = posts[index].praise.filter(x => {return x===e}).length;  // 要素の数を数える
            clapArray.push({ num: count, user: e});
        });
        clapArray.sort((a,b) => { //numキーで昇順ソート
            if(a.num < b.num) return 1;
            if(a.num > b.num) return -1;
            return 0;
        });
        this.setState({clapInfoData: clapArray});
    }

    render() {
        // this.propsの省略
        const { users, userInfo, changeReceiveUser } = this.props;
        // this.stateの省略
        const { posts, clapInfoData, postsCount } = this.state;
        return(
            <main>
                {/* 投稿機能コンポーネント */}
                <p className="content-title h5 text-dark">賞賛メッセージの投稿</p>
                <Post users={users} userInfo={userInfo} 
                      postAdd={this.postAdd}
                      changeReceiveUser={changeReceiveUser}/>
                
                {/* 投稿表示コンポーネント */}
                <p className="content-title h5 text-dark">みんなの投稿</p>
                <Viewer users={users} userInfo={userInfo} posts={posts} 
                        postsCount={postsCount} onMouseOver={this.onMouseOver}
                        clapInfoData={clapInfoData} clickPraise={this.clickPraise}/>
            </main>
        );
    }
}

export default Container;
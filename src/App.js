import React from 'react';
import './assets/style/App.scss';

import Header from './views/Header.js';
import Container from './views/content/Container';
import Footer from './views/Footer.js';


class App extends React.Component {
  constructor() {
    super()

    this.state = {
      // ユーザー情報 [id、名前、画像、保持ポイント、獲得ポイント]
      users: [
        {id: 0, name: "kazuki", img: "10.png", retention: 100, praise: 0},
        {id: 1, name: "mizuki", img: "20.png", retention: 100, praise: 0},
        {id: 2, name: "masaki", img: "30.png", retention: 100, praise: 0},
        {id: 3, name: "misaki", img: "40.png", retention: 100, praise: 0},
        {id: 4, name: "toshiki", img: "50.png", retention: 100, praise: 0},
        {id: 5, name: "yoshiki", img: "60.png", retention: 100, praise: 0},
      ],
      // 送信ユーザーID, 受信ユーザーID
      userInfo: { send: 0, receive: 1 }
    }
    this.changeSendUser = this.changeSendUser.bind(this)
    this.changeReceiveUser = this.changeReceiveUser.bind(this)
    this.changeUsersPoint = this.changeUsersPoint.bind(this)
  }

  // 送信ユーザーの変更、更新
  changeSendUser(e) {
    // setStateを使って送信ユーザーを上書き
    this.setState({
      userInfo: {send: e, receive: this.state.userInfo.receive}
    })
  }

  // 受信ユーザーの変更、更新
  changeReceiveUser(e) {
    // setStateを使って送信ユーザーを上書き
    this.setState({
      userInfo: {send: this.state.userInfo.send, receive: e}
    })
  }

  // 賞賛した相手とされた相手のポイントを変更
  changeUsersPoint(r) {
    // スプレッド構文でstateの値を一部分だけ変更する https://teratail.com/questions/118307
    const changedState = {...this.state};
    // 賞賛した人のポイントを減らす
    const sender = this.state.userInfo.send;
    changedState.users[sender].retention -= 2;
    // 賞賛を受けた人のポイントを増やす
    changedState.users[r].praise += 1;
    this.setState(changedState);
  }

  render() {
    // this.state.userInfo.send 等の記述を userInfo.send で短く記述
    const { users, userInfo } = this.state;

    return (
      <div className="App">
        <Header users={users} 
                userInfo={userInfo}
                changeSendUser={this.changeSendUser}/>
        <Container users={users} 
                   userInfo={userInfo}
                   changeReceiveUser={this.changeReceiveUser} 
                   changeUsersPoint={this.changeUsersPoint}/>
        <Footer />
      </div>
    );
  }
}

export default App;
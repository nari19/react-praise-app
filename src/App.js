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
        {id: 0, name: "kazuki", img: "10.png", retention: 100, praise: 10},
        {id: 1, name: "mizuki", img: "20.png", retention: 20, praise: 20},
        {id: 2, name: "masaki", img: "30.png", retention: 30, praise: 30},
        {id: 3, name: "misaki", img: "40.png", retention: 40, praise: 40},
        {id: 4, name: "toshiki", img: "50.png", retention: 50, praise: 50},
        {id: 5, name: "yoshiki", img: "60.png", retention: 60, praise: 60},
      ],
      // 送信ユーザーID, 受信ユーザーID
      userInfo: { send: 0, receive: 1 }
    }
    this.changeSendUser = this.changeSendUser.bind(this)
    this.changeReceiveUser = this.changeReceiveUser.bind(this)
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
                   changeReceiveUser={this.changeReceiveUser} />
        <Footer />
      </div>
    );
  }
}

export default App;
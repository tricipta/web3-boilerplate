import React from 'react';

class Home extends React.Component {
  render() {
    return (
      <div>
        <h1>Web3 Boilerplate</h1>
        <button id="connect-btn" onClick={this.props.onAuth}>Connect with MetaMask</button>
      </div>
    );
  }
}

export default Home;
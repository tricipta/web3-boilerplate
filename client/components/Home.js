import React from 'react';

class Home extends React.Component {
  render() {
    return (
      <div>
        <h1>Web3 Boilerplate</h1>
        <button onClick={this.props.onLogin}>Connect with MetaMask</button>
      </div>
    );
  }
}

export default Home;
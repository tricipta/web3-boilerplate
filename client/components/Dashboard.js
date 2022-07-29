import React from 'react';

class Dashboard extends React.Component {
  render() {
    return (
      <div>
        <h1>{this.props.balance ? this.props.balance : '0'} ETH</h1>
        <p>{this.props.account}</p>
        <button onClick={this.props.onLogout}>Logout</button>
      </div>
    );
  }
}

export default Dashboard;
import React from 'react';

import Dashboard from './components/Dashboard';
import Home from './components/Home';

import * as MetaMask from './library/MetaMask';

function App() {
  const [account, setAccount] = React.useState(null);

  const updateAccount = (accounts) => {
    setAccount(accounts[0]);
  }

  const authenticate = () => {
    if (MetaMask.isInstalled()) {
      MetaMask.connect(updateAccount);
    } else {
      window.open('https://metamask.io/download');
    }
  }

  const logout = () => {
    setAccount(null);
  }

  return (
    (account ? 
      <Dashboard account={account} onLogout={logout} /> 
      : 
      <Home onAuth={authenticate} />
    )
  );
}

export default App;
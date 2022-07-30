import React from 'react';

import Dashboard from './components/Dashboard';
import Home from './components/Home';

import * as MetaMask from './library/MetaMask';

function App() {
  const [account, setAccount] = React.useState(null);

  const updateAccount = (accounts) => {
    setAccount(accounts[0]);
  }

  const login = () => {
    if (MetaMask.isInstalled()) {
      MetaMask.connect(updateAccount);
    } else {
      MetaMask.download();
    }
  }

  const logout = () => {
    setAccount(null);
  }

  return (
    (account ? 
      <Dashboard account={account} onLogout={logout} /> 
      : 
      <Home onLogin={login} />
    )
  );
}

export default App;
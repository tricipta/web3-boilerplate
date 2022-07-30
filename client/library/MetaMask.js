const MetaMask = () => {

}

MetaMask.isInstalled = () => {
  return Boolean(window.ethereum && ethereum.isMetaMask);
}

MetaMask.download = () => {
  window.open('https://metamask.io/download');
}

MetaMask.connect = async(callback) => {
  await ethereum.request({ "method": "eth_requestAccounts" })
  .then(callback)
  .catch((err) => {
    console.log(err.message);
  });
}

export default MetaMask;
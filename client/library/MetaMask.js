export const isInstalled = () => {
  return Boolean(window.ethereum && ethereum.isMetaMask);
}

export const connect = async(callback) => {
  await ethereum.request({ "method": "eth_requestAccounts" })
  .then(callback)
  .catch((err) => {
    console.log(err.message);
  });
}
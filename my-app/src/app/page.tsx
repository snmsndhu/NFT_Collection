"use client";
import { useState } from "react";

function App() {
  // State variables for wallet connection status and address
  const [connected, setConnected] = useState(false);
  const [walletAddress, setWalletAddress] = useState("");

  // Function to connect/disconnect the wallet
  async function connectWallet() {
    if (!connected) {
      // Connect the wallet using ethers.js
      const provider = new ethers.BrowserProvider(window.ethereum);
      const signer = await provider.getSigner();
      const _walletAddress = await signer.getAddress();
      setConnected(true);
      setWalletAddress(_walletAddress);
    } else {
      // Disconnect the wallet
      window.ethereum.selectedAddress = null;
      setConnected(false);
      setWalletAddress("");
    }
  }

  return (
    <div className="app">
      <div className="main">
        <div className="content">
          <button className="btn" onClick={connectWallet}>
            {connected ? "Disconnect Wallet" : "Connect Wallet"}
          </button>
          <h3>Address</h3>
          <h4 className="wal-add">{walletAddress}</h4>
        </div>
      </div>
    </div>
  );
}

export default App;

import { Contract, providers, utils } from "ethers";
import Head from "next/head";
import React, { useEffect, useRef, useState } from "react";
import Web3Modal from "web3modal";
import { abi, NFT_CONTRACT_ADDRESS } from "../constants";

export default function Home() {
  const [walletConnected, setWalletConnected] = useState(false);

  const [loading, setLoading] = useState(false);

  const [tokenIdsMinted, setTokenIdsMinted] = useState("0");

  const web3ModalRef = useRef();

  const publicMint = async () => {
    try {
      console.log("Public Mint");

      const signer = await getProviderOrSigner(tru);

      const nftContract = new Contract(NFT_CONTRACT_ADDRESS, abi, signer);

      const tx = await nftContract.mint({
        value: utils.parseEther("0.01"),
      });
      setLoading(true);

      await tx.wait();
      setLoading(false);
      window.alert("you successfully mintes a NFT");
    } catch (err) {
      console.log(err);
    }
  };

  const connectWallet = async () => {
    try {
      await getProviderOrSigner();
      setWalletConnected(true);
    } catch (err) {
      console.error(err);
    }
  };
}

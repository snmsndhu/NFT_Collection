import Web3 from "web3";
import Head from "next/head";
import React, { useEffect, useRef, useState } from "react";
import { abi, NFT_CONTRACT_ADDRESS } from "../../constants";
require("dotenv").config({ path: ".env" });

const API_PROVIDER = process.env.WEB3_PROVIDER;
const web3 = new Web3(API_PROVIDER);

export default function Home() {
  const [walletConnected, setWalletConnected] = useState(false);

  const [loading, setLoading] = useState(false);

  const [tokenIdsMinted, setTokenIdsMinted] = useState("0");

  const web3ModalRef = useRef();

  function connectWallet() {}
}

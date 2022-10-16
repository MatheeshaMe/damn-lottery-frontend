import { ethers } from "ethers";
import React, { useState, useEffect } from "react";
import Hero from "./components/hero/Hero";
import Navbar from "./components/navbar/Navbar";
import Timer from "./components/timer/Timer";
import { abi, lotteryContractAddress } from "./config";
import { provier } from "./services/provider";
function App() {
  const [lotteryContract, setLotteryContract] = useState(undefined);
  const [account, setAccount] = useState(undefined);

  const connectToMetamask = async () => {
    const { ethereum } = window;
    if (ethereum.isMetaMask) {
      const provider = new ethers.providers.Web3Provider(ethereum);
      const accounts = await provider.send("eth_requestAccounts", []);
      const { name, chainId } = await provider.getNetwork();
      const lotteryContract = new ethers.Contract(
        lotteryContractAddress,
        abi,
        provider
      );
      setLotteryContract(lotteryContract);
      console.log(lotteryContract.address);
      setAccount(accounts[0]);
    } else {
      console.log("install metamask");
    }
  };

  const enterToLotteryGame = () => {
    console.log("enter");
  };

  const winner = () => {
    console.log("winner");
  };

  useEffect(() => {
    winner();
  }, [account]);

  return (
    <div className="container">
      <Navbar account={account} connectToMetamask={connectToMetamask} />
      <Timer />
      <Hero
      account={account}
        connectToMetamask={connectToMetamask}
        enterToLotteryGame={enterToLotteryGame}
      />
    </div>
  );
}

export default App;

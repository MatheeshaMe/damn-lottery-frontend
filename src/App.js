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
  const [participants, setPaticipats] = useState(0);
  const [entranceFee, setEntranceFee] = useState(0);
  const [activatedStatus, setActivatedStatus] = useState(1);
  const [signer, setSigner] = useState(undefined);
  const [recentWinner, setRecentWinner] = useState(undefined);
  // const

  const connectToMetamask = async () => {
    const { ethereum } = window;
    if (ethereum.isMetaMask) {
      const provider = new ethers.providers.Web3Provider(ethereum);
      const signer = provider.getSigner();
      setSigner(signer);
      const accounts = await provider.send("eth_requestAccounts", []);
      const { name, chainId } = await provider.getNetwork();
      const lotteryContract = new ethers.Contract(
        lotteryContractAddress,
        abi,
        signer
      );
      setLotteryContract(lotteryContract);
      console.log(lotteryContract.address);
      setAccount(accounts[0]);

      // getEntrance Fee

      try {
        await lotteryContract
          .getEntranceFee()
          .then((res) => {
            console.log(`entrance fee status ${(typeof res, res)}`);
            setEntranceFee(res);
          })
          .catch((err) => console.log(err));
      } catch {
        console.log(`error with getting entrance fees`);
      }

      // get Contract Status

      try {
        await lotteryContract.s_lotteryState().then((res) => {
          console.log(`s_lotteryState status ${(typeof res, res)}`);
          setActivatedStatus(res);
        });
      } catch {
        console.log(`error with getting contract status`);
      }

      try {
        await lotteryContract
          .getParticipantsLen()
          .then((res) => {
            console.log(`Participants Length status ${(typeof res, res)}`);
            setPaticipats(res);
          })
          .catch((err) => console.log(err));
      } catch {
        console.log(" error with getting price");
      }

      //  Get last winner

      try {
        await lotteryContract
          .s_recentWinner()
          .then((res) => {
            console.log(`s_recentWinner ${(typeof res, res)}`);
            setRecentWinner(res);
          })
          .catch((err) => console.log("error with getting recent winner", err));
      } catch (error) {
        console.log(`there is an error with getting recent winner`);
      }

      //
      console.log(
        account && recentWinner && account,
        recentWinner,
        recentWinner == account
      );
    } else {
      console.log("install metamask");
    }
  };

  const enterToLotteryGame = async () => {
    // const tx = {
    //   from: account,
    //   // gasLimit: ethers.utils.hexlify(gas_limit), // 100000
    //   // gasPrice: gas_price,
    // };
    console.log("enter");

    const tx = await lotteryContract.enter({
      value: entranceFee.toString(),
    });
    console.log(tx);
  };

  const isWinner = () => {
    console.log(recentWinner);
    // if (recentWinner !== "" && recentWinner !== undefined) {

    // }
  };

  useEffect(() => {
    // isWinner();
  }, [account]);

  return (
    <div className="container">
      <Navbar
        account={account}
        connectToMetamask={connectToMetamask}
        recentWinner={recentWinner}
      />
      <Timer activatedStatus={activatedStatus}/>
      <Hero
        account={account}
        connectToMetamask={connectToMetamask}
        enterToLotteryGame={enterToLotteryGame}
        activatedStatus={activatedStatus}
        entranceFee={entranceFee}
        participants={participants}
        recentWinner={recentWinner}
        isWinner={isWinner}
      />
    </div>
  );
}

export default App;

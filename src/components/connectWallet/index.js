import React, { useState } from "react";
import { ethers } from "ethers";
import Image from "next/image";

const WalletCard = () => {
  const [errorMessage, setErrorMessage] = useState(null);
  const [defaultAccount, setDefaultAccount] = useState(null);
  const [userBalance, setUserBalance] = useState(null);
  const [connButtonText, setConnButtonText] = useState("Connect Wallet");

  const connectWalletHandler = () => {
    if (window.ethereum && window.ethereum.isMetaMask) {
      console.log("MetaMask Here!");

      window.ethereum
        .request({ method: "eth_requestAccounts" })
        .then((result) => {
          accountChangedHandler(result[0]);
          setConnButtonText("Wallet Connected");
          getAccountBalance(result[0]);
        })
        .catch((error) => {
          setErrorMessage(error.message);
        });
    } else {
      console.log("Need to install MetaMask");
      setErrorMessage("Please install MetaMask browser extension to interact");
    }
  };

  // update account, will cause component re-render
  const accountChangedHandler = (newAccount) => {
    setDefaultAccount(newAccount);
    getAccountBalance(newAccount.toString());
  };

  const getAccountBalance = (account) => {
    window.ethereum
      .request({ method: "eth_getBalance", params: [account, "latest"] })
      .then((balance) => {
        setUserBalance(ethers.utils?.formatEther(balance));
      })
      .catch((error) => {
        //setErrorMessage(error.message);
      });
  };

  const chainChangedHandler = () => {
    // reload the page to avoid any errors with chain change mid use of application
    window.location.reload();
  };
  if (typeof window !== "undefined") {
    // listen for account changes
    window.ethereum?.on("accountsChanged", accountChangedHandler);

    window.ethereum?.on("chainChanged", chainChangedHandler);
  }

  return (
    <div className="py-3 px-4 shadow-smshadow rounded-xl bg-white">
      <div className="flex-box mb-3">
        <h4 className="p-lg font-semibold"> {"Connection to MetaMask"} </h4>
        <Image src="/images/metamask-logo.png" alt="" width={42} height={42} />
      </div>
      <button className="btn secondary bg-textcolor mb-3" onClick={connectWalletHandler}>
        {connButtonText}
      </button>
      {/* <div className='accountDisplay'>
				<h3>Address: {defaultAccount}</h3>
			</div>
			<div className='balanceDisplay'>
				<h3>Balance: {userBalance}</h3>
			</div> */}
      {/* {
                defaultAccount && 'wallet connected successfully'
            } */}
      {errorMessage && <p className="p-sm text-red600">{errorMessage}</p>}
    </div>
  );
};

export default WalletCard;

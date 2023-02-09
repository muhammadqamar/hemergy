import React, {useState} from 'react'
import {ethers} from 'ethers'
import axios from 'axios';

const WalletCard = (props) => {
   const {userDetail, setConnButtonText,connButtonText, setErrorMessage,setDefaultAccount,setUserBalance, errorMessage} = props

	const connectWalletHandler = () => {
		if (window.ethereum && window.ethereum.isMetaMask) {
			console.log('MetaMask Here!');

			window.ethereum.request({ method: 'eth_requestAccounts'})
			.then(async (result) => {
                console.log(result)
                var resulter = []
                if(userDetail?.user?.wallets) {
                    resulter =[...userDetail?.user?.wallets,{provide:'Metamusk', value:result[0]}]
                } else {
                    resulter =[{provider:'MetaMask', value:result[0]}]
                }
               // try {
                    const updateWallet = await axios.post(
                      `http://localhost:4000/api/user/wallet`,
                      { wallet : resulter, email: userDetail?.email || 'muhammadqamar111@gmail.com'  }
                    );



                //   } catch (error) {

                //   }
				accountChangedHandler(result[0]);
				setConnButtonText('Wallet Connected');
				getAccountBalance(result[0]);
			})
			.catch(error => {
				setErrorMessage(error.message);

			});

		} else {
			console.log('Need to install MetaMask');
			setErrorMessage('Please install MetaMask browser extension to interact');
		}
	}

	// update account, will cause component re-render
	const accountChangedHandler = (newAccount) => {
		setDefaultAccount(newAccount);
		getAccountBalance(newAccount.toString());
	}

	const getAccountBalance = (account) => {
		window.ethereum.request({method: 'eth_getBalance', params: [account, 'latest']})
		.then(balance => {
			setUserBalance(ethers.utils?.formatEther(balance));
		})
		.catch(error => {
			//setErrorMessage(error.message);
		});
	};

	const chainChangedHandler = () => {
		// reload the page to avoid any errors with chain change mid use of application
		window.location.reload();
	}
   if(typeof window !== 'undefined' ) {
	// listen for account changes
	window.ethereum?.on('accountsChanged', accountChangedHandler);

	window.ethereum?.on('chainChanged', chainChangedHandler);

   }


	return (
		<div className='p-2 border-1 rounded-2 border-text'>
		<h4> {"Connection to MetaMask"} </h4>
			<button type="button" onClick={connectWalletHandler}>{connButtonText}</button>
			{/* <div className='accountDisplay'>
				<h3>Address: {defaultAccount}</h3>
			</div>
			<div className='balanceDisplay'>
				<h3>Balance: {userBalance}</h3>
			</div> */}
            {/* {
                defaultAccount && 'wallet connected successfully'
            } */}
			{errorMessage && <p>{errorMessage}</p>}
		</div>
	);
}

export default WalletCard;
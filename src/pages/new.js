import Web3 from "web3";
import Web3Modal from "web3modal";
import WalletConnectProvider from "@walletconnect/web3-provider";
import { ethers } from "ethers";

export default function test() {
	return (
		<button onClick={async () => {
			const providerOptions = {
				walletconnect: {

					package: WalletConnectProvider,
					options: {
						infuraId: "INFURA_ID" // required
					}
				}
			};



			  const web3Modal = new Web3Modal({
				network: "mainnet", // optional
				cacheProvider: true, // optional
				providerOptions // required
			  });

			  const instance = await web3Modal.connect();

			  const provider = new ethers.providers.Web3Provider(instance);
		}}>
			connect
		</button>
	);
}

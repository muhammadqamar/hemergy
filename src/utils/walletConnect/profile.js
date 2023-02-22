import { useEffect } from "react";
import { useAccount, useConnect, useDisconnect, useEnsAvatar, useEnsName } from "wagmi";
import Image from "next/image";
export default function Profile({ setviewAllWallet, viewAllWallet, setisMaskConnected }) {
  const { address, connector, isConnected } = useAccount();
  const { data: ensAvatar } = useEnsAvatar({ address });
  const { data: ensName } = useEnsName({ address });
  const { connect, connectors, error, isLoading, pendingConnector } = useConnect();
  const { disconnect } = useDisconnect();

  // useEffect(() => {
  if (isConnected) {
    setisMaskConnected(true);
    var walletMask;
    if (connector?.id === "metaMask") {
      walletMask = "/images/metamask.svg";
    }
    if (connector?.id === "coinbaseWallet") {
      walletMask = "/images/zerion.svg";
    }
    if (connector?.id === "walletConnect") {
      walletMask = "/images/ledger.svg";
    }
    return (
      <div className="flex justify-between items-center">
        <div className="flex gap-4 items-center">
          <Image src={walletMask} alt="logo" width={64} height={64} />
          <div className="truncate w-28">{ensName ? `${ensName} (${address})` : address}</div>
        </div>

        {/* <div>Connected to {connector?.name}</div> */}
        <button
          className="p-sm-semi  text-textcolor"
          onClick={() => {
            disconnect();
            setisMaskConnected(false);
          }}
        >
          Replace
        </button>
      </div>
    );
  } else {
    setisMaskConnected(false);
  }
  // }, [isConnected]);

  return (
    <div>
      {/* {connectors.map((connector) => (
        <button
          disabled={!connector.ready}
          key={connector.id}
          onClick={() => connect({ connector })}
        >
          {connector.name}
          {!connector.ready && " (unsupported)"}
          {isLoading && connector.id === pendingConnector?.id && " (connecting)"}
        </button>
      ))} */}

      {/* {error && <div>{error.message}</div>} */}

      <div className="flex flex-wrap gap-5">
        {connectors.map((connector) => {
          var walletMask;
          if (connector.id === "metaMask") {
            walletMask = "/images/metamask.svg";
          }
          if (connector.id === "coinbaseWallet") {
            walletMask = "/images/zerion.svg";
          }
          if (connector.id === "walletConnect") {
            walletMask = "/images/ledger.svg";
          }

          return (
            <div
              className="flex items-center gap-0.5  flex-col"
              key={connector.id}
              onClick={() => connect({ connector })}
            >
              <Image src={walletMask} alt="logo" width={64} height={64} />
              <p className="p-sm-semi font-medium text-textblack">{connector.name}</p>
            </div>
          );
        })}

        {!viewAllWallet && (
          <div
            className="flex items-center gap-0.5 flex-col"
            onClick={() => {
              setviewAllWallet(true);
            }}
          >
            <Image src="/images/allWallet.svg" alt="logo" width={64} height={64} />
            <p className="p-sm-semi font-medium text-textblack">View all</p>
          </div>
        )}
      </div>
    </div>
  );
}

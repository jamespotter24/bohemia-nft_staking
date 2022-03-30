import { PublicKey } from "@solana/web3.js";
import { getEarningsPerDay } from "../../lib/staking/util";
import NFT from "./NFT";

const UnstakedNFT = ({
  title,
  NFTs,
  callback,
  isStaking,
  loading,
  getStakingInfo,
}: {
  title: string;
  NFTs: any[];
  callback: any;
  getStakingInfo: any;
  isStaking: boolean;
  loading: boolean;
}) => {
  return (
   
    <div className="flex flex-nowrap overflow-x-auto overflow-y-hidden mt-10">
      {NFTs.map(
        (e: {
          name: string;
          image: string;
          mint: PublicKey;
          pubkey: PublicKey;
          farmId: PublicKey;
          farmer: any;
        }) => {
          const earningsPerDay = getEarningsPerDay(e.farmer, e.mint);

          return (
            <div className="w-1/3">
              <NFT
                  nft={e}
                  callback={callback}
                  isStaking={isStaking}
                  earningsPerDay={earningsPerDay}
                  loading={loading}
                  getStakingInfo={getStakingInfo}
                  farmer={e.farmer}
                />
            </div>
          );
        }
      )}
    </div>
  
  );
};

export default UnstakedNFT;

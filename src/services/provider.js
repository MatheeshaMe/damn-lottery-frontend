import { ethers } from "ethers";
import { alchemyWebScoketUrl } from "../config";

export const provier = () => {
  const provider = new ethers.providers.Web3Provider(window.ethereum);
  return provider;
};

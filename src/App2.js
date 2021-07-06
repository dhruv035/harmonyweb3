import { ethers } from "ethers";
import { formatEther } from "ethers/lib/utils";
import { useState, useEffect } from "react";
import { isInt } from "@harmony-js/utils";
const { HarmonyExtension } = require("@harmony-js/core");

//let provider = new ethers.providers.Web3Provider(window.onewallet);
export default function App2() {
  useEffect(() => {}, []);
  async function init() {
    await window.ethereum.request({ method: "eth_requestAccounts" });
  }
  init();
  return <div></div>;
}

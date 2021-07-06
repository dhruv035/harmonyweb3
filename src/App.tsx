import React from "react";
import logo from "./logo.svg";
import "./App.css";
import Dashboard from "./Dashboard";
import { Harmony } from "@harmony-js/core";
import App2 from "./App2";
import {
  ChainID,
  ChainType,
  hexToNumber,
  numberToHex,
  fromWei,
  Units,
  Unit
} from "@harmony-js/utils";
import Account from "./account";

const API = "https://api.s0.b.hmny.io/";
//const add = "one1qdeyt5kaee5rgdjjpm7ggkgwrahmqsland7k4t";
function App() {
  async function ABC(add: string) {
    let response = await hmy.blockchain.getBalance({ address: add });
    console.log(
      "balance in ONEs: " + fromWei(hexToNumber(response.result), Units.one)
    );
  }
  const hmy = new Harmony(API, {
    chainType: ChainType.Harmony,
    chainId: ChainID.HmyTestnet
  });
  //console.log("TRYING ");
  // ABC(add);
  return (
    <div>
      <Account />
    </div>
  );
}

export default App;

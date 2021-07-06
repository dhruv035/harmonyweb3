import async from "async";

import { OneWalletConnector } from "@harmony-react/onewallet-connector";
import { MathWalletConnector } from "@harmony-react/mathwallet-connector";
import { InjectedConnector } from "@web3-react/injected-connector";
import { Hmy } from "@harmony-utils/wrappers";

const Dispatcher = require("flux").Dispatcher;
const Emitter = require("events").EventEmitter;

const dispatcher = new Dispatcher();
const emitter = new Emitter();

class Store {
  constructor() {
    const hmy = new Hmy("testnet");
    const onewallet = new OneWalletConnector({ chainId: hmy.client.chainId });
    const mathwallet = new MathWalletConnector({ chainId: hmy.client.chainId });
    const injected = new InjectedConnector({
      supportedChainIds: [1, 3, 4, 5, 42, hmy.client.chainId]
    });

    this.store = {
      votingStatus: false,
      governanceContractVersion: 2,
      currentBlock: 0,
      universalGasPrice: "70",
      account: {},
      hmy: hmy,
      web3: null,
      web3context: null,
      connectorsByName: {
        OneWallet: onewallet,
        MathWallet: mathwallet,
        Metamask: injected
      },

      languages: [
        {
          language: "English",
          code: "en"
        }
      ]
    };
  }

  getStore(index) {
    return this.store[index];
  }

  setStore(obj) {
    this.store = { ...this.store, ...obj };
    return emitter.emit("StoreUpdated");
  }

  configure = async () => {
    const hmy = store.getStore("hmy");
    let currentBlock = await hmy.getBlockNumber();

    store.setStore({ currentBlock: currentBlock });

    window.setTimeout(() => {
      emitter.emit("CONFIGURE_RETURNED");
    }, 100);
  };
}

const store = new Store();
const stores = {
  store: store,
  emitter: emitter
};
export default stores;

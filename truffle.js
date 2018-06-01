// require('dotenv').config();
// const Web3 = require("web3");
// const web3 = new Web3();
// const WalletProvider = require("truffle-wallet-provider");
// const Wallet = require('ethereumjs-wallet');
//
// var mainNetPrivateKey = new Buffer(process.env["MAINNET_PRIVATE_KEY"], "hex")
// var mainNetWallet = Wallet.fromPrivateKey(mainNetPrivateKey);
// var mainNetProvider = new WalletProvider(mainNetWallet, "https://mainnet.infura.io/");
//
// var ropstenPrivateKey = new Buffer(process.env["ROPSTEN_PRIVATE_KEY"], "hex")
// var ropstenWallet = Wallet.fromPrivateKey(ropstenPrivateKey);
// var ropstenProvider = new WalletProvider(ropstenWallet, "https://ropsten.infura.io/");
//
//
// module.exports = {
//   migrations_directory: "./migrations",
//   networks: {
//     development: {
//       host: "localhost",
//       port: 8545,
//       network_id: "*"
//     },
//     ropsten: {
//       provider: ropstenProvider,
//       // You can get the current gasLimit by running
//       // truffle deploy --network rinkeby
//       // truffle(rinkeby)> web3.eth.getBlock("pending", (error, result) =>
//       //   console.log(result.gasLimit))
//       gas: 4700000,
//       gasPrice: web3.toWei("20", "gwei"),
//       network_id: "3",
//     },
//     mainnet: {
//       provider: mainNetProvider,
//       gas: 7990000,
//       gasPrice: web3.toWei("20", "gwei"),
//       network_id: "1",
//     }
//   }
// };

module.exports = {
  migrations_directory: "./migrations",
  networks: {
    development: {
      host: "localhost",
      port: 8545,
      network_id: "*"
    }
  }
};

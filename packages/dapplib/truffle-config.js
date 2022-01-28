require('@babel/register');
({
    ignore: /node_modules/
});
require('@babel/polyfill');

const HDWalletProvider = require('@truffle/hdwallet-provider');

let mnemonic = 'kidney clog tackle venture strong rival muscle purchase install civil army giant'; 
let testAccounts = [
"0xe5a1fb214cd4130eaa284d098025aa4a857b65fb29dc98aa293f3a2fed27928a",
"0xec3f1e713c1b0c35db61ce0cdb931fa64cb27e0d9174149244b6d9eedf245abd",
"0xe20454c11fc1ad4d46af4b7f463011e3b36e207fe5f1d3113233d36f0dd528a0",
"0xeab65da3038626cf5b0cdcd0bb9df9bd990404ff4c973e5c6d302524d0d2306e",
"0x5f605c87dfcd9889438ab68e0fae5f162c3d2e9dff67b775944db3c0c2c1a86b",
"0xb85c3efaa0a6707d4cf2ca3cb1424db3ef1adba6baa427b532b8b76944968ce8",
"0xed15fe1cb227800620d14f74e39019b7e0a0ae14911bf7b5ccc31f4b5ee8fda8",
"0xb24d162ced03d08c74fe70113e0cd0df06541bac7cab4362af4be71b41552da9",
"0x1a167b3ea36235566afec23e4e9586fc30e7a97e593f8dd5eed4737ece42b8f9",
"0x12897b47385e60220d08ac683987ba6adaea85abb2143893a9045d17b5f0658a"
]; 
let devUri = 'http://127.0.0.1:7545/';

module.exports = {
    testAccounts,
    mnemonic,
    networks: {
        development: {
            uri: devUri,
            provider: () => new HDWalletProvider(
                mnemonic,
                devUri, // provider url
                0, // address index
                10, // number of addresses
                true, // share nonce
                `m/44'/60'/0'/0/` // wallet HD path
            ),
            network_id: '*'
        }
    },
    compilers: {
        solc: {
            version: '^0.8.0'
        }
    }
};


require('@babel/register');
({
    ignore: /node_modules/
});
require('@babel/polyfill');

const HDWalletProvider = require('@truffle/hdwallet-provider');

let mnemonic = 'grid process orient venture stomach rival punch pulse install hat army gas'; 
let testAccounts = [
"0x2a0c2fd8589870a43001e6cbeb4a7102edf563531c940415e25f4a552f2f3c87",
"0x338b312417f58ef9a318bf7aaa945796087e3e90809c40994fa6de734e96d12c",
"0x44429a54aa84f3036da99c2afe2528ea3d2d9fe5cb9050afeb1a040b2fb5d91d",
"0xa552d6705e591380390198675f41c05a7ff591ffca9e91212466ca3cf9d2ffef",
"0xe18fa2374f4a20d7e950366600a1ed8776b64f7828afbed0cae64ee9dc496833",
"0xd6d8e12ad1184e839d124e1cd7f745268322f359e44a18c166d4a65470ee24bd",
"0xc7159b519584cce50756b7a490cbde59e11fb2bdfb864a58886802aef1c9f35d",
"0xba0961d49b18cca070439e814fdcaa16e2360b25247ab38e10849a04bfbd70c6",
"0xe822f727e7ecc35d5ce6c5b8b3bbdc8aaee6ea23db754a9bd97962956d5021c7",
"0x282b3a7d91807c7f890edc0d7a9f78b9184b9fe6024665461f2830cf614671e7"
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
            version: '^0.5.11'
        }
    }
};

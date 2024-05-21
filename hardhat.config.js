require('dotenv').config();

require('@nomiclabs/hardhat-etherscan');
require('@nomiclabs/hardhat-waffle');
require('hardhat-gas-reporter');
require('solidity-coverage');

task('accounts', 'Prints the list of accounts', async (taskArgs, hre) => {
  const accounts = await hre.ethers.getSigners();

  for (const account of accounts) {
    console.log(account.address);
  }
});

module.exports = {
  solidity: '0.8.4',
  networks: {
    mumbai: {
      url: "https://polygon-mumbai.g.alchemy.com/v2/zFPyVeVDHGczPRcm88_vAqz2Ynqf9VhA",
      accounts: ["afa74ff0981da31bf1ceb37a0b5112195b8416078ca038924d1462a93acc45a1"],
    },
  },
  gasReporter: {
    enabled: process.env.REPORT_GAS !== undefined,
    currency: 'USD',
  },
  etherscan: {
    apiKey: process.env.POLYSCAN_API_KEY,
  },
};

require("dotenv").config();
require("@nomicfoundation/hardhat-toolbox");

module.exports = {
  solidity: "0.8.20",
  networks: {
    goerli: {
      url: `${process.env.API_URL}`,
      accounts: [`0x${process.env.PRIVATE_KEY}`],
    },
  },
};

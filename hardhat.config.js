require("dotenv").config({ path: ".env" });
require("@nomicfoundation/hardhat-toolbox");

const APIURL = process.env.API_URL;
const PRIVATE_Key = process.env.PRIVATE_KEY;

module.exports = {
  solidity: "0.8.20",
  networks: {
    goerli: {
      url: APIURL,
      accounts: [PRIVATE_Key],
    },
  },
};

const hre = require("hardhat");
require("dotenv").config({ path: ".env" });
async function main() {
  const metadataURL = process.env.METADATA_URL;

  const MyNFT = await hre.ethers.getContractAt("MyNft", [metadataURL]);

  await MyNFT.waitForDeployment();

  console.log("Contract deployed to address:", MyNFT.target);
}

main()
  .then(() => process.exit(0))
  .catch((error) => {
    console.error(error);
    process.exit(1);
  });

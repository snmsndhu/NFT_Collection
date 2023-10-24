const hre = require("hardhat");
require("dotenv").config({ path: ".env" });
async function main() {
  const metadataURL = process.env.METADATA_URL;
  const [deployer] = await ethers.getSigners();

  const MyNFT = await hre.ethers.deployContract("MyNft", [
    deployer,
    metadataURL,
  ]);

  await MyNFT.waitForDeployment();

  console.log("Contract deployed to address:", await MyNFT.getAddress());
}

main()
  .then(() => process.exit(0))
  .catch((error) => {
    console.error(error);
    process.exit(1);
  });

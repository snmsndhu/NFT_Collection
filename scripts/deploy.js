const hre = require("hardhat");
async function main() {
  const metadataURL = "";

  const MyNFT = await hre.ethers.deployContract("MyNft", [metadataURL]);

  await MyNFT.waitForDeployment();

  console.log("Contract deployed to address:", MyNFT.target);
}

main()
  .then(() => process.exit(0))
  .catch((error) => {
    console.error(error);
    process.exit(1);
  });

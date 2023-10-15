// SPDX-License-Identifier: MIT
pragma solidity ^0.8.9;

import "@openzeppelin/contracts/token/ERC721/ERC721.sol";
import "@openzeppelin/contracts/access/Ownable.sol";
import "@openzeppelin/contracts/token/ERC721/extensions/ERC721URIStorage.sol";

contract MyNft is ERC721URIStorage, Ownable {
   uint256 private _tokenIdCounter;
    constructor() ERC721("MyNFT", "NFT"){}

    function mintNFT(address recipent, string memory tokenURI)
    public onlyOwner
    returns (uint256) {
       uint256 newItemId = _tokenIdCounter;
        _mint(recipent, newItemId);
        _setTokenURI(newItemId, tokenURI);
        return newItemId;
    }
}
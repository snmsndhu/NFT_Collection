// SPDX-License-Identifier: MIT
pragma solidity ^0.8.20;

import "@openzeppelin/contracts/token/ERC721/ERC721.sol";
import {ERC721URIStorage} from "@openzeppelin/contracts/token/ERC721/extensions/ERC721URIStorage.sol";
contract MyNft is ERC721URIStorage {
   uint256 private _tokenIdCounter;
    constructor() ERC721("MyNFT", "NFT"){}

    function mintNFT(address recipent, string memory tokenURI)
    public 
    returns (uint256) {
       uint256 newItemId = _tokenIdCounter++;
        _mint(recipent, newItemId);
        _setTokenURI(newItemId, tokenURI);
        return newItemId;
    }

    function generateCharacter(uint256 _tokenIdCounter) public returns (string memory) {
        bytes memory svg = abi.encodePacked(
            '<svg width="500" height="500" xmlns="http://www.w3.org/2000/svg">'
            '<rect width="100%" height="100%" fill="black" />'
            '<text x="50%" y="50%" fill="white" font-size="48" text-anchor="middle">Your Name</text>'
            '</svg>'
            );
            return string(abi.encodePacked(
            ));
    }
}
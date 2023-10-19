// SPDX-License-Identifier: MIT
pragma solidity ^0.8.20;

import "@openzeppelin/contracts/token/ERC721/extensions/ERC721Enumerable.sol";
import "@openzeppelin/contracts/token/ERC721/ERC721.sol";
import "@openzeppelin/contracts/access/Ownable.sol";
import "@openzeppelin/contracts/utils/Strings.sol";
contract MyNft is ERC721Enumerable, Ownable {
   using Strings for uint256;

   string _baseTokenURI;
   
   address public _owner = msg.sender;

   uint256 public _price = 0.01 ether;

   bool public _paused;

   uint256 public maxTokenIds = 10;

   uint256 public tokenIds;

   modifier onlyWhenNotPaused {
    require(!_paused, "contract currently paused");
    _;
   }
    constructor(string memory baseURI, address initialOwner) ERC721("MyNFT", "NFT"){
        _baseTokenURI = baseURI;
        _owner = initialOwner;
    }

    function mintNFT() public payable onlyWhenNotPaused {
        require(tokenIds < maxTokenIds, "Exceed maximum supply");
        require(msg.value >= _price, "Ether sent is not correct");
        tokenIds += 1;
        _safeMint(msg.sender, tokenIds);
    } 

    function _baseURI() internal view virtual override returns (string memory) {
        return _baseTokenURI;
    }

     function tokenURI(uint256 tokenId) public view virtual override returns (string memory) {
        require(_requireOwned(tokenId), "ERC721Metadata: URI query for nonexistent token");

        string memory baseURI = _baseURI();

        return bytes(baseURI).length > 0 ? string(abi.encodePacked(baseURI, tokenId.toString(),".json")): "";
    }

    function setPaused(bool val) public onlyOwner {
        _paused = val;
    }

    function withdraw() public onlyOwner {
        address _owner = owner();
        uint256 amount = address(this).balance;
        (bool sent,) = _owner.call{value: amount} ("");
        require(sent, "Failed to send Ethers");
    }

    receive() external payable {}

    fallback() external payable {}
}
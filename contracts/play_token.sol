// SPDX-License-Identifier: MIT

pragma solidity >=0.6.0 <0.8.0;

import {
    ReentrancyGuard
} from "@openzeppelin/contracts/utils/ReentrancyGuard.sol";
// import "@openzeppelin/contracts/token/ERC20/IERC20.sol";
// import "@openzeppelin/contracts/token/ERC20/SafeERC20.sol";
import "@openzeppelin/contracts/token/ERC20/ERC20.sol";
// import "@openzeppelin/contracts/access/Ownable.sol";
import "hardhat/console.sol";

contract PlayToken is ERC20 {
    constructor(uint256 initialSupply) public ERC20("PlayToken", "PLY") {
        _mint(msg.sender, initialSupply);
    }

    function depositETH(address from) external payable {
        require(from != address(0), "invalid address");
        console.log(from, "depositETH", msg.value);
    }

    // debug purpose only, therefore we don't check balance
    function withdrawETH(address payable to, uint128 amount)
        external
        nonReentrant
        onlyOwner
    {
        require(to != address(0), "invalid address");
        (bool success, ) = to.call{value: amount}("");
        require(success, "withdrawETH"); // ETH withdraw failed
        console.log(to, "withdrawETH", amount);
    }
}

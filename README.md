# AVATA Smart contracts
## Installation
```bash
$ npm use
```

```bash
$ npm install
```

## Development

### Creating smart contract
Create your smart contract in `contracts/` folder 

### Compilation
Set solidity version in hardhat.config.ts file, solidity -> compilers -> version, then run compilation

```bash
$ npx hardhat compile
```

### Deploy to blockchain

Set blockchain node url or api provider url and account private key in hardhat.config.ts file, networks section.
You can run hardhat local node for development and testing purposes with command:
```bash
$ npx hardhat node
```
Run deployment script with network parameter, chosen from networks section of hardhat.config.ts file
```bash
$ npx hardhat run scripts/${CONTRACT}.script.ts --network NETWORK
```
### Running tests
Create your tests in test folder
Run tests with command:
```bash
$ npx hardhat test TEST_PATH
```
### Verify contract
```bash
npx hardhat verify --contract CONTRACT_PATH:CONTRACT_NAME --network NETWORK CONTRACT_TO_VERIFY CONSTRUCTOR_PARAMS
```

## Documentation

### ERC20

This is basic ERC20 contract with small modification of initial supply

```
constructor(
    string memory name_,
    string memory symbol_,
    uint256 initialSupply_,
    uint256 totalCap
) ERC20Capped(totalCap_) ERC20(name_, symbol_) {
    ERC20._mint(msg.sender, initialSupply_);
}
```
## Useful links
1. Hardhat documentation:
https://hardhat.org/getting-started/
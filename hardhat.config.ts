import { config as dotEnvConfig } from 'dotenv'
import * as dotenv from 'dotenv'

dotEnvConfig()
dotenv.config({ path: __dirname + '/.env' })

import { HardhatUserConfig } from 'hardhat/types'
import { task } from 'hardhat/config'

import '@nomiclabs/hardhat-waffle'
import '@typechain/hardhat'
import 'hardhat-abi-exporter'
import '@nomiclabs/hardhat-etherscan'
import '@openzeppelin/hardhat-upgrades'
import 'solidity-coverage'

task('accounts', 'Prints the list of accounts', async (taskArgs, hre) => {
    const accounts = await hre.ethers.getSigners()
    for (const account of accounts) {
        console.log(account.address)
    }
})

const config: HardhatUserConfig = {
    defaultNetwork: 'hardhat',
    solidity: {
        compilers: [
            {
                version: '0.8.12',
                settings: {
                    optimizer: {
                        enabled: true,
                        runs: 1000,
                    },
                },
            },
        ],
    },
    networks: {
        hardhat: {},
        localhost: {
            url: 'http://127.0.0.1:8545',
        },
        ropsten: {
            url: 'https://ropsten.infura.io/v3/eca6055033dc470bad59294fc368261b',
            accounts: [
                process.env.ACCOUNT_FOR_DEPLOY ||
                    '0x0000000000000000000000000000000000000000000000000000000000000000',
            ],
        },
        avalanche: {
            url: 'https://api.avax.network/ext/bc/C/rpc',
            gasMultiplier: 2,
            accounts: [
                process.env.ACCOUNT_FOR_DEPLOY ||
                    '0x0000000000000000000000000000000000000000000000000000000000000000',
            ],
        },
        fuji: {
            url: 'https://api.avax-test.network/ext/bc/C/rpc',
            gasMultiplier: 2,
            accounts: [
                process.env.ACCOUNT_FOR_DEPLOY ||
                    '0x0000000000000000000000000000000000000000000000000000000000000000',
            ],
        },
    },
    etherscan: {
        apiKey: process.env.API_KEY_ETHERSCAN || 'API_KEY_WEB',
    },
    abiExporter: {
        path: './abis',
        runOnCompile: true,
        clear: true,
        flat: true,
        only: [],
        spacing: 2,
        pretty: true,
    },
}

export default config

import { ChainId } from '@aave/contract-helpers';
import * as markets from '@bgd-labs/aave-address-book';
import { ReactNode } from 'react';

// Enable for premissioned market
// import { PermissionView } from 'src/components/transactions/FlowCommons/PermissionView';

const marketsScrollExtended = {
  ...markets,
  AaveV3ScrollAlpha: {
    POOL_ADDRESSES_PROVIDER: '0xCA35Ae4cc948Dae8a1d3C77ed1C5CBC2e73b290D', // used PoolAddressesProvider-Aave
    POOL: '0x556345b249008Bf2f52B7097ceB5bE798F32dAe9', // used Pool-Proxy-Aave here
    POOL_CONFIGURATOR: '0x88A4811E6009ad13EA879261806E5a6071F3F788', // used PoolConfigurator-Proxy-Aave here
    ORACLE: '0x269D5C1854fcA3bede6BFc8935118c99020b13f0',
    AAVE_PROTOCOL_DATA_PROVIDER: '0x36002d10bB238594c58aec104620555a545D517C', // used PoolDataProvider-Aave here
    ACL_MANAGER: '0x550CC76fD6C4E4502cB4F79f26ee15f4E4681D57',
    ACL_ADMIN: '0x8A52430a0a83d2bA00A88758340e4b640BDfC4FC',
    // COLLECTOR: '0x026E3e3363843e16e3D6d21e068c981A4F55e5d2',
    // COLLECTOR_CONTROLLER: '0xD7eFB74039B8f2B4Eb08C2a6bef64B40F196395B',
    // DEFAULT_INCENTIVES_CONTROLLER: '0x062BB55A42875366DB1B7D227B73621C33a6cB6b',
    DEFAULT_A_TOKEN_IMPL_REV_1: '0xf7798f65d3d1A1Af1a68d8B4322638559A47bC83', //use AToken-Aave here not DelegationAwareAToken-Aave
    DEFAULT_VARIABLE_DEBT_TOKEN_IMPL_REV_1: '0xF087700794eb98b193D8f95fFEc0E1a02e195e28',
    DEFAULT_STABLE_DEBT_TOKEN_IMPL_REV_1: '0x2bb98A7F11a81AE07443f192Daae04f815F2c878',
    CHAIN_ID: 534353,
    EMISSION_MANAGER: '0x41A9A5615a912E47F99e16484880009c7c65707b',
    WETH_GATEWAY: '0x410Fda971c841Aaf34be5F5539b40503c7F12AC2', //trying WrappedTokenGatewayV3 here
    FAUCET: '0x55530C4E1ADFf14cB5760C6750FeBFbEB57E6753',
    WALLET_BALANCE_PROVIDER: '0x2B45F4A959B5Fc8fc22b457424685f17eDae4592',
    UI_POOL_DATA_PROVIDER: '0x45dFc7A61AD24918C9315733223fD1e55E9B2B59',
    UI_INCENTIVE_DATA_PROVIDER: '0x109e475c0Bf9E525dABB65A4Aec07c1e65100a99',
    L2_ENCODER: '0x997a8208902e1259dDf676Eb37FeD31A2f77110B',
  },
};

export type MarketDataType = {
  v3?: boolean;
  marketTitle: string;
  // the network the market operates on
  chainId: ChainId;
  enabledFeatures?: {
    liquiditySwap?: boolean;
    staking?: boolean;
    governance?: boolean;
    faucet?: boolean;
    collateralRepay?: boolean;
    incentives?: boolean;
    permissions?: boolean;
  };
  isFork?: boolean;
  permissionComponent?: ReactNode;
  disableCharts?: boolean;
  addresses: {
    LENDING_POOL_ADDRESS_PROVIDER: string;
    LENDING_POOL: string;
    WETH_GATEWAY?: string;
    SWAP_COLLATERAL_ADAPTER?: string;
    REPAY_WITH_COLLATERAL_ADAPTER?: string;
    FAUCET?: string;
    PERMISSION_MANAGER?: string;
    WALLET_BALANCE_PROVIDER: string;
    L2_ENCODER?: string;
    UI_POOL_DATA_PROVIDER: string;
    UI_INCENTIVE_DATA_PROVIDER?: string;
    COLLECTOR?: string;
    V3_MIGRATOR?: string;
  };
  /**
   * https://www.hal.xyz/ has integrated aave for healtfactor warning notification
   * the integration doesn't follow aave market naming & only supports a subset of markets.
   * When a halIntegration is specified a link to hal will be displayed on the ui.
   */
  halIntegration?: {
    URL: string;
    marketName: string;
  };
};

export enum CustomMarket {
  // v3 test networks, all v3.0.1 with permissioned faucet
  proto_arbitrum_goerli_v3 = 'proto_arbitrum_goerli_v3',
  proto_mumbai_v3 = 'proto_mumbai_v3',
  proto_fantom_testnet_v3 = 'proto_fantom_testnet_v3',
  proto_fuji_v3 = 'proto_fuji_v3',
  proto_goerli_v3 = 'proto_goerli_v3',
  proto_optimism_goerli_v3 = 'proto_optimism_goerli_v3',
  proto_scroll_alpha_v3 = 'proto_scroll_alpha_v3',
  proto_sepolia_v3 = 'proto_sepolia_v3',
  // v3 mainnets
  proto_mainnet_v3 = 'proto_mainnet_v3',
  proto_optimism_v3 = 'proto_optimism_v3',
  proto_fantom_v3 = 'proto_fantom_v3',
  proto_harmony_v3 = 'proto_harmony_v3',
  proto_avalanche_v3 = 'proto_avalanche_v3',
  proto_polygon_v3 = 'proto_polygon_v3',
  proto_arbitrum_v3 = 'proto_arbitrum_v3',
  // proto_ethereum_v3_1 = 'proto_ethereum_v3_1',
  // v2
  proto_mainnet = 'proto_mainnet',
  proto_avalanche = 'proto_avalanche',
  proto_fuji = 'proto_fuji',
  proto_polygon = 'proto_polygon',
  proto_mumbai = 'proto_mumbai',
  amm_mainnet = 'amm_mainnet',
  proto_goerli = 'proto_goerli',
  // external
  // permissioned_market = 'permissioned_market',
}

export const marketsData: {
  [key in keyof typeof CustomMarket]: MarketDataType;
} = {
  [CustomMarket.proto_mainnet_v3]: {
    marketTitle: 'Ethereum',
    chainId: ChainId.mainnet,
    v3: true,
    enabledFeatures: {
      governance: true,
      staking: true,
      liquiditySwap: true,
      collateralRepay: true,
      incentives: true,
    },
    addresses: {
      LENDING_POOL_ADDRESS_PROVIDER: markets.AaveV3Ethereum.POOL_ADDRESSES_PROVIDER,
      LENDING_POOL: markets.AaveV3Ethereum.POOL,
      WETH_GATEWAY: markets.AaveV3Ethereum.WETH_GATEWAY,
      REPAY_WITH_COLLATERAL_ADAPTER: markets.AaveV3Ethereum.REPAY_WITH_COLLATERAL_ADAPTER,
      SWAP_COLLATERAL_ADAPTER: markets.AaveV3Ethereum.SWAP_COLLATERAL_ADAPTER,
      WALLET_BALANCE_PROVIDER: markets.AaveV3Ethereum.WALLET_BALANCE_PROVIDER,
      UI_POOL_DATA_PROVIDER: markets.AaveV3Ethereum.UI_POOL_DATA_PROVIDER,
      UI_INCENTIVE_DATA_PROVIDER: markets.AaveV3Ethereum.UI_INCENTIVE_DATA_PROVIDER,
      COLLECTOR: markets.AaveV3Ethereum.COLLECTOR,
    },
    // halIntegration: {
    //   URL: 'https://app.hal.xyz/recipes/aave-track-your-health-factor',
    //   marketName: 'aavev3',
    // },
  },
  [CustomMarket.proto_mainnet]: {
    marketTitle: 'Ethereum',
    chainId: ChainId.mainnet,
    enabledFeatures: {
      governance: true,
      staking: true,
      liquiditySwap: true,
      collateralRepay: true,
      incentives: true,
    },
    addresses: {
      LENDING_POOL_ADDRESS_PROVIDER: markets.AaveV2Ethereum.POOL_ADDRESSES_PROVIDER,
      LENDING_POOL: markets.AaveV2Ethereum.POOL,
      WETH_GATEWAY: markets.AaveV2Ethereum.WETH_GATEWAY,
      REPAY_WITH_COLLATERAL_ADAPTER: markets.AaveV2Ethereum.REPAY_WITH_COLLATERAL_ADAPTER,
      SWAP_COLLATERAL_ADAPTER: markets.AaveV2Ethereum.SWAP_COLLATERAL_ADAPTER,
      WALLET_BALANCE_PROVIDER: markets.AaveV2Ethereum.WALLET_BALANCE_PROVIDER,
      UI_POOL_DATA_PROVIDER: markets.AaveV2Ethereum.UI_POOL_DATA_PROVIDER,
      UI_INCENTIVE_DATA_PROVIDER: markets.AaveV2Ethereum.UI_INCENTIVE_DATA_PROVIDER,
      COLLECTOR: markets.AaveV2Ethereum.COLLECTOR,
      V3_MIGRATOR: markets.AaveV2Ethereum.MIGRATION_HELPER,
    },
    halIntegration: {
      URL: 'https://app.hal.xyz/recipes/aave-track-your-health-factor',
      marketName: 'aavev2',
    },
  },
  // [CustomMarket.permissioned_market]: {
  //   marketTitle: 'Ethereum Permissioned Market example',
  //   chainId: ChainId.mainnet,
  //   enabledFeatures: {
  //     // liquiditySwap: true,
  //     // collateralRepay: true,
  //     // incentives: true,
  //     permissions: true,
  //   },
  //   permissionComponent: <PermissionView />,
  //   addresses: {
  //     LENDING_POOL_ADDRESS_PROVIDER: markets..POOL_ADDRESSES_PROVIDER,
  //     LENDING_POOL: markets..POOL,
  //     WETH_GATEWAY: markets..WETH_GATEWAY,
  //     // REPAY_WITH_COLLATERAL_ADAPTER: markets..REPAY_WITH_COLLATERAL_ADAPTER,
  //     // SWAP_COLLATERAL_ADAPTER: markets..SWAP_COLLATERAL_ADAPTER,
  //     WALLET_BALANCE_PROVIDER: markets..WALLET_BALANCE_PROVIDER,
  //     UI_POOL_DATA_PROVIDER: markets..UI_POOL_DATA_PROVIDER,
  //     // UI_INCENTIVE_DATA_PROVIDER: markets..UI_INCENTIVE_DATA_PROVIDER,
  //     PERMISSION_MANAGER: '<address here>',
  //   },
  // },
  [CustomMarket.amm_mainnet]: {
    marketTitle: 'Ethereum AMM',
    chainId: ChainId.mainnet,
    addresses: {
      LENDING_POOL_ADDRESS_PROVIDER: markets.AaveV2EthereumAMM.POOL_ADDRESSES_PROVIDER,
      LENDING_POOL: markets.AaveV2EthereumAMM.POOL,
      WETH_GATEWAY: markets.AaveV2EthereumAMM.WETH_GATEWAY,
      WALLET_BALANCE_PROVIDER: markets.AaveV2EthereumAMM.WALLET_BALANCE_PROVIDER,
      UI_POOL_DATA_PROVIDER: markets.AaveV2EthereumAMM.UI_POOL_DATA_PROVIDER,
      UI_INCENTIVE_DATA_PROVIDER: markets.AaveV2EthereumAMM.UI_INCENTIVE_DATA_PROVIDER,
      COLLECTOR: markets.AaveV2EthereumAMM.COLLECTOR,
    },
  },
  [CustomMarket.proto_polygon]: {
    marketTitle: 'Polygon',
    chainId: ChainId.polygon,
    enabledFeatures: {
      liquiditySwap: true,
      incentives: true,
      collateralRepay: true,
    },
    addresses: {
      LENDING_POOL_ADDRESS_PROVIDER: markets.AaveV2Polygon.POOL_ADDRESSES_PROVIDER,
      LENDING_POOL: markets.AaveV2Polygon.POOL,
      WETH_GATEWAY: markets.AaveV2Polygon.WETH_GATEWAY,
      SWAP_COLLATERAL_ADAPTER: markets.AaveV2Polygon.SWAP_COLLATERAL_ADAPTER,
      REPAY_WITH_COLLATERAL_ADAPTER: markets.AaveV2Polygon.REPAY_WITH_COLLATERAL_ADAPTER,
      WALLET_BALANCE_PROVIDER: markets.AaveV2Polygon.WALLET_BALANCE_PROVIDER,
      UI_POOL_DATA_PROVIDER: markets.AaveV2Polygon.UI_POOL_DATA_PROVIDER,
      UI_INCENTIVE_DATA_PROVIDER: markets.AaveV2Polygon.UI_INCENTIVE_DATA_PROVIDER,
      COLLECTOR: markets.AaveV2Polygon.COLLECTOR,
      V3_MIGRATOR: markets.AaveV2Polygon.MIGRATION_HELPER,
    },
    halIntegration: {
      URL: 'https://app.hal.xyz/recipes/aave-track-your-health-factor',
      marketName: 'aavepolygon',
    },
  },
  [CustomMarket.proto_avalanche]: {
    marketTitle: 'Avalanche',
    chainId: ChainId.avalanche,
    enabledFeatures: {
      liquiditySwap: true,
      incentives: true,
      collateralRepay: true,
    },
    addresses: {
      LENDING_POOL_ADDRESS_PROVIDER: markets.AaveV2Avalanche.POOL_ADDRESSES_PROVIDER,
      LENDING_POOL: markets.AaveV2Avalanche.POOL,
      WETH_GATEWAY: markets.AaveV2Avalanche.WETH_GATEWAY,
      SWAP_COLLATERAL_ADAPTER: markets.AaveV2Avalanche.SWAP_COLLATERAL_ADAPTER,
      REPAY_WITH_COLLATERAL_ADAPTER: markets.AaveV2Avalanche.REPAY_WITH_COLLATERAL_ADAPTER,
      WALLET_BALANCE_PROVIDER: markets.AaveV2Avalanche.WALLET_BALANCE_PROVIDER,
      UI_POOL_DATA_PROVIDER: markets.AaveV2Avalanche.UI_POOL_DATA_PROVIDER,
      UI_INCENTIVE_DATA_PROVIDER: markets.AaveV2Avalanche.UI_INCENTIVE_DATA_PROVIDER,
      COLLECTOR: markets.AaveV2Avalanche.COLLECTOR,
      V3_MIGRATOR: markets.AaveV2Avalanche.MIGRATION_HELPER,
    },
    halIntegration: {
      URL: 'https://app.hal.xyz/recipes/aave-track-your-health-factor',
      marketName: 'aaveavalanche',
    },
  },
  // v3
  [CustomMarket.proto_sepolia_v3]: {
    marketTitle: 'Ethereum Sepolia',
    v3: true,
    chainId: ChainId.sepolia,
    enabledFeatures: {
      faucet: true,
    },
    addresses: {
      LENDING_POOL_ADDRESS_PROVIDER: markets.AaveV3Sepolia.POOL_ADDRESSES_PROVIDER,
      LENDING_POOL: markets.AaveV3Sepolia.POOL,
      WETH_GATEWAY: markets.AaveV3Sepolia.WETH_GATEWAY,
      FAUCET: markets.AaveV3Sepolia.FAUCET,
      WALLET_BALANCE_PROVIDER: markets.AaveV3Sepolia.WALLET_BALANCE_PROVIDER,
      UI_POOL_DATA_PROVIDER: markets.AaveV3Sepolia.UI_POOL_DATA_PROVIDER,
      UI_INCENTIVE_DATA_PROVIDER: markets.AaveV3Sepolia.UI_INCENTIVE_DATA_PROVIDER,
    },
  },
  [CustomMarket.proto_goerli_v3]: {
    marketTitle: 'Ethereum Görli',
    v3: true,
    chainId: ChainId.goerli,
    enabledFeatures: {
      faucet: true,
    },
    addresses: {
      LENDING_POOL_ADDRESS_PROVIDER: markets.AaveV3Goerli.POOL_ADDRESSES_PROVIDER,
      LENDING_POOL: markets.AaveV3Goerli.POOL,
      WETH_GATEWAY: markets.AaveV3Goerli.WETH_GATEWAY,
      FAUCET: markets.AaveV3Goerli.FAUCET,
      WALLET_BALANCE_PROVIDER: markets.AaveV3Goerli.WALLET_BALANCE_PROVIDER,
      UI_POOL_DATA_PROVIDER: markets.AaveV3Goerli.UI_POOL_DATA_PROVIDER,
      UI_INCENTIVE_DATA_PROVIDER: markets.AaveV3Goerli.UI_INCENTIVE_DATA_PROVIDER,
    },
  },

  [CustomMarket.proto_arbitrum_v3]: {
    marketTitle: 'Arbitrum',
    v3: true,
    chainId: ChainId.arbitrum_one,
    enabledFeatures: {
      incentives: true,
      liquiditySwap: true,
      collateralRepay: true,
    },
    addresses: {
      LENDING_POOL_ADDRESS_PROVIDER: markets.AaveV3Arbitrum.POOL_ADDRESSES_PROVIDER,
      LENDING_POOL: markets.AaveV3Arbitrum.POOL,
      WETH_GATEWAY: markets.AaveV3Arbitrum.WETH_GATEWAY,
      WALLET_BALANCE_PROVIDER: markets.AaveV3Arbitrum.WALLET_BALANCE_PROVIDER,
      UI_POOL_DATA_PROVIDER: markets.AaveV3Arbitrum.UI_POOL_DATA_PROVIDER,
      UI_INCENTIVE_DATA_PROVIDER: markets.AaveV3Arbitrum.UI_INCENTIVE_DATA_PROVIDER,
      L2_ENCODER: markets.AaveV3Arbitrum.L2_ENCODER,
      COLLECTOR: markets.AaveV3Arbitrum.COLLECTOR,
      SWAP_COLLATERAL_ADAPTER: markets.AaveV3Arbitrum.SWAP_COLLATERAL_ADAPTER,
      REPAY_WITH_COLLATERAL_ADAPTER: markets.AaveV3Arbitrum.REPAY_WITH_COLLATERAL_ADAPTER,
    },
    halIntegration: {
      URL: 'https://app.hal.xyz/recipes/aave-v3-track-health-factor',
      marketName: 'arbitrum',
    },
  },
  [CustomMarket.proto_arbitrum_goerli_v3]: {
    marketTitle: 'Arbitrum Görli',
    v3: true,
    chainId: ChainId.arbitrum_goerli,
    enabledFeatures: {
      faucet: true,
      incentives: true,
    },
    addresses: {
      LENDING_POOL_ADDRESS_PROVIDER: markets.AaveV3ArbitrumGoerli.POOL_ADDRESSES_PROVIDER,
      LENDING_POOL: markets.AaveV3ArbitrumGoerli.POOL,
      WETH_GATEWAY: markets.AaveV3ArbitrumGoerli.WETH_GATEWAY,
      FAUCET: markets.AaveV3ArbitrumGoerli.FAUCET,
      WALLET_BALANCE_PROVIDER: markets.AaveV3ArbitrumGoerli.WALLET_BALANCE_PROVIDER,
      UI_POOL_DATA_PROVIDER: markets.AaveV3ArbitrumGoerli.UI_POOL_DATA_PROVIDER,
      UI_INCENTIVE_DATA_PROVIDER: markets.AaveV3ArbitrumGoerli.UI_INCENTIVE_DATA_PROVIDER,
      L2_ENCODER: markets.AaveV3ArbitrumGoerli.L2_ENCODER,
    },
  },
  [CustomMarket.proto_avalanche_v3]: {
    marketTitle: 'Avalanche',
    v3: true,
    chainId: ChainId.avalanche,
    enabledFeatures: {
      liquiditySwap: true,
      incentives: true,
      collateralRepay: true,
    },
    addresses: {
      LENDING_POOL_ADDRESS_PROVIDER: markets.AaveV3Avalanche.POOL_ADDRESSES_PROVIDER,
      LENDING_POOL: markets.AaveV3Avalanche.POOL,
      WETH_GATEWAY: markets.AaveV3Avalanche.WETH_GATEWAY,
      REPAY_WITH_COLLATERAL_ADAPTER: markets.AaveV3Avalanche.REPAY_WITH_COLLATERAL_ADAPTER,
      SWAP_COLLATERAL_ADAPTER: markets.AaveV3Avalanche.SWAP_COLLATERAL_ADAPTER,
      WALLET_BALANCE_PROVIDER: markets.AaveV3Avalanche.WALLET_BALANCE_PROVIDER,
      UI_POOL_DATA_PROVIDER: markets.AaveV3Avalanche.UI_POOL_DATA_PROVIDER,
      UI_INCENTIVE_DATA_PROVIDER: markets.AaveV3Avalanche.UI_INCENTIVE_DATA_PROVIDER,
      COLLECTOR: markets.AaveV3Avalanche.COLLECTOR,
    },
    halIntegration: {
      URL: 'https://app.hal.xyz/recipes/aave-v3-track-health-factor',
      marketName: 'avalanche',
    },
  },
  [CustomMarket.proto_fuji_v3]: {
    marketTitle: 'Avalanche Fuji',
    v3: true,
    chainId: ChainId.fuji,
    enabledFeatures: {
      faucet: true,
      incentives: true,
    },
    addresses: {
      LENDING_POOL_ADDRESS_PROVIDER: markets.AaveV3Fuji.POOL_ADDRESSES_PROVIDER,
      LENDING_POOL: markets.AaveV3Fuji.POOL,
      WETH_GATEWAY: markets.AaveV3Fuji.WETH_GATEWAY,
      FAUCET: markets.AaveV3Fuji.FAUCET,
      WALLET_BALANCE_PROVIDER: markets.AaveV3Fuji.WALLET_BALANCE_PROVIDER,
      UI_POOL_DATA_PROVIDER: markets.AaveV3Fuji.UI_POOL_DATA_PROVIDER,
      UI_INCENTIVE_DATA_PROVIDER: markets.AaveV3Fuji.UI_INCENTIVE_DATA_PROVIDER,
    },
  },
  [CustomMarket.proto_optimism_goerli_v3]: {
    marketTitle: 'Optimism Görli',
    v3: true,
    chainId: ChainId.optimism_goerli,
    enabledFeatures: {
      faucet: true,
      incentives: true,
    },
    addresses: {
      LENDING_POOL_ADDRESS_PROVIDER: markets.AaveV3OptimismGoerli.POOL_ADDRESSES_PROVIDER,
      LENDING_POOL: markets.AaveV3OptimismGoerli.POOL,
      WETH_GATEWAY: markets.AaveV3OptimismGoerli.WETH_GATEWAY,
      FAUCET: markets.AaveV3OptimismGoerli.FAUCET,
      WALLET_BALANCE_PROVIDER: markets.AaveV3OptimismGoerli.WALLET_BALANCE_PROVIDER,
      UI_POOL_DATA_PROVIDER: markets.AaveV3OptimismGoerli.UI_POOL_DATA_PROVIDER,
      UI_INCENTIVE_DATA_PROVIDER: markets.AaveV3OptimismGoerli.UI_INCENTIVE_DATA_PROVIDER,
      L2_ENCODER: markets.AaveV3OptimismGoerli.L2_ENCODER,
    },
  },

  [CustomMarket.proto_scroll_alpha_v3]: {
    marketTitle: 'Scroll Alpha',
    v3: true,
    chainId: 534353,
    enabledFeatures: {
      faucet: true,
      incentives: true,
    },
    addresses: {
      LENDING_POOL_ADDRESS_PROVIDER:
        marketsScrollExtended.AaveV3ScrollAlpha.POOL_ADDRESSES_PROVIDER,
      LENDING_POOL: marketsScrollExtended.AaveV3ScrollAlpha.POOL,
      WETH_GATEWAY: marketsScrollExtended.AaveV3ScrollAlpha.WETH_GATEWAY,
      FAUCET: marketsScrollExtended.AaveV3ScrollAlpha.FAUCET,
      WALLET_BALANCE_PROVIDER: marketsScrollExtended.AaveV3ScrollAlpha.WALLET_BALANCE_PROVIDER,
      UI_POOL_DATA_PROVIDER: marketsScrollExtended.AaveV3ScrollAlpha.UI_POOL_DATA_PROVIDER,
      UI_INCENTIVE_DATA_PROVIDER:
        marketsScrollExtended.AaveV3ScrollAlpha.UI_INCENTIVE_DATA_PROVIDER,
      L2_ENCODER: marketsScrollExtended.AaveV3ScrollAlpha.L2_ENCODER,
    },
  },
  [CustomMarket.proto_fantom_v3]: {
    marketTitle: 'Fantom',
    v3: true,
    chainId: ChainId.fantom,
    enabledFeatures: {
      incentives: true,
      collateralRepay: true,
      liquiditySwap: true,
    },
    addresses: {
      LENDING_POOL_ADDRESS_PROVIDER: markets.AaveV3Fantom.POOL_ADDRESSES_PROVIDER,
      LENDING_POOL: markets.AaveV3Fantom.POOL,
      WETH_GATEWAY: markets.AaveV3Fantom.WETH_GATEWAY,
      SWAP_COLLATERAL_ADAPTER: markets.AaveV3Fantom.SWAP_COLLATERAL_ADAPTER,
      REPAY_WITH_COLLATERAL_ADAPTER: markets.AaveV3Fantom.REPAY_WITH_COLLATERAL_ADAPTER,
      WALLET_BALANCE_PROVIDER: markets.AaveV3Fantom.WALLET_BALANCE_PROVIDER,
      UI_POOL_DATA_PROVIDER: markets.AaveV3Fantom.UI_POOL_DATA_PROVIDER,
      UI_INCENTIVE_DATA_PROVIDER: markets.AaveV3Fantom.UI_INCENTIVE_DATA_PROVIDER,
      COLLECTOR: markets.AaveV3Fantom.COLLECTOR,
    },
    halIntegration: {
      URL: 'https://app.hal.xyz/recipes/aave-v3-track-health-factor',
      marketName: 'fantom',
    },
  },
  [CustomMarket.proto_fantom_testnet_v3]: {
    marketTitle: 'Fantom Testnet',
    v3: true,
    chainId: ChainId.fantom_testnet,
    enabledFeatures: {
      faucet: true,
      incentives: true,
    },
    addresses: {
      LENDING_POOL_ADDRESS_PROVIDER: markets.AaveV3FantomTestnet.POOL_ADDRESSES_PROVIDER,
      LENDING_POOL: markets.AaveV3FantomTestnet.POOL,
      WETH_GATEWAY: markets.AaveV3FantomTestnet.WETH_GATEWAY,
      FAUCET: markets.AaveV3FantomTestnet.FAUCET,
      WALLET_BALANCE_PROVIDER: markets.AaveV3FantomTestnet.WALLET_BALANCE_PROVIDER,
      UI_POOL_DATA_PROVIDER: markets.AaveV3FantomTestnet.UI_POOL_DATA_PROVIDER,
      UI_INCENTIVE_DATA_PROVIDER: markets.AaveV3FantomTestnet.UI_INCENTIVE_DATA_PROVIDER,
    },
  },
  [CustomMarket.proto_harmony_v3]: {
    marketTitle: 'Harmony',
    v3: true,
    chainId: ChainId.harmony,
    enabledFeatures: {
      incentives: true,
    },
    addresses: {
      LENDING_POOL_ADDRESS_PROVIDER: markets.AaveV3Harmony.POOL_ADDRESSES_PROVIDER,
      LENDING_POOL: markets.AaveV3Harmony.POOL,
      WETH_GATEWAY: markets.AaveV3Harmony.WETH_GATEWAY,
      WALLET_BALANCE_PROVIDER: markets.AaveV3Harmony.WALLET_BALANCE_PROVIDER,
      UI_POOL_DATA_PROVIDER: markets.AaveV3Harmony.UI_POOL_DATA_PROVIDER,
      UI_INCENTIVE_DATA_PROVIDER: markets.AaveV3Harmony.UI_INCENTIVE_DATA_PROVIDER,
      COLLECTOR: markets.AaveV3Harmony.COLLECTOR,
    },
  },
  [CustomMarket.proto_optimism_v3]: {
    marketTitle: 'Optimism',
    v3: true,
    chainId: ChainId.optimism,
    enabledFeatures: {
      incentives: true,
      collateralRepay: true,
      liquiditySwap: true,
    },
    addresses: {
      LENDING_POOL_ADDRESS_PROVIDER: markets.AaveV3Optimism.POOL_ADDRESSES_PROVIDER,
      LENDING_POOL: markets.AaveV3Optimism.POOL,
      WETH_GATEWAY: markets.AaveV3Optimism.WETH_GATEWAY,
      WALLET_BALANCE_PROVIDER: markets.AaveV3Optimism.WALLET_BALANCE_PROVIDER,
      UI_POOL_DATA_PROVIDER: markets.AaveV3Optimism.UI_POOL_DATA_PROVIDER,
      UI_INCENTIVE_DATA_PROVIDER: markets.AaveV3Optimism.UI_INCENTIVE_DATA_PROVIDER,
      L2_ENCODER: markets.AaveV3Optimism.L2_ENCODER,
      COLLECTOR: markets.AaveV3Optimism.COLLECTOR,
      SWAP_COLLATERAL_ADAPTER: markets.AaveV3Optimism.SWAP_COLLATERAL_ADAPTER,
      REPAY_WITH_COLLATERAL_ADAPTER: markets.AaveV3Optimism.REPAY_WITH_COLLATERAL_ADAPTER,
    },
  },
  [CustomMarket.proto_polygon_v3]: {
    marketTitle: 'Polygon',
    chainId: ChainId.polygon,
    v3: true,
    enabledFeatures: {
      liquiditySwap: true,
      incentives: true,
      collateralRepay: true,
    },
    addresses: {
      LENDING_POOL_ADDRESS_PROVIDER: markets.AaveV3Polygon.POOL_ADDRESSES_PROVIDER,
      LENDING_POOL: markets.AaveV3Polygon.POOL,
      WETH_GATEWAY: markets.AaveV3Polygon.WETH_GATEWAY,
      REPAY_WITH_COLLATERAL_ADAPTER: markets.AaveV3Polygon.REPAY_WITH_COLLATERAL_ADAPTER,
      SWAP_COLLATERAL_ADAPTER: markets.AaveV3Polygon.SWAP_COLLATERAL_ADAPTER,
      WALLET_BALANCE_PROVIDER: markets.AaveV3Polygon.WALLET_BALANCE_PROVIDER,
      UI_POOL_DATA_PROVIDER: markets.AaveV3Polygon.UI_POOL_DATA_PROVIDER,
      UI_INCENTIVE_DATA_PROVIDER: markets.AaveV3Polygon.UI_INCENTIVE_DATA_PROVIDER,
      COLLECTOR: markets.AaveV3Polygon.COLLECTOR,
    },
    halIntegration: {
      URL: 'https://app.hal.xyz/recipes/aave-v3-track-health-factor',
      marketName: 'polygon',
    },
  },
  [CustomMarket.proto_mumbai_v3]: {
    marketTitle: 'Polygon Mumbai',
    chainId: ChainId.mumbai,
    enabledFeatures: {
      incentives: true,
      faucet: true,
    },
    addresses: {
      LENDING_POOL_ADDRESS_PROVIDER: markets.AaveV3Mumbai.POOL_ADDRESSES_PROVIDER,
      LENDING_POOL: markets.AaveV3Mumbai.POOL,
      WETH_GATEWAY: markets.AaveV3Mumbai.WETH_GATEWAY,
      FAUCET: markets.AaveV3Mumbai.FAUCET,
      WALLET_BALANCE_PROVIDER: markets.AaveV3Mumbai.WALLET_BALANCE_PROVIDER,
      UI_POOL_DATA_PROVIDER: markets.AaveV3Mumbai.UI_POOL_DATA_PROVIDER,
      UI_INCENTIVE_DATA_PROVIDER: markets.AaveV3Mumbai.UI_INCENTIVE_DATA_PROVIDER,
    },
    v3: true,
  },
  [CustomMarket.proto_goerli]: {
    marketTitle: 'Ethereum Görli',
    chainId: ChainId.goerli,
    enabledFeatures: {
      faucet: true,
    },

    addresses: {
      LENDING_POOL_ADDRESS_PROVIDER: markets.AaveV2Goerli.POOL_ADDRESSES_PROVIDER,
      LENDING_POOL: markets.AaveV2Goerli.POOL,
      WETH_GATEWAY: markets.AaveV2Goerli.WETH_GATEWAY,
      WALLET_BALANCE_PROVIDER: markets.AaveV2Goerli.WALLET_BALANCE_PROVIDER,
      UI_POOL_DATA_PROVIDER: markets.AaveV2Goerli.UI_POOL_DATA_PROVIDER,
      UI_INCENTIVE_DATA_PROVIDER: markets.AaveV2Goerli.UI_INCENTIVE_DATA_PROVIDER,
      FAUCET: markets.AaveV2Goerli.FAUCET,
    },
  },
  [CustomMarket.proto_mumbai]: {
    marketTitle: 'Polygon Mumbai',
    chainId: ChainId.mumbai,
    enabledFeatures: {
      incentives: true,
      faucet: true,
    },
    addresses: {
      LENDING_POOL_ADDRESS_PROVIDER: markets.AaveV2Mumbai.POOL_ADDRESSES_PROVIDER,
      LENDING_POOL: markets.AaveV2Mumbai.POOL,
      WETH_GATEWAY: markets.AaveV2Mumbai.WETH_GATEWAY,
      FAUCET: markets.AaveV2Mumbai.FAUCET,
      WALLET_BALANCE_PROVIDER: markets.AaveV2Mumbai.WALLET_BALANCE_PROVIDER,
      UI_POOL_DATA_PROVIDER: markets.AaveV2Mumbai.UI_POOL_DATA_PROVIDER,
      UI_INCENTIVE_DATA_PROVIDER: markets.AaveV2Mumbai.UI_INCENTIVE_DATA_PROVIDER,
    },
  },
  [CustomMarket.proto_fuji]: {
    marketTitle: 'Avalanche Fuji',
    chainId: ChainId.fuji,
    enabledFeatures: {
      faucet: true,
      incentives: true,
    },
    addresses: {
      LENDING_POOL_ADDRESS_PROVIDER: markets.AaveV2Fuji.POOL_ADDRESSES_PROVIDER,
      LENDING_POOL: markets.AaveV2Fuji.POOL,
      WETH_GATEWAY: markets.AaveV2Fuji.WETH_GATEWAY,
      FAUCET: markets.AaveV2Fuji.FAUCET,
      WALLET_BALANCE_PROVIDER: markets.AaveV2Fuji.WALLET_BALANCE_PROVIDER,
      UI_POOL_DATA_PROVIDER: markets.AaveV2Fuji.UI_POOL_DATA_PROVIDER,
      UI_INCENTIVE_DATA_PROVIDER: markets.AaveV2Fuji.UI_INCENTIVE_DATA_PROVIDER,
    },
  },
} as const;

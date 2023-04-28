import {
  Address,
  BigInt,
} from "@graphprotocol/graph-ts"
  
// Initialize a Token Definition with the attributes
export class StaticTokenDefinition {
  address : Address
  symbol: string
  name: string
  decimals: BigInt

  // Initialize a Token Definition with its attributes
  constructor(address: Address, symbol: string, name: string, decimals: BigInt) {
    this.address = address
    this.symbol = symbol
    this.name = name
    this.decimals = decimals
  }

  // Get all tokens with a static defintion
  static getStaticDefinitions(): Array<StaticTokenDefinition> {
    let staticDefinitions = new Array<StaticTokenDefinition>(6)
    
    // Swampy UPDATE
    // Add DGD
    /* let tokenDGD = new StaticTokenDefinition(
      Address.fromString('0xe0b7927c4af23765cb51314a0e0521a9645f0e2a'),
      'DGD',
      'DGD',
      BigInt.fromI32(9)
    )
    staticDefinitions.push(tokenDGD)

    // Add AAVE
    let tokenAAVE = new StaticTokenDefinition(
      Address.fromString('0x7fc66500c84a76ad7e9c93437bfc5ac33e2ddae9'),
      'AAVE',
      'Aave Token',
      BigInt.fromI32(18)
    )
    staticDefinitions.push(tokenAAVE)

    // Add LIF
    let tokenLIF = new StaticTokenDefinition(
      Address.fromString('0xeb9951021698b42e4399f9cbb6267aa35f82d59d'),
      'LIF',
      'Lif',
      BigInt.fromI32(18)
    )
    staticDefinitions.push(tokenLIF)

    // Add SVD
    let tokenSVD = new StaticTokenDefinition(
      Address.fromString('0xbdeb4b83251fb146687fa19d1c660f99411eefe3'),
      'SVD',
      'savedroid',
      BigInt.fromI32(18)
    )
    staticDefinitions.push(tokenSVD)

    // Add TheDAO
    let tokenTheDAO = new StaticTokenDefinition(
      Address.fromString('0xbb9bc244d798123fde783fcc1c72d3bb8c189413'),
      'TheDAO',
      'TheDAO',
      BigInt.fromI32(16)
    )
    staticDefinitions.push(tokenTheDAO)

    // Add HPB
    let tokenHPB = new StaticTokenDefinition(
      Address.fromString('0x38c6a68304cdefb9bec48bbfaaba5c5b47818bb2'),
      'HPB',
      'HPBCoin',
      BigInt.fromI32(18)
    )
    staticDefinitions.push(tokenHPB) */

    let tokenUSDT = new StaticTokenDefinition(
        Address.fromString('0x7d682e65efc5c13bf4e394b8f376c48e6bae0355'),
        'USDT',
        'USDT',
        BigInt.fromI32(18)
    )
    staticDefinitions.push(tokenUSDT)

    let tokenWCFX = new StaticTokenDefinition(
        Address.fromString('0x2ed3dddae5b2f321af0806181fbfa6d049be47d8'),
        'WCFX',
        'WCFX',
        BigInt.fromI32(18)
    )
    staticDefinitions.push(tokenWCFX)

    let tokenPPI = new StaticTokenDefinition(
        Address.fromString('0x49916ba65d0048c4bbb0a786a527d98d10a1cd2d'),
        'PPI',
        'PPI',
        BigInt.fromI32(18)
    )
    staticDefinitions.push(tokenPPI)

    let tokenETH = new StaticTokenDefinition(
        Address.fromString('0xcd71270f82f319e0498ff98af8269c3f0d547c65'),
        'ETH',
        'ETH',
        BigInt.fromI32(18)
    )
    staticDefinitions.push(tokenETH)

    let tokenBTC = new StaticTokenDefinition(
        Address.fromString('0x54593e02c39aeff52b166bd036797d2b1478de8d'),
        'BTC',
        'BTC',
        BigInt.fromI32(18)
    )
    staticDefinitions.push(tokenBTC)

    let tokenVST = new StaticTokenDefinition(
        Address.fromString('0xb0a519beb026590c191356b68b264131402a333f'),
        'VST',
        'VST',
        BigInt.fromI32(18)
    )
    staticDefinitions.push(tokenVST)

    return staticDefinitions
  }

  // Helper for hardcoded tokens
  static fromAddress(tokenAddress: Address) : StaticTokenDefinition | null {
    let staticDefinitions = this.getStaticDefinitions()
    let tokenAddressHex = tokenAddress.toHexString()

    // Search the definition using the address
    for (let i = 0; i < staticDefinitions.length; i++) {
      let staticDefinition = staticDefinitions[i]
      if(staticDefinition.address.toHexString() == tokenAddressHex) {
        return staticDefinition
      }
    }

    // If not found, return null
    return null
  }

}
# NftLife - Blockchain marketplace

Visit the site: [NftLife](https://nft-life-production.netlify.app/)

## Description

NftLife is a single page application. It has multiple UI challenges. It has a complicate layout which was complicated to make it work for all devices which may use this website.

This project integrates the Web3 word (more exactly, a token smart contract), with an ecommerce system built on top of firebase.


## Languages and Utilities Used

- TypeScript
- React
- Redux
- Firebase
- Ethers.js

## Implementation details

- [API](https://github.com/CirsteanPaul/NFT-marketplace/tree/master/src/api). This folder has all request to the firebase instance.
- [Mappers](https://github.com/CirsteanPaul/NFT-marketplace/tree/master/src/mappers). This folder uses the concept of mappers(mainly used in backend) to map data such as our app will never have do deal with nulls.
- [Modules](https://github.com/CirsteanPaul/NFT-marketplace/tree/master/src/modules). This folder has the root components for each page of the app.
- [Store](https://github.com/CirsteanPaul/NFT-marketplace/tree/master/src/store). Here is all the state logic from our app. Here we make the connection between app logic and firebase requests and blockchain requests.

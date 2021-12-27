export const networkCollections = {
  '0x1': [
    //Cool Cats NFT
    {
      image:
        'https://pbs.twimg.com/profile_images/1466187842384584712/mzdK4sfb_400x400.jpg',
      name: 'Cool Cats NFT',
      addrs: '0x1a92f7381b9f03921564a437210bb9396471050c',
    },
    //CryptoPunks NFT
    {
      image:
        'https://pbs.twimg.com/profile_images/879737418609553409/yjnyAhAI_400x400.jpg',
      name: 'CryptoPunks NFT',
      addrs: '0xb47e3cd837ddf8e4c57f05d70ab865de6e193bbb',
    },
    //Doodles NFT
    {
      image:
        'https://pbs.twimg.com/profile_images/1468372446671622145/3R7s-ZV0_400x400.jpg',
      name: 'Doodles NFT',
      addrs: '0x8a90cab2b38dba80c64b7734e58ee1db38b8992e',
    },
    //0N1 Force NFT
    {
      image:
        'https://pbs.twimg.com/profile_images/1450208184593960963/i4ipaDUS_400x400.jpg',
      name: '0N1 Force NFT',
      addrs: '0x3bf2922f4520a8BA0c2eFC3D2a1539678DaD5e9D',
    },
    //Space Dinos Club NFT
    {
      image:
        'https://lh3.googleusercontent.com/MpL8izIWX5-Pt1t1y3_bpqGvS8675prwklUf_Nxf0DYahZ5DzOFdiFCxZz5Hmee5BMiVhH4zaJM-sEM8DHe8_cf4UpwO_7hFlC2uQKs=w600',
      name: 'Space Dinos Club NFT',
      addrs: '0x5aA140dd5b946687e38d5F5Ac4eF9e7B0154EfF6',
    },
  ],

  //Polygon Testnet Indicator
  '0x89': [
    //Space Punks NFT
    {
      image:
        'https://gateway.ipfs.io/ipfs/QmNmjo79cKSYe7HXUDCFrtS2issigSkWf8ykcb7R9kouDp/9973.png',
      name: 'Space Punks NFT',
      addrs: '0x87e61f985b29bb45db3d0a6d6f02de01755aaace',
    },
  ],
}

export const getCollectionsByChain = (chain) => networkCollections[chain]

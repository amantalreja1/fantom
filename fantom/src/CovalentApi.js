async function getNftDetails(tokenAddress,nftId){
    let headers = new Headers();
    headers.set('Authorization', "Bearer cqt_rQfwyKphcPFjk78P39GVWXWrDq47")

await fetch("https://api.covalenthq.com/v1/eth-mainnet/tokens/"+tokenAddress+"/nft_metadata/"+nftId+"/", {method: 'GET', headers: headers})
  .then((resp) => resp.json())
  .then((data) => console.log(data));
}
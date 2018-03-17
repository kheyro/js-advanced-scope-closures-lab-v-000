function produceDrivingRange(blockRange) {
  return function(startBlock, endBlock) {
    let numBlock = Math.abs(startBlock.slice(-2) - endBlock.sslice(-2))
    console.log(startBlock.slice(-2), ds);
    if (numBlock > blockRange) {
      return `${numBlock} out of range`
    } else {
      return `within range by ${numBlock}`
    }
  }
}

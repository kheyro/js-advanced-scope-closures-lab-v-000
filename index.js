function produceDrivingRange(blockRange) {
  return function(startBlock, endBlock) {
    let numBlock = Math.abs(startBlock.slice(-2) - endBlock.sslice(-2))
    console.log(startBlock.substring(-2))
    if (numBlock > blockRange) {
      return `${numBlock} out of range`
    } else {
      return `within range by ${numBlock}`
    }
  }
}

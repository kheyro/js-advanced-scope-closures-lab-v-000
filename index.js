function produceDrivingRange(blockRange) {
  return function(startBlock, endBlock) {
    let numBlock = Math.abs(startBlock.substring(-2) - endBlock.substring(-2))
    console.log(startBlock.substring(-2))
    if (numBlock > blockRange) {
      return `${numBlock} out of range`
    } else {
      return `within range by ${numBlock}`
    }
  }
}

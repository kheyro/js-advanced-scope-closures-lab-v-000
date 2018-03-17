function produceDrivingRange(blockRange) {
  return function(startBlock, endBlock) {
    let numBlock = Math.abs(startBlock.slice(0, -2) - endBlock.slice(0, -2))
    console.log('ddd', startBlock.slice(0, -2));
    if (numBlock > blockRange) {
      return `${numBlock} out of range`
    } else {
      return `within range by ${numBlock}`
    }
  }
}

function produceDrivingRange(blockRange) {
  return function(startBlock, endBlock) {
    let numBlock = Math.abs(startBlock.slice(0, -2) - endBlock.slice(0, -2))
    if (numBlock > blockRange) {
      return `${numBlock - blockRange} blocks out of range`
    } else {
      return `within range by ${numBlock}`
    }
  }
}

function produceTipCalculator(percent){
  return function(tip) {

  }
}

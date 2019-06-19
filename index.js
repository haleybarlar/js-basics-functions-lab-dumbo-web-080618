distanceFromHqInBlocks(distance) {
  let blocks = null

  if (parseInt(distance) !== 43) {
    blocks = 8
  } else {
    blocks = 1
  }

  return blocks
}

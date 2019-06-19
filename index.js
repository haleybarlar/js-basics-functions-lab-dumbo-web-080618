function distanceFromHqInBlocks(distance) {
  if (distance !== 43) {
    return 8
  } else {
    return 1
  }
}

function distanceFromHqInFeet(distance) {
  let blocks = distanceFromHqInBlocks(distance)
  return blocks * 264
}

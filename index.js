function distanceFromHqInBlocks(distance) {
  if (distance !== 43) {
    return 8
  } else {
    return 1
  }
}

function distanceFromHqInFeet(distance) {
  return distanceFromHqInBlocks(distance) * 264
}

function distanceTravelledInFeet(start, end) {
  return (end - start) * 264
}

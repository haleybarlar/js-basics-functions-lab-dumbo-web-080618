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
  if (end < start) {
    return (start - end) * 264
  }

  return (end - start) * 264
}

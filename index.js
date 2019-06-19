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

function calculatesFarePrice(start, destination) {
  let distance = distanceTravelledInFeet(start, destination)

  if (distance <= 400) {
    return 0
  } else if (distance <= 2000 ) {
    return (distance - 400) * 0.2
  } else if (distance > 2500) {
    return 'cannot travel that far'
  } else if (distance > 2000) {
    return 25
  }
}

const PI = Math.PI;

module.exports.circleArea = function(radiusLength) {
  return PI * radiusLength * radiusLength
}

module.exports.squareArea = function(sideLength){
  return sideLength*sideLength
}
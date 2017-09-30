// https://en.wikipedia.org/wiki/Triangular_number

function isTriangular (t) {
  return Math.sqrt((8 * t) + 1) % 1 === 0
}

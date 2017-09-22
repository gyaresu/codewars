// Cartesian neighbors — http://www.codewars.com/kata/58989a079c70093f3e00008d/train/go
// A Cartesian coordinate system is a coordinate system that specifies each point uniquely in a plane
// by a pair of numerical coordinates, which are the signed distances to the point from two fixed
// perpendicular directed lines, measured in the same unit of length. The сoordinates of a point in
// the grid are written as (x,y). Each point in a coordinate system has eight neighboring points.
// Provided that the grid step = 1.

// CartesianNeighbor(5,7) -> {{6,7},{6,6},{6,8},{4,7},{4,6},{4,8},{5,6},{5,8}}

function cartesianNeighbor (x, y) {
  let arr = []
  arr.push([x - 1, y + 1])
  arr.push([x - 1, y])
  arr.push([x - 1, y - 1])
  arr.push([x, y + 1])
  arr.push([x, y - 1])
  arr.push([x + 1, y + 1])
  arr.push([x + 1, y])
  arr.push([x + 1, y - 1])

  return arr
}

console.log(cartesianNeighbor(2, 2)) // -> {{1,1},{1,2},{1,3},{2,1},{2,3},{3,1},{3,2},{3,3}}

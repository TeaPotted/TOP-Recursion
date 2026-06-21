// create a function that merges two sorted arrays into one sorted array
function merge(leftArr, rightArr) {
  let result = [];

  // while left and right are not empty, compare their elements
  while (leftArr.length && rightArr.length) {
    // if first value of leftArr is smaller than first value of rightArr
    if (leftArr[0] < rightArr[0]) {
      // remove the first value of leftArr and push it to result
      result.push(leftArr.shift());
    } else {
      // remove the first value of rightArr and push it to result
      result.push(rightArr.shift())
    }
  }

  // combine result with the remaining values of leftArr and rightArr, then return 
  return [...result, ...leftArr, ...rightArr]
}

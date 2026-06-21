// Build a function mergeSort that takes in an array and returns a sorted array
function mergeSort(arr) {
  // if there is less than 2 items in arr, just return arr
  if (arr.length < 2) return arr;

  // get the mid point of the array
  const mid = Math.floor(arr.length / 2);

  // get the left and right side of the array
  const leftSide = arr.slice(0, mid);
  const rightSide = arr.slice(mid, arr.length);

  // use merge() func on both the leftSide and rightSide, then return
  return merge(mergeSort(leftSide), mergeSort(rightSide));
}

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

export {mergeSort};

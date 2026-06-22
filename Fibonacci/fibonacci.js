// function which takes a number and returns an array containing that many numbers from the Fibinocci sequence
function fibs(n) {
  let result = [];
  // loop through each number while i < num, starting from zero
  for (let i = 0; i < n; i++) {
    let currentNum; // this will be the current number that will be pushed to results
    // if i < 2, just push i to results
    if (i < 2) result.push(i);
    else {
      // set currentNum to the sum of the previous index value in results + the second previous index value in results, then push to result
      currentNum = result[i - 1] + result[i - 2];
      result.push(currentNum);
    }
  }
  return result;
}

// now write another function fibsRec which solves the same problem as fibs, but with recursion instead of iteration
function fibsRec(n) {
  // set the base cases:
  if (n <= 1) return [0];
  if (n <= 2) return [0, 1]

  // get the previous fibonacci sequence array
  let arr = fibsRec(n - 1);
  // get the length of arr
  let l = arr.length;

  // add the [ previous value in arr ] + [ second previous value in arr ] and push it to arr
  arr.push(arr[l - 1] + arr[l - 2])
  return arr
}


export {fibs, fibsRec}
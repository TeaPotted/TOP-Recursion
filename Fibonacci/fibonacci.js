// function which takes a number and returns an array containing that many numbers from the Fibinocci sequence
function fibs(n) {
  let result = [];
  // loop through each number until num - 1, starting from zero
  for (let i = 0; i <= n - 1; i++) {
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

export {fibs}
import {fibs} from "./fibonacci.js"

test("fibs(8) returns [0, 1, 1, 2, 3, 5, 8, 13]", () => {
  expect(fibs(8)).toEqual([0, 1, 1, 2, 3, 5, 8, 13]);
})

test("fibs(1) returns [1]", () => {
  expect(fibs(1)).toEqual([0])
})
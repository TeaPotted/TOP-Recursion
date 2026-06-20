import {fibs, fibsRec} from "./fibonacci.js"

test("fibs(8) returns [0, 1, 1, 2, 3, 5, 8, 13]", () => {
  expect(fibs(8)).toEqual([0, 1, 1, 2, 3, 5, 8, 13]);
})

test("fibs(1) returns [1]", () => {
  expect(fibs(1)).toEqual([0])
})

test("fibsRec(8) returns [0, 1, 1, 2, 3, 5, 8, 13]", () => {
  expect(fibsRec(8)).toEqual([0, 1, 1, 2, 3, 5, 8, 13]);
})

test("fibsRec(1) returns [1]", () => {
  expect(fibsRec(1)).toEqual([0])
})

test("fibsRec(0) return [0]", () => {
  expect(fibsRec(0)).toEqual([0])
})
var obj = require("./TDD");

test("1st", () => {
  expect(obj.getFact(1)).toBe(null);
});

test("2nd", () => {
  expect(obj.getFact(2)).toEqual([2]);
});

test("3rd", () => {
  expect(obj.getFact(3)).toEqual([3]);
});

test("4th", () => {
  expect(obj.getFact(4)).toEqual([2, 2]);
});

test("5th", () => {
  expect(obj.getFact(8)).toEqual([2, 2, 2]);
});

test("6th", () => {
  expect(obj.getFact(9)).toEqual([3, 3]);
});

test("7th", () => {
  expect(obj.getFact(12)).toEqual([2, 2, 3]);
});

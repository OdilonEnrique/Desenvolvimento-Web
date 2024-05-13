import { describe, expect, it, test } from "vitest";
import { subNumbers, sumNumbers } from "./mathServices";

console.log(sumNumbers(1, 2));

describe("test math functions", () => {
  test("should make a sum 2 + 3 = 5", () => {
    expect(sumNumbers(2, 3)).toEqual(5);
  });
});

describe("test math functions", () => {
  it("should make a sum 2 + 3 = 5", () => {
    expect(subNumbers(5, 2)).toEqual(3);
  });
});

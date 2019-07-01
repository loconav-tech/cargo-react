import { testMethod } from "../src/index";

test("create a new hello", () => {
  expect(testMethod("World")).toBe("Hello World");
});

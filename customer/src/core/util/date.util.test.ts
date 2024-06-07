import { expect, test } from "vitest";
import { DateUtil } from "./date.util";

test("01/01/1970 is before today", () => {
  expect(DateUtil.isBeforeToday(new Date(1970, 1, 1))).toBe(true);
});

test("31/12/9999 is after today", () => {
  expect(DateUtil.isBeforeToday(new Date(9999, 31, 12))).toBe(false);
});

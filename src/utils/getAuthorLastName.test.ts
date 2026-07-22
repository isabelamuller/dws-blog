import { describe, expect, it } from "vitest";
import { getAuthorLastName } from "./getAuthorLastName";

describe("getAuthorLastName", () => {
  it("returns the author's last name", () => {
    expect(getAuthorLastName("Isabela Müller")).toBe("Müller");
  });

  it("returns the name when only one name is provided", () => {
    expect(getAuthorLastName("Isabela")).toBe("Isabela");
  });
});

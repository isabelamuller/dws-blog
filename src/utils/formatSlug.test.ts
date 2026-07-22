import { describe, expect, it } from "vitest";
import { formatSlug } from "./formatSlug";

describe("formatSlug", () => {
  it("returns the slug formatted", () => {
    expect(formatSlug("This is a slug formatting test")).toBe(
      "this-is-a-slug-formatting-test",
    );
  });

  it("returns the slug formatted when there is a special character", () => {
    expect(
      formatSlug(
        "This $ is a * slug formatting test with random # special characters",
      ),
    ).toBe("this-is-a-slug-formatting-test-with-random-special-characters");
  });
});

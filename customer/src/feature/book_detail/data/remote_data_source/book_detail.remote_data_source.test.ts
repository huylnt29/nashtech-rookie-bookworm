import { describe, it, expect } from "vitest";
import ApiClient from "../../../../core/network/remote/api_client";

describe("BookDetailRemoteDataSource", () => {
  it("Should return a book", async () => {
    expect(await ApiClient.getBookDetail("1")).toHaveProperty("id", 1);
  });
});

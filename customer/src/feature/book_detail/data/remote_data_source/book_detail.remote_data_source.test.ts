import { describe, it, expect, vi } from "vitest";
import { BookDetail } from "../model/book_detail.type";
import ApiClient from "../../../../core/network/remote/api_client";

describe("BookDetailRemoteDataSource", () => {
  it("Should return a book", async () => {
    // just a dummy quote
    const dummyBook: BookDetail = {
      id: 1,
      name: "",
      batchId: 0,
      imageUrls: [],
      description: "",
      publishedYear: 0,
      totalSoldQuantity: 0,
      averageRating: 0,
      remainingQuantity: 0,
      price: 0,
      publisher: {
        id: 0,
        name: "",
      },
      category: {
        id: 0,
        name: "",
      },
      authors: [],
      discount: {
        id: 0,
        percentage: 0,
        minQuantity: 0,
        maxQuantity: "",
        endAt: "",
      },
      reviews: [],
    };

    const mockResponse = {
      ok: true,
      statusText: "OK",
      json: async () => dummyBook,
    } as Response;

    globalThis.fetch = vi.fn().mockResolvedValue(mockResponse);
    // state verification
    expect(await ApiClient.getBookDetail("1")).toMatchObject(dummyBook);
  });
});

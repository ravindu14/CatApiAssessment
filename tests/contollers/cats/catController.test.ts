import "reflect-metadata";

import { CatController } from "../../../src/controllers/cats";
import { InvalidRequestException } from "../../../src/shared/exceptions/request.exception";

const catService = {
  getTopCatBreeds: jest.fn().mockResolvedValueOnce([]),
};

describe("CatController", () => {
  const next = jest.fn();

  beforeEach(() => {
    next.mockClear();
  });

  it("will throw an exception with empty category", async () => {
    const catController = new CatController(catService as any);
    await catController.getTopCatBreeds(
      { query: { category: undefined } },
      {},
      next
    );
    expect(next).toBeCalledWith(new InvalidRequestException());
    expect(next).toHaveBeenCalledTimes(1);
  });

  it("will call cat service with valid category", async () => {
    const catController = new CatController(catService as any);
    await catController.getTopCatBreeds(
      { query: { category: "stranger_friendly" } },
      {},
      next
    );
    expect(catService.getTopCatBreeds).toHaveBeenCalledTimes(1);
  });
});

import { Request, Response, NextFunction } from "express";
import { CatService } from "../../services/cat/catService";
import {
  InternalServerError,
  InvalidRequestException,
} from "../../shared/exceptions/request.exception";
import Controller from "../../shared/interfaces/controller.interface";

export class CatController implements Controller {
  private catService;
  constructor(cat: CatService) {
    this.catService = cat;
  }

  public getTopCatBreeds = async (
    request: Request,
    response: Response,
    next: NextFunction
  ) => {
    try {
      const { category } = request.query;

      if (!category) {
        return next(new InvalidRequestException());
      }

      const data = await this.catService.getTopCatBreeds(category);
      return response.status(200).json({ success: true, data });
    } catch (error) {
      return next(new InternalServerError());
    }
  };
}

/**
 * Create instance from CatController
 * @returns new CatController
 */
export const createCatController = (): CatController => {
  return new CatController(new CatService());
};

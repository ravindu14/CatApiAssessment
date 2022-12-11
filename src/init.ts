import * as bodyParser from "body-parser";
import * as express from "express";
import * as cors from "cors";
import { initRoutes } from "./routes";

export default class Init {
  public app: express.Application;

  constructor() {
    this.app = express();

    this.initializeMiddleware();
    this.app.use("/", initRoutes());
  }

  private initializeMiddleware() {
    this.app.use(bodyParser.json());
    this.app.use(cors());
  }

  /*
   *Run application on port 8080
   */
  public listen() {
    this.app.listen(8080, () => {
      console.log(`Connected to 8080`);
    });
  }
}

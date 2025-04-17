import cors from "cors";
import cookieParser from "cookie-parser";

export default function (app: Application) {

  app.use(cookieParser());

}
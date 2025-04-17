import ExpressConfig from "./server/express.config.js";
import MiddlewareConfig from "./server/middleware.config.js";
import RouteConfig from "./server/route.config.js";

const app = ExpressConfig();

MiddlewareConfig(app)
RouteConfig(app)

const PORT = 5000;

app.listen(PORT, async () => {
  console.log(`Multi Tenant Backend running on port ${PORT}`);
});
import ExpressConfig from "./server/express-config.js";

const app = ExpressConfig();

const PORT = 5000;


app.listen(PORT, async () => {
    console.log(`Multi Tenant Backend running on port ${PORT}`);
})
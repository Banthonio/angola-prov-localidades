require ('dotenv').config();

import express from 'express'
import swaggerUi from 'swagger-ui-express';
import cors from 'cors';

import routes from './routes';
import swaggerDocs from './swagger.json';

const app = express();
const port = process.env.PORT || 8000;

app.use(cors());
app.use(express.json());
app.use(routes);

app.use("/api-docs", swaggerUi.serve, swaggerUi.setup(swaggerDocs))

app.get("/terms", (request, response) => {
   return response.json({
      message: "Free to all",
   })
})

app.use("/v1", routes)

app.listen(port, () => {
   console.info(`Engine Start on http://localhost:${port}`)
})
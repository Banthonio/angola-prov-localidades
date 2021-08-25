require ('dotenv').config();

import express from 'express'
import cors from 'cors';

import routes from './routes';

const app = express();
const port = process.env.PORT || 8000;

app.use(cors());
app.use(express.json());
app.use(routes);

app.use("/v1", routes)

app.listen(port, () => {
   console.info(`Engine Start on http://localhost:${port}`)
})
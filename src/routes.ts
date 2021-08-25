import express from 'express'
import swaggerUi from 'swagger-ui-express';
import swaggerDocs from './swagger.json';

import ProvinceController from './controllers/ProvinceController'
import CityController from './controllers/CityController'
import CommuneController from './controllers/CommuneController';
import DistrictController from './controllers/DistrictController'

const routes = express.Router();

const provinceController = new ProvinceController();
const cityController = new CityController();
const communeController = new CommuneController();
const districtController = new DistrictController();

routes.get('/', (req, res) => {
   res.redirect(301, "/api-docs")
})

routes.use("/api-docs", swaggerUi.serve, swaggerUi.setup(swaggerDocs))

routes.get("/terms", (req, res) => {
   return res.json({
      message: "Free to all",
   })
})

routes.get('/provinces', provinceController.index);
routes.get('/provinces/code/:code', provinceController.showCode);
routes.get('/provinces/name/:name', provinceController.showName);
routes.get('/provinces/capital/:capital', provinceController.showCapital);
routes.get('/provinces/lang/:lang', provinceController.showLang);

routes.get('/cities/code/:code', cityController.showCode);
routes.get('/cities/name/:name', cityController.showName);

// NOTE This must come before route that displays city (uses id)
routes.get('/communes', communeController.index); //obtem o conjunto de comunas de Angola
routes.get('/provinces/:province/communes', communeController.showProvince); // obtem o conjunto de comunas de Angola a partir da provincia
routes.get('/cities/:city/communes', communeController.showCity); // obtem o conjunto de comunas de Angola a partir da cidade

// NOTE This must come before route that displays city (uses id)
routes.get('/districts', districtController.index); //obtem o conjunto de distritos de Angola
routes.get('/provinces/:province/districts', districtController.showProvince); // obtem o conjunto de distritos de Angola a partir da provincia
routes.get('/cities/:city/districts', districtController.showCity); // obtem o conjunto de distritos de Angola a partir da cidade



export default routes;
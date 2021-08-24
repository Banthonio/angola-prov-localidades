import express from 'express'

import ProvinceController from './controllers/ProvinceController'
import CityController from './controllers/CityController'
import CommuneController from './controllers/CommuneController';
import DistrictController from './controllers/DistrictController'

const routes = express.Router();

const provinceController = new ProvinceController();
const cityController = new CityController();
const communeController = new CommuneController();
const districtController = new DistrictController();

routes.get('/province', provinceController.index);
routes.get('/province/code/:code', provinceController.showCode);
routes.get('/province/name/:name', provinceController.showName);
routes.get('/province/capital/:capital', provinceController.showCapital);
routes.get('/province/lang/:lang', provinceController.showLang);

routes.get('/city/code/:code', cityController.showCode);
routes.get('/city/name/:name', cityController.showName);

// NOTE This must come before route that displays city (uses id)
routes.get('/commune', communeController.index); //obtem o conjunto de comunas de Angola
routes.get('/province/:province/commune', communeController.showProvince); // obtem o conjunto de comunas de Angola a partir da provincia
routes.get('/city/:city/commune', communeController.showCity); // obtem o conjunto de comunas de Angola a partir da cidade

// NOTE This must come before route that displays city (uses id)
routes.get('/district', districtController.index); //obtem o conjunto de distritos de Angola
routes.get('/province/:province/district', districtController.showProvince); // obtem o conjunto de distritos de Angola a partir da provincia
routes.get('/city/:city/district', districtController.showCity); // obtem o conjunto de distritos de Angola a partir da cidade



export default routes;
import { Request, Response } from 'express'
import knex from '../database/connection';

class CityController {

   // City by code
   async showCode(req: Request, res: Response) {
      const { code } = req.params;

      const cityCode = await knex('province')
         .innerJoin('city', 'province.id', 'city.province_id')
         .select('province.*', 'city.id as city_id', 'city.code as city_code', 'city.name as city_name')
         .as('ignored_alias')
         .where('city.code', 'ilike', `%${code}%`);

      return res.json(cityCode);
   }

   // City by name
   async showName(req: Request, res: Response) {
      const { name } = req.params;

      const cityName = await knex('province')
         .innerJoin('city', 'province.id', 'city.province_id')
         .select('province.*', 'city.id as city_id', 'city.code as city_code', 'city.name as city_name')
         .as('ignored_alias')
         .where('city.name', 'ilike', `%${name}%`);

      return res.json(cityName);
   }
}

export default CityController;
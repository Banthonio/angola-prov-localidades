import { Request, Response } from 'express'
import knex from '../database/connection';

class CityController {

   // City by code
   async showCode(req: Request, res: Response) {
      const { code } = req.params;

      await knex('province')
         .innerJoin('city', 'province.id', 'city.province_id')
         .select('province.*', 'city.id as city_id', 'city.code as city_code', 'city.name as city_name')
         .as('ignored_alias')
         .where('city.code', 'ilike', `%${code}%`)

         .then(function (rows: any[]) {
            if (rows.length === 0) {
               return res.status(404).json({ error: "No matching records found" });
            } else {
               return res.status(200).json(rows);
            }
         })
         .catch(function (err: Error) {
            return res.json({ error: err });
         })
   }

   // City by name
   async showName(req: Request, res: Response) {
      const { name } = req.params;

      await knex('province')
         .innerJoin('city', 'province.id', 'city.province_id')
         .select('province.*', 'city.id as city_id', 'city.code as city_code', 'city.name as city_name')
         .as('ignored_alias')
         .where('city.name', 'ilike', `%${name}%`)

         .then(function (rows: any[]) {
            if (rows.length === 0) {
               return res.status(404).json({ error: "No matching records found" });
            } else {
               return res.status(200).json(rows);
            }
         })
         .catch(function (err: Error) {
            return res.json({ error: err });
         })
   }
}

export default CityController;
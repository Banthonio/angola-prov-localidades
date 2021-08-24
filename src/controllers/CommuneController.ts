import { Request, Response } from 'express'
import knex from '../database/connection';


/* function to grouo and merge the given array by id and other properties */
function groupArray(array: any[]) {
   const groupAndMerge = (comunes: any[], groupBy: string, mergeWith: string) =>
      Array.from(comunes.reduce((m, o) => m.set(o[groupBy], { ...o, [mergeWith]: [...(m.get(o[groupBy])?.[mergeWith] ?? []), o[mergeWith]] }), new Map).values());
   return groupAndMerge(array, 'id', 'commune_name');
}

class CommuneController {

   // Communes
   async index(req: Request, res: Response) {
      const communes = await knex('province')
         .innerJoin('city', 'province.id', 'city.province_id')
         .innerJoin('commune', 'city.id', 'commune.city_id')
         .select('province.*', 'commune.name as commune_name')
         .as('ignored_alias');

      return res.json(groupArray(communes));
   }

   // Commmunes by province
   async showProvince(req: Request, res: Response) {
      const { province } = req.params;

      const communesProvince = await knex('province')
         .innerJoin('city', 'province.id', 'city.province_id')
         .innerJoin('commune', 'city.id', 'commune.city_id')
         .select('province.*', 'commune.name as commune_name')
         .as('ignored_alias')
         .where('province.name', 'ilike', `%${province}%`)
         .orWhere('province.code', 'ilike', `%${province}%`);

      return res.json(groupArray(communesProvince));
   }

   // Commmunes by city
   async showCity(req: Request, res: Response) {
      const { city } = req.params;

      const communesCity = await knex('province')
         .innerJoin('city', 'province.id', 'city.province_id')
         .innerJoin('commune', 'city.id', 'commune.city_id')
         .select('province.*', 'city.name as city_name', 'commune.name as commune_name')
         .as('ignored_alias')
         .where('city.name', 'ilike', `%${city}%`)
         .orWhere('city.code', 'ilike', `%${city}%`);

      return res.json(groupArray(communesCity));
   }
}
export default CommuneController;
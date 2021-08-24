import { Request, Response } from 'express'
import knex from '../database/connection';


/* function to grouo and merge the given array by id and other properties */
function groupArray(array: any[]) {
   const groupAndMerge = (districts: any[], groupBy: string, mergeWith: string) =>
      Array.from(districts.reduce((m, o) => m.set(o[groupBy], { ...o, [mergeWith]: [...(m.get(o[groupBy])?.[mergeWith] ?? []), o[mergeWith]] }), new Map).values());
   return groupAndMerge(array, 'city_code', 'district_name');
}

class DistrictController {

   // District
   async index(req: Request, res: Response) {
      const districts = await knex('province')
         .innerJoin('city', 'province.id', 'city.province_id')
         .innerJoin('district', 'city.id', 'district.city_id')
         .select('province.*', 'city.code as city_code', 'city.name as city_name', 'district.name as district_name')
         .as('ignored_alias');

      return res.json(groupArray(districts));
   }

   // District by province
   async showProvince(req: Request, res: Response) {
      const { province } = req.params;

      const districtsProvince = await knex('province')
         .innerJoin('city', 'province.id', 'city.province_id')
         .innerJoin('district', 'city.id', 'district.city_id')
         .select('province.*', 'district.name as district_name')
         .as('ignored_alias')
         .where('province.name', 'ilike', `%${province}%`)
         .orWhere('province.code', 'ilike', `%${province}%`);

         return res.json(groupArray(districtsProvince));
   }

   // District by city
   async showCity(req: Request, res: Response) {
      const { city } = req.params;

      const districtsCity = await knex('province')
         .innerJoin('city', 'province.id', 'city.province_id')
         .innerJoin('district', 'city.id', 'district.city_id')
         .select('province.*', 'city.code as city_code', 'city.name as city_name', 'district.name as district_name')
         .as('ignored_alias')
         .where('city.name', 'ilike', `%${city}%`)
         .orWhere('city.code', 'ilike', `%${city}%`);

         return res.json(groupArray(districtsCity));
   }
}

export default DistrictController
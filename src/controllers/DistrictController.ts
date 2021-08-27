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
      await knex('province')
         .innerJoin('city', 'province.id', 'city.province_id')
         .innerJoin('district', 'city.id', 'district.city_id')
         .select('province.*', 'city.code as city_code', 'city.name as city_name', 'district.name as district_name')
         .as('ignored_alias')

         .then(function (rows: any[]) {
            if (rows.length === 0) {
               return res.status(404).json({ error: "No matching records found" });
            } else {
               return res.status(200).json(groupArray(rows));
            }
         })
         .catch(function (err: Error) {
            return res.json({ error: err });
         })
   }

   // District by province
   async showProvince(req: Request, res: Response) {
      const { province } = req.params;

      await knex('province')
         .innerJoin('city', 'province.id', 'city.province_id')
         .innerJoin('district', 'city.id', 'district.city_id')
         .select('province.*', 'district.name as district_name')
         .as('ignored_alias')
         .where('province.name', 'ilike', `%${province}%`)
         .orWhere('province.code', 'ilike', `%${province}%`)

         .then(function (rows: any[]) {
            if (rows.length === 0) {
               return res.status(404).json({ error: "No matching records found" });
            } else {
               return res.status(200).json(groupArray(rows));
            }
         })
         .catch(function (err: Error) {
            return res.json({ error: err });
         })
   }

   // District by city
   async showCity(req: Request, res: Response) {
      const { city } = req.params;

      await knex('province')
         .innerJoin('city', 'province.id', 'city.province_id')
         .innerJoin('district', 'city.id', 'district.city_id')
         .select('province.*', 'city.code as city_code', 'city.name as city_name', 'district.name as district_name')
         .as('ignored_alias')
         .where('city.name', 'ilike', `%${city}%`)
         .orWhere('city.code', 'ilike', `%${city}%`)

         .then(function (rows: any[]) {
            if (rows.length === 0) {
               return res.status(404).json({ error: "No matching records found" });
            } else {
               return res.status(200).json(groupArray(rows));
            }
         })
         .catch(function (err: Error) {
            return res.json({ error: err });
         })
   }
}

export default DistrictController
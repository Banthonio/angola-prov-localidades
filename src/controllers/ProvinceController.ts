import { Request, Response } from 'express'
import knex from '../database/connection';

/* function to grouo and merge the given array by id and other properties */
function groupArray(array: any[]) {
   const groupAndMerge = (provinces: any[], groupBy: string, mergeWith: string) =>
      Array.from(provinces.reduce((m, o) => m.set(o[groupBy], { ...o, [mergeWith]: [...(m.get(o[groupBy])?.[mergeWith] ?? []), o[mergeWith]] }), new Map).values());
   return groupAndMerge(array, 'id', 'city_name');
}

class ProvinceController {

   // Province
   async index(req: Request, res: Response) {
      await knex('province')
         .innerJoin('city', 'province.id', 'city.province_id')
         .select('province.*', 'city.name as city_name')
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

   // Province by code
   async showCode(req: Request, res: Response) {
      const { code } = req.params;

      await knex('province')
         .innerJoin('city', 'province.id', 'city.province_id')
         .select('province.*', 'city.name as city_name')
         .as('ignored_alias')
         .where('province.code', 'ilike', `%${code}%`)

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

   // Province by name
   async showName(req: Request, res: Response) {
      const { name } = req.params;

      await knex('province')
         .innerJoin('city', 'province.id', 'city.province_id')
         .select('province.*', 'city.name as city_name')
         .as('ignored_alias')
         .where('province.name', 'ilike', `%${name}%`)

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

   // Province by capital
   async showCapital(req: Request, res: Response) {
      const { capital } = req.params;

      await knex('province')
         .innerJoin('city', 'province.id', 'city.province_id')
         .select('province.*', 'city.name as city_name')
         .as('ignored_alias')
         .where('province.capital', 'ilike', `%${capital}%`)

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

   // Province by language
   async showLang(req: Request, res: Response) {
      const { lang } = req.params;

      await knex('province')
         .innerJoin('city', 'province.id', 'city.province_id')
         .select('province.*', 'city.name as city_name')
         .as('ignored_alias')
         .where('province.language', 'ilike', `%${lang}%`)

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

export default ProvinceController
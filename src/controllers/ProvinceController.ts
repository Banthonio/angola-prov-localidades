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
      const provinces = await knex('province')
         .innerJoin('city', 'province.id', 'city.province_id')
         .select('province.*', 'city.name as city_name')
         .as('ignored_alias');

      return res.json(groupArray(provinces));
   }

   // Province by code
   async showCode(req: Request, res: Response) {
      const { code } = req.params;

      const provincesCodes = await knex('province')
         .innerJoin('city', 'province.id', 'city.province_id')
         .select('province.*', 'city.name as city_name')
         .as('ignored_alias')
         .where('province.code', 'ilike', `%${code}%`);

      return res.json(groupArray(provincesCodes));
   }

   // Province by name
   async showName(req: Request, res: Response) {
      const { name } = req.params;

      const provincesNames = await knex('province')
         .innerJoin('city', 'province.id', 'city.province_id')
         .select('province.*', 'city.name as city_name')
         .as('ignored_alias')
         .where('province.name', 'ilike', `%${name}%`);

      return res.json(groupArray(provincesNames));
   }

   // Province by capital
   async showCapital(req: Request, res: Response) {
      const { capital } = req.params;

      const provincesCapitals = await knex('province')
         .innerJoin('city', 'province.id', 'city.province_id')
         .select('province.*', 'city.name as city_name')
         .as('ignored_alias')
         .where('province.capital', 'ilike', `%${capital}%`);

      return res.json(groupArray(provincesCapitals));
   }

   // Province by language
   async showLang(req: Request, res: Response) {
      const { lang } = req.params;

      const provincesLangs = await knex('province')
         .innerJoin('city', 'province.id', 'city.province_id')
         .select('province.*', 'city.name as city_name')
         .as('ignored_alias')
         .where('province.language', 'ilike', `%${lang}%`);

      return res.json(groupArray(provincesLangs));
   }
}

export default ProvinceController
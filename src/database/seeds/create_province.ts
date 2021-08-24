import * as Knex from 'knex';

export async function seed(knex: Knex): Promise<void> {
   // Deletes ALL existing entries
   await knex('province').del();
   
   // Inserts seed entries
   await knex('province').insert([
      { name: 'Cabinda', code: 'AOCDA01', capital: 'Cabinda', language: 'Ibinda, Kicongo', latitude: '-5.0814219', longitude: '11.9993211', area: '7270' },
      { name: 'Zaire', code: 'AOZRE02', capital: 'M´Banza Congo', language: 'Kicongo', latitude: '-6.8197003', longitude: '13.0687026', area: '40130' },
      { name: 'Uíge', code: 'AOUGE03', capital: 'Uíge', language: 'Kicongo', latitude: '-7.1344167', longitude: '14.3353965', area: '58698' },
      { name: 'Bengo', code: 'AOBGO04', capital: 'Caxito', language: 'Kimbundo', latitude: '-9.0256947', longitude: '12.7871408', area: '15506' },
      { name: 'Luanda', code: 'AOLDA05', capital: 'Luanda', language: 'Kimbundo', latitude: '-8.9859681', longitude: '13.033365', area: '18283' },
      { name: 'Cuanza Norte', code: 'AOCNO06', capital: 'N´dalatando', language: 'Kimbundo', latitude: '-8.8570027', longitude: '14.3860695', area: '24190' },
      { name: 'Cuanza Sul', code: 'AOCSU07', capital: 'Sumbe', language: 'Kimbundo', latitude: '-10.9373512', longitude: '13.9327943', area: '55660' },
      { name: 'Malanje', code: 'AOMJE08', capital: 'Malanje', language: 'Kimbundo', latitude: '-9.5232123', longitude: '15.8572322', area: '97602' },
      { name: 'Lunda Norte', code: 'AOLNO09', capital: 'Dundo', language: 'Tchokwé ', latitude: '-8.7893717', longitude: '18.50784', area: '102783' },
      { name: 'Lunda Sul', code: 'AOLSU10', capital: 'Saurimo', language: 'Tchokwé ', latitude: '-9.892852', longitude: '19.2786725', area: '45649' },
      { name: 'Moxico', code: 'AOMCO11', capital: 'Luena', language: 'Tchokwé ', latitude: '-13.3644685', longitude: '18.7656805', area: '223023' },
      { name: 'Bié', code: 'AOBIE12', capital: 'Cuíto', language: 'Umbundo', latitude: '-12.4372196', longitude: '16.3796108', area: '70314' },
      { name: 'Huambo', code: 'AOHBO13', capital: 'Huambo', language: 'Umbundo', latitude: '-12.5991135', longitude: '15.1333086', area: '34274' },
      { name: 'Benguela', code: 'AOBLA14', capital: 'Benguela', language: 'Umbundo', latitude: '-12.8172917', longitude: '13.2583164', area: '31788' },
      { name: 'Namibe', code: 'AONBE15', capital: 'Moçâmedes', language: 'Umbundu, Kwanyama, Ngangela', latitude: '-15.3854367', longitude: '11.5563556', area: '58137' },
      { name: 'Huíla', code: 'AOHLA16', capital: 'Lubango', language: 'Nyaneka, Umbundu, Ngangela', latitude: '-14.8473374', longitude: '13.8593486', area: '75002' },
      { name: 'Cunene', code: 'AOCNE17', capital: 'Ondjiva', language: 'Oshiwambo', latitude: '-16.2866677', longitude: '14.156565', area: '89342' },
      { name: 'Cuando Cubango', code: 'AOCCU18', capital: 'Menongue', language: 'Ganguela', latitude: '-15.7972094', longitude: '18.825488', area: '199049' },        
   ]);
}
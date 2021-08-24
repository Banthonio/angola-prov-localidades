export async function seed(knex): Promise<void> {
   // Deletes ALL existing entries
   await knex('city').del();

   // Inserts seed entries
   await knex('city').insert([
      { province_id: '1', name: 'Cabinda', code: 'AOCDA0101' },
      { province_id: '1', name: 'Cacongo', code: 'AOCDA0102' },
      { province_id: '1', name: 'Buco Zau', code: 'AOCDA0103' },
      { province_id: '1', name: 'Belize', code: 'AOCDA0104' },
      { province_id: '2', name: 'Soyo', code: 'AOZRE0201' },
      { province_id: '2', name: 'Mbanza Kongo', code: 'AOZRE0202' },
      { province_id: '2', name: 'Nzeto', code: 'AOZRE0203' },
      { province_id: '2', name: 'Tomboco', code: 'AOZRE0204' },
      { province_id: '2', name: 'Cuimba', code: 'AOZRE0205' },
      { province_id: '2', name: 'Nóqui', code: 'AOZRE0206' },
      { province_id: '3', name: 'Dange - Quitexe', code: 'AOUGE0301' },
      { province_id: '3', name: 'Bungo', code: 'AOUGE0302' },
      { province_id: '3', name: 'Ambuíla', code: 'AOUGE0303' },
      { province_id: '3', name: 'Negage', code: 'AOUGE0304' },
      { province_id: '3', name: 'Puri', code: 'AOUGE0305' },
      { province_id: '3', name: 'Maquela do Zombo', code: 'AOUGE0306' },
      { province_id: '3', name: 'Damba', code: 'AOUGE0307' },
      { province_id: '3', name: 'Pombo', code: 'AOUGE0308' },
      { province_id: '3', name: 'Bembe', code: 'AOUGE0309' },
      { province_id: '3', name: 'Milunga', code: 'AOUGE0310' },
      { province_id: '3', name: 'Songo', code: 'AOUGE0311' },
      { province_id: '3', name: 'Quimbele', code: 'AOUGE0312' },
      { province_id: '3', name: 'Alto Cauale', code: 'AOUGE0313' },
      { province_id: '3', name: 'Uíge', code: 'AOUGE0314' },
      { province_id: '3', name: 'Mucaba', code: 'AOUGE0315' },
      { province_id: '3', name: 'Buengas', code: 'AOUGE0316' },
      { province_id: '4', name: 'Dande', code: 'AOBGO0401' },
      { province_id: '4', name: 'Dembos', code: 'AOBGO0402' },
      { province_id: '4', name: 'Nambuangongo', code: 'AOBGO0403' },
      { province_id: '4', name: 'Bula-Atumba', code: 'AOBGO0404' },
      { province_id: '4', name: 'Ambriz', code: 'AOBGO0405' },
      { province_id: '4', name: 'Pango Aluquém', code: 'AOBGO0406' },
      { province_id: '5', name: 'Luanda', code: 'AOLDA0501' },
      { province_id: '5', name: 'Ícolo e Bengo', code: 'AOLDA0502' },
      { province_id: '5', name: 'Quiçama', code: 'AOLDA0503' },
      { province_id: '5', name: 'Cacuaco', code: 'AOLDA0504' },
      { province_id: '5', name: 'Cazenga', code: 'AOLDA0505' },
      { province_id: '5', name: 'Viana', code: 'AOLDA0506' },
      { province_id: '5', name: 'Belas', code: 'AOLDA0507' },
      { province_id: '5', name: 'Talatona', code: 'AOLDA0508' },
      { province_id: '5', name: 'Kilamba Kiaxi', code: 'AOLDA0509' },
      { province_id: '6', name: 'Cazengo', code: 'AOCNO0601' },
      { province_id: '6', name: 'Golungo Alto', code: 'AOCNO0602' },
      { province_id: '6', name: 'Cambambe', code: 'AOCNO0603' },
      { province_id: '6', name: 'Samba Cajú', code: 'AOCNO0604' },
      { province_id: '6', name: 'Ambaca', code: 'AOCNO0605' },
      { province_id: '6', name: 'Lucala', code: 'AOCNO0606' },
      { province_id: '6', name: 'Banga', code: 'AOCNO0607' },
      { province_id: '6', name: 'Bolongongo', code: 'AOCNO0608' },
      { province_id: '6', name: 'Quiculungo', code: 'AOCNO0609' },
      { province_id: '6', name: 'Ngonguembo', code: 'AOCNO0610' },
      { province_id: '7', name: 'Sumbe', code: 'AOCSU0701' },
      { province_id: '7', name: 'Libolo', code: 'AOCSU0702' },
      { province_id: '7', name: 'Amboím', code: 'AOCSU0703' },
      { province_id: '7', name: 'Cassongue', code: 'AOCSU0704' },
      { province_id: '7', name: 'Porto Amboím', code: 'AOCSU0705' },
      { province_id: '7', name: 'Quibala', code: 'AOCSU0706' },
      { province_id: '7', name: 'Seles', code: 'AOCSU0707' },
      { province_id: '7', name: 'Cela', code: 'AOCSU0708' },
      { province_id: '7', name: 'Mussende', code: 'AOCSU0709' },
      { province_id: '7', name: 'Quilenda', code: 'AOCSU0710' },
      { province_id: '7', name: 'Ebo', code: 'AOCSU0711' },
      { province_id: '7', name: 'Conda', code: 'AOCSU0712' },
      { province_id: '8', name: 'Calandula', code: 'AOMJE0801' },
      { province_id: '8', name: 'Malanje', code: 'AOMJE0802' },
      { province_id: '8', name: 'Cacuso', code: 'AOMJE0803' },
      { province_id: '8', name: 'Massango', code: 'AOMJE0804' },
      { province_id: '8', name: 'Marimba', code: 'AOMJE0805' },
      { province_id: '8', name: 'Quela', code: 'AOMJE0806' },
      { province_id: '8', name: 'Quirima', code: 'AOMJE0807' },
      { province_id: '8', name: 'Cangandala', code: 'AOMJE0808' },
      { province_id: '8', name: 'Cahombo', code: 'AOMJE0809' },
      { province_id: '8', name: 'Kunda dya Baze', code: 'AOMJE0810' },
      { province_id: '8', name: 'Cambundi Catembo', code: 'AOMJE0811' },
      { province_id: '8', name: 'Mucari', code: 'AOMJE0812' },
      { province_id: '8', name: 'Kiwaba Nzoji', code: 'AOMJE0813' },
      { province_id: '8', name: 'Luquembo', code: 'AOMJE0814' },
      { province_id: '9', name: 'Cuilo', code: 'AOLNO0901' },
      { province_id: '9', name: 'Caungula', code: 'AOLNO0902' },
      { province_id: '9', name: 'Chitato', code: 'AOLNO0903' },
      { province_id: '9', name: 'Lubalo', code: 'AOLNO0904' },
      { province_id: '9', name: 'Capenda Camulemba', code: 'AOLNO0905' },
      { province_id: '9', name: 'Cuango', code: 'AOLNO0906' },
      { province_id: '9', name: 'Lucapa', code: 'AOLNO0907' },
      { province_id: '9', name: 'Cambulo', code: 'AOLNO0908' },
      { province_id: '9', name: 'Xá-Muteba', code: 'AOLNO0909' },
      { province_id: '9', name: 'Lóvua', code: 'AOLNO0910' },
      { province_id: '10', name: 'Saurimo', code: 'AOLSU1001' },
      { province_id: '10', name: 'Muconda', code: 'AOLSU1002' },
      { province_id: '10', name: 'Cacolo', code: 'AOLSU1003' },
      { province_id: '10', name: 'Dala', code: 'AOLSU1004' },
      { province_id: '11', name: 'Moxico', code: 'AOMCO1101' },
      { province_id: '11', name: 'Luchazes', code: 'AOMCO1102' },
      { province_id: '11', name: 'Alto Zambeze', code: 'AOMCO1103' },
      { province_id: '11', name: 'Bundas', code: 'AOMCO1104' },
      { province_id: '11', name: 'Luacano', code: 'AOMCO1105' },
      { province_id: '11', name: 'Cameia', code: 'AOMCO1106' },
      { province_id: '11', name: 'Camanongue', code: 'AOMCO1107' },
      { province_id: '11', name: 'Luau', code: 'AOMCO1108' },
      { province_id: '11', name: 'Léua', code: 'AOMCO1109' },
      { province_id: '12', name: 'Andulo', code: 'AOBIE1201' },
      { province_id: '12', name: 'Chitembo', code: 'AOBIE1202' },
      { province_id: '12', name: 'Cuito', code: 'AOBIE1203' },
      { province_id: '12', name: 'Camacupa', code: 'AOBIE1204' },
      { province_id: '12', name: 'Chinguar', code: 'AOBIE1205' },
      { province_id: '12', name: 'Catabola', code: 'AOBIE1206' },
      { province_id: '12', name: 'Cunhinga', code: 'AOBIE1207' },
      { province_id: '12', name: 'Cuemba', code: 'AOBIE1208' },
      { province_id: '12', name: 'Nharêa', code: 'AOBIE1209' },
      { province_id: '13', name: 'Bailundo', code: 'AOHBO1301' },
      { province_id: '13', name: 'Huambo', code: 'AOHBO1302' },
      { province_id: '13', name: 'Londuimbali', code: 'AOHBO1303' },
      { province_id: '13', name: 'Caála', code: 'AOHBO1304' },
      { province_id: '13', name: 'Chicala Choloanga', code: 'AOHBO1305' },
      { province_id: '13', name: 'Cachiungo', code: 'AOHBO1306' },
      { province_id: '13', name: 'Mungo', code: 'AOHBO1307' },
      { province_id: '13', name: 'Longonjo', code: 'AOHBO1308' },
      { province_id: '13', name: 'Ucuma', code: 'AOHBO1309' },
      { province_id: '13', name: 'Ecunha', code: 'AOHBO1310' },
      { province_id: '13', name: 'Chinjenje', code: 'AOHBO1311' },
      { province_id: '14', name: 'Benguela', code: 'AOBLA1401' },
      { province_id: '14', name: 'Ganda', code: 'AOBLA1402' },
      { province_id: '14', name: 'Lobito', code: 'AOBLA1403' },
      { province_id: '14', name: 'Catumbela', code: 'AOBLA1404' },
      { province_id: '14', name: 'Bocoio', code: 'AOBLA1405' },
      { province_id: '14', name: 'Balombo', code: 'AOBLA1406' },
      { province_id: '14', name: 'Cubal', code: 'AOBLA1407' },
      { province_id: '14', name: 'Baía Farta', code: 'AOBLA1408' },
      { province_id: '14', name: 'Caimbambo', code: 'AOBLA1409' },
      { province_id: '14', name: 'Chongorói', code: 'AOBLA1410' },
      { province_id: '15', name: 'Moçâmedes', code: 'AONBE1501' },
      { province_id: '15', name: 'Tômbua', code: 'AONBE1502' },
      { province_id: '15', name: 'Bibala', code: 'AONBE1503' },
      { province_id: '15', name: 'Virei', code: 'AONBE1504' },
      { province_id: '15', name: 'Camucuio', code: 'AONBE1505' },
      { province_id: '16', name: 'Caconda', code: 'AOHLA1601' },
      { province_id: '16', name: 'Gambos', code: 'AOHLA1602' },
      { province_id: '16', name: 'Humpata', code: 'AOHLA1603' },
      { province_id: '16', name: 'Lubango', code: 'AOHLA1604' },
      { province_id: '16', name: 'Cuvango', code: 'AOHLA1605' },
      { province_id: '16', name: 'Quipungo', code: 'AOHLA1606' },
      { province_id: '16', name: 'Chibia', code: 'AOHLA1607' },
      { province_id: '16', name: 'Quilengues', code: 'AOHLA1608' },
      { province_id: '16', name: 'Caluquembe', code: 'AOHLA1609' },
      { province_id: '16', name: 'Matala', code: 'AOHLA1610' },
      { province_id: '16', name: 'Jamba', code: 'AOHLA1611' },
      { province_id: '16', name: 'Chipindo', code: 'AOHLA1612' },
      { province_id: '16', name: 'Chicomba', code: 'AOHLA1613' },
      { province_id: '16', name: 'Cacula', code: 'AOHLA1614' },
      { province_id: '17', name: 'Ombadja', code: 'AOCNE1701' },
      { province_id: '17', name: 'Cuanhama', code: 'AOCNE1701' },
      { province_id: '17', name: 'Curoca', code: 'AOCNE1701' },
      { province_id: '17', name: 'Cahama', code: 'AOCNE1701' },
      { province_id: '17', name: 'Cuvelai', code: 'AOCNE1701' },
      { province_id: '17', name: 'Namacunde', code: 'AOCNE1701' },
      { province_id: '18', name: 'Menongue', code: 'AOCCU1801' },
      { province_id: '18', name: 'Mavinga', code: 'AOCCU1802' },
      { province_id: '18', name: 'Dirico', code: 'AOCCU1803' },
      { province_id: '18', name: 'Cuito Cuanavale', code: 'AOCCU1804' },
      { province_id: '18', name: 'Cuchi', code: 'AOCCU1805' },
      { province_id: '18', name: 'Rivungo', code: 'AOCCU1806' },
      { province_id: '18', name: 'Calai', code: 'AOCCU1807' },
      { province_id: '18', name: 'Cuangar', code: 'AOCCU1808' },
      { province_id: '18', name: 'Nancova', code: 'AOCCU1809' },
   ]);
};
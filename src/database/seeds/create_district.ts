exports.seed = (knex) => {
	// Deletes ALL existing entries
	return knex('district').del()

	// Inserts seed entries
	.then(() => {
		return knex('district').insert([
			{ province_id: '5', city_id: '39', name: 'Quenguela' },
			{ province_id: '5', city_id: '39', name: 'Morro dos Veados' },
			{ province_id: '5', city_id: '39', name: 'Ramiros' },
			{ province_id: '5', city_id: '39', name: 'Vila Verde' },
			{ province_id: '5', city_id: '39', name: 'Cabolombo' },
			{ province_id: '5', city_id: '39', name: 'Kilamba' },
			{ province_id: '5', city_id: '36', name: 'Cacuaco' },
			{ province_id: '5', city_id: '36', name: 'Kikolo' },
			{ province_id: '5', city_id: '36', name: 'Mulenvos de Baixo' },
			{ province_id: '5', city_id: '36', name: 'Sequele' },
			{ province_id: '5', city_id: '37', name: 'Cazenga' },
			{ province_id: '5', city_id: '37', name: 'Hoji ya Henda' },
			{ province_id: '5', city_id: '37', name: '11 de Novembro' },
			{ province_id: '5', city_id: '37', name: 'Kima Kieza' },
			{ province_id: '5', city_id: '37', name: 'Tala Hadi' },
			{ province_id: '5', city_id: '37', name: 'Kalawenda' },
			{ province_id: '5', city_id: '34', name: 'Catete' },
			{ province_id: '5', city_id: '34', name: 'Bela Vista' },
			{ province_id: '5', city_id: '41', name: 'Golfe' },
			{ province_id: '5', city_id: '41', name: 'Sapú' },
			{ province_id: '5', city_id: '41', name: 'Palanca' },
			{ province_id: '5', city_id: '41', name: 'Nova Vida' },
			{ province_id: '5', city_id: '33', name: 'Sambizanga' },
			{ province_id: '5', city_id: '33', name: 'Rangel' },
			{ province_id: '5', city_id: '33', name: 'Maianga' },
			{ province_id: '5', city_id: '33', name: 'Ingombota' },
			{ province_id: '5', city_id: '33', name: 'Samba' },
			{ province_id: '5', city_id: '33', name: 'Neves Bendinha' },
			{ province_id: '5', city_id: '33', name: 'Ngola Kiluanje' },
			{ province_id: '5', city_id: '40', name: 'Talatona' },
			{ province_id: '5', city_id: '40', name: 'Benfica' },
			{ province_id: '5', city_id: '40', name: 'Futungo de Belas' },
			{ province_id: '5', city_id: '40', name: 'Lar do Patriota' },
			{ province_id: '5', city_id: '40', name: 'Camama' },
			{ province_id: '5', city_id: '40', name: 'Cidade Universitária' },
			{ province_id: '5', city_id: '38', name: 'Viana' },
			{ province_id: '5', city_id: '38', name: 'Estalagem' },
			{ province_id: '5', city_id: '38', name: 'Kikuxi' },
			{ province_id: '5', city_id: '38', name: 'Baía' },
			{ province_id: '5', city_id: '38', name: 'Zango' },
			{ province_id: '5', city_id: '38', name: 'Vila Flôr' },
			{ province_id: '9', city_id: '80', name: 'Chitato' },
			{ province_id: '9', city_id: '80', name: 'Dundo' },
			{ province_id: '9', city_id: '80', name: 'Mussungue' },
		]);
	})
}
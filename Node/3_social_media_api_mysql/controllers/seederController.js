const models = require('../models/models');

class SeederController {
	async runSeeder (req, res) {

		// await models.User.create({
		// 	name: 'Bob',
		// 	country: 'Italy'
		// });


		/*
		await models.Article.create({
			title: 'First Title',
			description: 'Good.',
			user: {
				name: 'Mike',
				country: 'Getmany'
			}
		}, {
			include: [
				models.User
			]
		});
		*/

		// user has many articles
		await models.User.create({
			email: 'bob@bob.com',
			password: '$2b$05$kf61ZYftqz97X3jrhhWkL.43KTt6GK.yMunmFUgi/HYuPjTDkDHje', // 123
			name: 'Bob',
			country: 'Italy',
			articles: [
				{
					title: 'Bob first Title',
					description: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmodtempor incididunt ut labore et dolore magna aliqua.',	
				},
				{
					title: 'Bob second article',
					description: 'Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit',	
				},	{
					title: 'Bob third Title',
					description: 'Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',	
				},
			]
		}, {
				include: [
					models.Article
				]
		});

		await models.User.create({
			email: 'mike@mike.com',
			password: '$2b$05$kf61ZYftqz97X3jrhhWkL.43KTt6GK.yMunmFUgi/HYuPjTDkDHje', // 123
			name: 'Mike',
			country: 'Germany',
			articles: [
				{
					title: 'Mike first Title',
					description: 'L dolor sit amet, consectetur adipisicing elit, sed do eiusmodtempor incididunt ut labore et dolore magna aliqua.',	
				},
				{
					title: 'Mike second article',
					description: 'Fuis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit',	
				},	{
					title: 'Mike third Title',
					description: 'Unt occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',	
				},
			]
		}, {
				include: [
					models.Article
				]
		});

		await models.User.create({
			email: 'jack@jack.com',
			password: '$2b$05$kf61ZYftqz97X3jrhhWkL.43KTt6GK.yMunmFUgi/HYuPjTDkDHje', // 123
			name: 'Jack',
			country: 'Us',
			articles: [
				{
					title: 'Jack first Title',
					description: 'Ht amet, consectetur adipisicing elit, sed do eiusmodtempor incididunt ut labore et dolore magna aliqua.',	
				},
				{
					title: 'Jack second article',
					description: 'Dssdf ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit',	
				},	{
					title: 'Jack third Title',
					description: 'Fsdfgsdg Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',	
				},
			]
		}, {
				include: [
					models.Article
				]
		});

		return res.json('Seeder run seccessfylly!');
	}
}

module.exports = new SeederController();
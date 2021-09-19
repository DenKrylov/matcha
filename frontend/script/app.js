new Vue ({
	el: ".app",
	data: {
		partner: 0,
		page: {
			start: false,
			signin: false,
			registration: false,
			main: true,
		},
		chats: [
			{
				id: '1',
				foto: [
					'foto/ksu.jpg',
				],
				name: 'Ксюша',
				age: '21',
				city: 'Moscow',
				lastMessage: 'Окей',
				gender: 'Женщина',
				wave: '6',
				discrpiption: 'Люблю кататься на сноуборде! :)',
				date: '11.09.2021',
				dialog: [
					{
						user: 'Денис',
						text: 'Привет!',
					},
					{
						user: 'Денис',
						text: 'Привет!',
					},
					{
						user: 'Ксюша',
						text: 'Привет!',
					},
					{
						user: 'Ксюша',
						text: 'Привет!',
					},
					{
						user: 'Денис',
						text: 'Пойдем кофе пить :)',
					},
					{
						user: 'Ксюша',
						text: 'Пойдем!',
					},
				]
			},
			{
				id: '3',
				foto: [
					'foto/lena00.jpg',
					'foto/lena01.jpg'
				],
				name: 'Лена',
				age: '21',
				city: 'Moscow',
				lastMessage: 'Окей',
				gender: 'Женщина',
				wave: '4',
				discrpiption: 'Обожаю кошек!',
				date: '12.09.2021',
				dialog: [
					{
						user: 'Лена',
						text: 'Привет!',
					},
					{
						user: 'Денис',
						text: 'Привет!',
					},
					{
						user: 'Денис',
						text: 'Как дела?',
					},
					{
						user: 'Лена',
						text: 'Хорошо!',
					},
					{
						user: 'Лена',
						text: 'Придешь в школу?',
					},
				]
			},
			{
				id: '10',
				time: 0,
				foto: [
					'foto/nasty.jpg',
				],
				name: 'Настя',
				age: '21',
				city: 'Moscow',
				lastMessage: 'Окей',
				gender: 'Женщина',
				wave: '4',
				discrpiption: 'Шарю в DS',
				date: '13.09.2021',
				dialog: [
					{
						user: 'Настя',
						text: 'Привет!',
					},
					{
						user: 'Денис',
						text: 'Привет!',
					},
					{
						user: 'Денис',
						text: 'Когда в школу?',
					},
					{
						user: 'Лена',
						text: 'Затра!',
					},
				]
			}
		],
	},
	methods: {
		closeStart: function() {
			this.page.start = false;
			this.page.signin = false;
			this.page.registration = false;
		},
		closeMain: function() {
			this.page.main = false;
		},
		closeWindow: function() {
			this.page.signin = false;
			this.page.registration = false;
		},
		showStartPage: function() {
			this.closeMain();
			this.page.start = true;
			this.page.signin = false;
			this.page.registration = false;
		},
		showSigninPage: function() {
			this.closeMain();
			this.page.start = true;
			this.page.signin = true;
			this.page.registration = false;
		},
		showRegistrationPage: function() {
			this.closeMain();
			this.page.start = true;
			this.page.signin = true;
			this.page.registration = true;
		},
		showMain: function() {
			this.closeStart();
			this.page.main = true;
		},
		textWindowButton: function() {
			if(this.page.registration) {
				return('СОЗДАТЬ');
			}
			return('ВОЙТИ')
		},
	},
})
new Vue ({
	el: ".app",
	data: {
		partner: '0',
		page: {
			start: false,
			signin: false,
			registration: false,
			main: true,
			сouples: false,
			chats: true,
		},
		user: {
			id: '109',
			foto: [
				'foto/denis00.jpg',
			],
			name: 'Денис',
			age: '34',
			city: 'Moscow',
			lastMessage: 'Окей',
			gender: 'Мужчина',
			wave: '4',
			discrpiption: 'Люблю кататься на сноуборде! :)',
			date: '11.09.2021',
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
		couples: [
			{
				id: '10',
				name: 'Оля',
				foto: 'foto/oly00.jpg'
			},
			{
				id: '11',
				name: 'Алина',
				foto: 'foto/alina00.jpg'
			},
			{
				id: '12',
				name: 'Оля',
				foto: 'foto/oly00.jpg'
			},
			{
				id: '13',
				name: 'Алина',
				foto: 'foto/alina00.jpg'
			},
			{
				id: '14',
				name: 'Оля',
				foto: 'foto/oly00.jpg'
			},
			{
				id: '15',
				name: 'Алина',
				foto: 'foto/alina00.jpg'
			},
			{
				id: '16',
				name: 'Алина',
				foto: 'foto/alina00.jpg'
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
			this.page.сouples = false;
			this.page.chats = false;
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
			this.page.chats = true;
		},
		textWindowButton: function() {
			if(this.page.registration) {
				return('СОЗДАТЬ');
			}
			return('ВОЙТИ')
		},
		navChoice: function(num) {
			if(num) {
				this.page.сouples = true;
				this.page.chats = false;
			} else {
				this.page.сouples = false;
				this.page.chats = true;
			}
		},
		choiceActive: function(num) {
			if(this.page.сouples && num) {
				return('nav_choiceText__active');
			} else if(this.page.chats && !num) {
				return('nav_choiceText__active');
			}
		},
		chatActive: function(chat) {
			this.partner = chat.id;
		},
		chatActiveClass: function(chat) {
			if(this.partner == chat.id) {
				return('nav_chat__active');
			}
		},
	},
})
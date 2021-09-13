new Vue ({
	el: '.app',
	data: {
		mainPage: false,
		loginPage: false,
		registerPage: false,
		chatPage: true,
		user: 'Денис',
		foto: 'foto/avatar.jpeg',
		partner: {
			foto: '',
			name: '',
			age: '',
			city: '',
			gender: '',
			wave: '',
			discrpiption: '',
			date: '',
		},
		activeChat: '',
		fotoChat: '',
		date: '',
		chats: [
			{
				foto: 'foto/ksu.jpg',
				name: 'Ксюша',
				age: '21',
				city: 'Moscow',
				message: 'Окей',
				gender: 'Женщина',
				wave: '6',
				discrpiption: 'Люблю кататься на сноуборде! :)',
				date: '11.09.2021',
				dialog: [
					{
						user: 'Денис',
						text: 'Привет!'
					},
					{
						user: 'Ксюша',
						text: 'Привет!'
					},
					{
						user: 'Денис',
						text: 'Пойдем кофе пить :)'
					},
					{
						user: 'Ксюша',
						text: 'Пойдем!'
					},
				]
			},
			{
				foto: 'foto/lena00.jpg',
				name: 'Лена',
				age: '21',
				city: 'Moscow',
				message: 'Окей',
				gender: 'Женщина',
				wave: '4',
				discrpiption: 'Обожаю кошек!',
				date: '12.09.2021',
				dialog: [
					{
						user: 'Лена',
						text: 'Привет!'
					},
					{
						user: 'Денис',
						text: 'Привет!'
					},
					{
						user: 'Денис',
						text: 'Как дела?'
					},
					{
						user: 'Лена',
						text: 'Хорошо!'
					},
					{
						user: 'Лена',
						text: 'Придешь в школу?'
					},
				]
			},
			{
				foto: 'foto/nasty.jpg',
				name: 'Настя',
				age: '21',
				city: 'Moscow',
				message: 'Окей',
				gender: 'Женщина',
				wave: '4',
				discrpiption: 'Шарю в DS',
				date: '13.09.2021',
				dialog: [
					{
						user: 'Настя',
						text: 'Привет!'
					},
					{
						user: 'Денис',
						text: 'Привет!'
					},
					{
						user: 'Денис',
						text: 'Когда в школу?'
					},
					{
						user: 'Лена',
						text: 'Затра!'
					},
				]
			},
		],
		couples: [
			{
				name:  'Лена',
				foto: 'foto/lena00.jpg'
			}

		]
	},
	methods: {
		showMain: function() {
			this.mainPage = true;
			this.loginPage = false;
			this.chatPage = false;
			this.registerPage = false;
		},
		showLogin: function() {
			this.mainPage = true;
			this.loginPage = true;
			this.chatPage = false;
			this.register = false;
		},
		showRegister: function() {
			this.mainPage = true;
			this.loginPage = false;
			this.registerPage = true;
			this.chatPage = false;
		},
		showChat: function() {
			this.mainPage = false;
			this.loginPage = false;
			this.chatPage = true;
			this.register = false;
		},
		setActiveChat: function(chat) {
			this.partner.foto = chat.foto;
			this.partner.name = chat.name;
			this.partner.age = chat.age;
			this.partner.city = chat.city;
			this.partner.gender = chat.gender;
			this.partner.wave = chat.wave;
			this.partner.discrpiption = chat.discrpiption;
			this.partner.date = chat.date;
		},
		getActiveChat: function(chat) {
			if(this.partner.name == chat) {
				return("nav_chat__active");
			}
		},
		getDialog: function(chats) {
			for(i = 0; i < chats.length; i++) {
				if(chats[i].name == this.partner.name) {
					return(chats[i].dialog);
				}
			}
		},
		sortMassage: function(user) {
			if(user == this.user) {
				return("message message_my");
			} else {
				return("message message_ohter");
			}
			
		}
	}
})
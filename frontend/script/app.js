new Vue ({
	el: '.app',
	data: {
		page: {
			main: false,
			login: false,
			register: false,
			chat: true,
			dialog: false,
			change: true,
		},
		user: {
			name: 'Денис',
			foto: 'foto/avatar.jpeg',
			tmpMessage: '',
		},
		partner: {
			id: '',
			foto: '',
			name: '',
			age: '',
			city: '',
			gender: '',
			wave: '',
			discrpiption: '',
			index: -1,
		},
		// данные через api
		chats: [
			{
				id: '1',
				time: 0,
				foto: 'foto/ksu.jpg',
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
				time: 0,
				foto: 'foto/lena00.jpg',
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
				foto: 'foto/nasty.jpg',
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
				name:  'Лена',
				foto: 'foto/lena00.jpg'
			}
		]
	},
	methods: {
		showMain: function() {
			this.page.main = true;
			this.page.login = false;
			this.page.chat = false;
			this.page.register = false;
		},
		showLogin: function() {
			this.page.main = true;
			this.page.login = true;
			this.page.chat = false;
			this.page.register = false;
		},
		showRegister: function() {
			this.page.main = true;
			this.page.login = false;
			this.page.register = true;
			this.page.chat = false;
		},
		showChat: function() {
			this.page.main = false;
			this.page.login = false;
			this.page.chat = true;
			this.page.register = false;
		},
		getIndexChats: function() {
			for(let i = 0; i < this.chats.length; i++) {
				if(this.chats[i].name == this.partner.name) {
					return (i);
				}
			}
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
			this.partner.index = this.getIndexChats();
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
			if(user == this.user.name) {
				return("message message_my");
			} else {
				return("message message_ohter");
			}
		},
		sendMessage: function() {
			let newMessage = {
				user: this.user.name,
				text: this.user.tmpMessage,
				time: new Date().getTime(),
			};
			if(this.user.tmpMessage != '' && this.partner.name != '') {
				this.chats[this.partner.index].dialog.push(newMessage);
				this.chats[this.partner.index].lastMessage = this.user.tmpMessage;
				this.user.tmpMessage = '';
			}
		},
		deleteUser: function() {
			console.log(this.chats);
			delete this.chats[this.partner.index];
			console.log(this.chats);
		},
		getUsers: function() {
			return("hi")
		}
	}
})
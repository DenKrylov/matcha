new Vue ({
	el: '.app',
	data: {
		rander: {
			nav: 0,
		},
		control: {
			value: 'СКРЫТЬ',
			status: true,
		},
		page: {
			main: false,
			login: false,
			register: false,
			chat: true,
			nav: true,
			dialog: false,
			choice: true,
			change: false,
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
				time: 0,
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
		newCouples: [
			{
				id: '3',
				active: 1,
				activeFoto: 'foto/lena00.jpg',
				foto: [
					'foto/lena00.jpg',
					'foto/lena01.jpg',
					'foto/lena02.jpg',
				],
				name: 'Лена',
				age: '21',
				city: 'Moscow',
				gender: 'Женщина',
				wave: '4',
				discrpiption: 'Обожаю кошек!',
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
			this.page.main = true;
			this.page.login = false;
			this.page.chat = false;
			this.page.nav = false;
			this.page.dialog = false
			this.page.register = false;
		},
		showLogin: function() {
			this.page.main = true;
			this.page.login = true;
			this.page.chat = false;
			this.page.nav = false;
			this.page.dialog = false
			this.page.register = false;
		},
		showRegister: function() {
			this.page.main = true;
			this.page.login = false;
			this.page.chat = false;
			this.page.nav = false;
			this.page.dialog = false
			this.page.register = true;
		},
		showChat: function() {
			this.page.main = false;
			this.page.login = false;
			this.page.chat = true;
			this.page.nav = true;
			this.page.dialog = true;
			this.page.register = false;
		},
		showChoice: function() {
			this.page.main = false;
			this.page.login = false;
			this.page.chat = true;
			this.page.nav = true;
			this.page.dialog = false
			this.page.register = false;
			this.page.choice = true;
			this.partner.name = '';
		},
		getIndexChats: function() {
			for(let i = 0; i < this.chats.length; i++) {
				if(this.chats[i].name == this.partner.name) {
					return (i);
				}
			}
		},
		setActiveChat: function(chat) {
			this.page.choice = false;
			this.page.dialog = true;
			this.partner.foto = chat.foto[0];
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
			this.chats.splice(this.partner.index, 1);
			console.log(this.rander.nav);
		},
		inputColor: function() {
			if(this.user.tmpMessage.length == 0) {
				return('massage_send');
			} else {
				return('massage_send massage_send__active');
			}
		},
		// ---------------------card----------------------------
		choiceFoto: function(num) {
			this.newCouples[0].active = num;
			this.newCouples[0].activeFoto = this.newCouples[0].foto[num - 1];
		},
		getFoto: function() {
			return(this.newCouples[0].foto.length);
		},
		activeBand: function(num) {
			if(this.newCouples[0].active == num) {
				return("card_band card_band__active");
			} else {
				return("card_band");
			}
		},
		controlPanel: function() {
			if(this.control.status) {
				this.control.value = 'ПОКАЗАТЬ';
				this.control.status = false;
			} else {
				this.control.value = 'СКРЫТЬ';
				this.control.status = true;
			}
		},
		navTheme: function() {
			if(this.page.dialog) {
				return('nav_body_windowChat nav_body_windowChat__active');
			}
			return('nav_body_windowChat');
		},
		mouseOver: function() {
			console.log("hi");
		},
		changeFoto: function(num) {
			if(num == 1 && this.newCouples[0].foto[this.newCouples[0].active]) {
				this.newCouples[0].activeFoto = this.newCouples[0].foto[this.newCouples[0].active++];
			} else if(num == 0 && this.newCouples[0].active - 1) {
				this.newCouples[0].activeFoto = this.newCouples[0].foto[this.newCouples[0].active - 2];
				this.newCouples[0].active--;
			}
		},
		test: function() {
			console.log("hi");
		}
	}
})
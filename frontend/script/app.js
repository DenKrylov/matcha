new Vue ({
	el: ".app",
	data: {
		page: {
			pos: 0,
			posChat: 24,
			start: false,
			signin: false,
			registration: false,
			main: true,
			сouples: false,
			chats: true,
			choice: false,
			dialog: true,
		},
		control: {
			value: 'СКРЫТЬ',
			status: true,
		},
		partner: 0,
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
				id: 1,
				active: 0,
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
				tmpMessage: '',
				dialog: [
					{
						user: 'Денис',
						text: 'Start',
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
					{
						user: 'Ксюша',
						text: 'Пойдем!',
					},
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
					{
						user: 'Ксюша',
						text: 'Пойдем!',
					},
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
						text: 'End :)',
					},
				]
			},
			{
				id: 3,
				active: 0,
				foto: [
					'foto/lena00.jpg',
					'foto/lena01.jpg',
					'foto/lena02.jpg',
					'foto/lena03.jpg'
				],
				name: 'Лена',
				age: '21',
				city: 'Moscow',
				lastMessage: 'Окей',
				gender: 'Женщина',
				wave: '4',
				discrpiption: 'Обожаю кошек!',
				date: '12.09.2021',
				tmpMessage: '',
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
				id: 10,
				active: 0,
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
				tmpMessage: '',
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
			},
			{
				id: 19,
				active: 0,
				foto: [
					'foto/oly00.jpg'
				],
				name: 'Оля',
				age: '21',
				city: 'Moscow',
				lastMessage: 'Окей',
				gender: 'Женщина',
				wave: '4',
				discrpiption: 'Шарю в DS',
				date: '13.09.2021',
				tmpMessage: '',
				dialog: []
			},
			{
				id: 20,
				active: 0,
				foto: [
					'foto/alina00.jpg',
				],
				name: 'Алина',
				age: '21',
				city: 'Moscow',
				lastMessage: 'Окей',
				gender: 'Женщина',
				wave: '4',
				discrpiption: 'Шарю в DS',
				date: '13.09.2021',
				tmpMessage: '',
				dialog: []
			},
		],
		cards: [
			{
				idUser: '230',
				active: 0,
				foto: [
					'foto/nataliy00.jpg',
					'foto/nataliy01.jpg',
					'foto/nataliy02.jpg',
					'foto/nataliy03.jpg',
				],
				name: 'Наталья',
				age: '21',
				city: 'Moscow',
				gender: 'Женщина',
				wave: '4',
				discrpiption: 'Обожаю кошек!',
			},
			{
				idUser: '231',
				active: 0,
				foto: [
					'foto/ulia00.jpg',
					'foto/ulia01.jpg',
					'foto/ulia01.jpg',
				],
				name: 'Юлия',
				age: '21',
				city: 'Moscow',
				gender: 'Женщина',
				wave: '4',
				discrpiption: 'Обожаю кошек!',
			},
		]
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
			this.page.choice = false;
			this.page.dialog = false;
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
			this.page.choice = true;
			this.page.dialog = false;
			if(this.page.сouples) {
				this.page.сouples = true;
				this.page.chats = false;
			} else {
				this.page.сouples = true;
				this.page.chats = false;
			} 
		},
		showDialogChats: function() {
			this.closeStart();
			this.page.main = true;
			this.page.chats = true;
			this.page.choice = false;
			this.page.dialog = true;
			this.page.chats = true;
			this.page.сouples = false;
		},
		showDialogCouples: function() {
			this.closeStart();
			this.page.main = true;
			this.page.chats = true;
			this.page.choice = false;
			this.page.dialog = true;
			this.page.chats = false;
			this.page.сouples = true;
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
		sortChat: function(chat) {
			if(chat.dialog.length) {
				return(true)
			}
			return(false)
		},
		chatActive: function(chat) {
			this.showDialogChats();
			this.page.pos = 0;
			for(let i = 0; i < this.chats.length; i++) {
				if(chat.id == this.chats[i].id) {
					this.partner = i;
					break;
				}
			}
		},
		coupleActive: function(chat) {
			this.showDialogCouples();
			for(let i = 0; i < this.chats.length; i++) {
				if(chat.id == this.chats[i].id) {
					this.partner = i;
					break;
				}
			}
		},
		chatActiveClass: function(chat) {
			if(chat.id == this.chats[this.partner].id) {
				return('nav_chat__active');
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
		changeFoto: function(num) {
			if(this.page.choice) {
				if(num == 1 && this.cards[0].foto[this.cards[0].active + 1]) {
					this.cards[0].foto[this.cards[0].active++];
				} else if(num == 0 && this.cards[0].active) {
					this.cards[0].foto[this.cards[0].active];
					this.cards[0].active--;
				}
			} else if(this.page.dialog) {
				if(num == 1 && this.chats[this.partner].foto[this.chats[this.partner].active + 1]) {
					this.chats[this.partner].active++;
				} else if(num == 0 && this.chats[this.partner].foto[this.chats[this.partner].active - 1]) {
					this.chats[this.partner].active--;
				}
			}
		},
		getFoto: function(arr) {
			if(this.page.choice) { 
				return(arr[0].foto.length);
			} else if(this.page.dialog) {
				return(arr[this.partner].foto.length);
			}
		},
		activeBand: function(num, arr) {
			if (this.page.dialog) {
				if(arr[this.partner].active == num - 1) {
					return("card_band card_band__active");
				} else {
					return("card_band");
				}
			} else if(this.page.choice) {
				if(arr[0].active == num - 1) {
					return("card_band card_band__active");
				} else {
					return("card_band");
				}
			} 
		},
		choiceFoto: function(num) {
			if(this.page.choice) {
				this.cards[0].active = num - 1;
			} else if(this.page.dialog) {
				this.chats[this.partner].active = num - 1
			}
		},
		// -----------------------------------------chat------------------------
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
				text: this.chats[this.partner].tmpMessage,
				time: new Date().getTime(),
			};
			if(this.chats[this.partner].tmpMessage != '' && this.partner.name != '') {
				this.chats[this.partner].dialog.push(newMessage);
				this.chats[this.partner].lastMessage = this.chats[this.partner].tmpMessage;
				this.chats[this.partner].tmpMessage = '';
			}
		},
		inputColor: function() {
			if(this.chats[this.partner].tmpMessage.length == 0) {
				return('massage_send');
			} else {
				return('massage_send massage_send__active');
			}
		},
		deleteUser: function() {
			if(this.chats.length == 1) {
				this.chats.splice(this.partner.index, 1);
			} else {
				this.chats.splice(this.partner.index, 1);
			}
			if(this.chats.length == 0) {
				this.showMain();
			}
		},
		// --------------------------------------------- chats-------------------------------
		wheel: function(ev){
			if (ev.deltaY < 0 && this.page.pos < 0) {
				this.page.pos++;
		  	} else if(ev.deltaY > 0 && this.chats[this.partner].dialog.length - this.page.posChat + this.page.pos) {
				this.page.pos--;
		  	}
			console.log(this.page.pos, this.page.posChat, this.chats[this.partner].dialog.length - this.page.posChat + this.page.pos);
		},
		getDialog: function(chats) {
			let tmp = this.chats[this.partner].dialog.length - this.page.posChat;
			if(!this.page.pos) {
				return(this.chats[this.partner].dialog.slice(-this.page.posChat));
			} else if(tmp + this.page.pos >= 0) {
				return(this.chats[this.partner].dialog.slice(tmp + this.page.pos, this.page.pos));
			}
		},
	},
})
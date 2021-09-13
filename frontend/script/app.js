new Vue ({
	el: '.app',
	data: {
		mainPage: false,
		loginPage: false,
		registerPage: false,
		chatPage: true,
		user: 'Денис',
		foto: 'foto/avatar.jpeg',
		activeChat: 'Лена',
		fotoChat: 'foto/lena00.jpg',
		chats: [
			{
				name: 'Ксюша',
				message: 'Окей',
				foto: 'foto/ksu.jpg',
				data: '11.09.2021',
				index: 4,
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
				name: 'Лена',
				message: 'Пока',
				foto: 'foto/lena00.jpg',
				data: '11.09.2021',
				index: 4,
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
				name: 'Настя',
				message: 'Буду',
				foto: 'foto/nasty.jpg',
				data: '11.09.2021',
				index: 4,
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
			this.activeChat = chat.name;
			this.fotoChat = chat.foto;
			this.numberOfMessages = chat.index;
		},
		getActiveChat: function(chat) {
			if(this.activeChat == chat) {
				return("nav_chat__active");
			}
		},
		getDialog: function(chats) {
			for(i = 0; i < chats.length; i++) {
				if(chats[i].name == this.activeChat) {
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
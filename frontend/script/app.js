new Vue ({
	el: '.app',
	data: {
		mainPage: true,
		loginPage: false,
		chatPage: false,
		user: 'Денис',
	},
	methods: {
		showMain: function() {
			this.mainPage = true;
			this.loginPage = false;
			this.chatPage = false;
		},
		showLogin: function() {
			this.mainPage = true;
			this.loginPage = true;
			this.chatPage = false;
		},
		showChat: function() {
			this.mainPage = false;
			this.loginPage = false;
			this.chatPage = true;
		},
	}
})
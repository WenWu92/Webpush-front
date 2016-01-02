require.config({
	baseUrl: './lib/',
	paths: {
		'angular': 'angular/angular',
		'angular-route': 'angular-route/angular-route',
		'angular-ui-router': 'angular-ui-router/release/angular-ui-router',
		'angularAMD': 'angularAMD/angularAMD',
		'ngload': '../js/common/ngload',
		'angular-resource': 'angular-resource/angular-resource',
		'angular-aria': 'angular-aria/angular-aria',
		'angular-animate': 'angular-animate/angular-animate',
		'angular-material': 'angular-material/angular-material',
		'ng-file-upload': 'ng-file-upload/ng-file-upload',
		'angular-loading-bar': 'angular-loading-bar/build/loading-bar',
		'angular-socket-io': 'angular-socket-io/socket',
		'ng-clip': 'ng-clip/dest/ng-clip.min',
		'angular-messages': 'angular-messages/angular-messages.min',

		'jquery': 'jquery/dist/jquery',
		'moment': 'moment/min/moment.min',
		'socket.io': 'socket.io-client/socket.io',
		'ZeroClipboard': 'zeroclipboard/dist/ZeroClipboard.min',

		// custom
		'common': '../js/common/common',
		'constant': '../js/common/constant',
		'utilities': '../js/common/utilities'
	},

	shim: {
		'angular-route': ['angular'],
		'angularAMD': ['angular'],
		'ngload': ['angularAMD'],
		'angular-resource': ['angular'],
		'angular-ui-router': ['angular'],
		'angular-aria': ['angular'],
		'angular-animate': ['angular'],
		'angular-material': ['angular', 'angular-animate', 'angular-aria'],
		'ng-file-upload': ['angular'],
		'angular-loading-bar': ['angular'],
		'angular-socket-io': ['angular', 'socket.io'],
		'angular-messages': ['angular'],
		// 'zeroclipboard': {
		// 	deps: [],
		// 	exports: 'ZeroClipboard'
		// },
		'ZeroClipboard': [],
		'ng-clip': ['angular', 'ZeroClipboard']
	},

	deps: ['../js/app']
});
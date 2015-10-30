(function () {

	var anguNg = ['ngAria', 'ngSanitize', 'ngAnimate', 'ngMessages', 'ngNotify'];
	var anguEx = ['ui.bootstrap', 'mgcrea.ngStrap', 'angularMoment', 'bootstrapLightbox'];
	var routerCtrl = ['sigs.router', 'sigs.ctrl'];
	var cons = ['sigs.constant'];
	var serv = ['sigs.sig.service', 'sigs.service'];
	var dir = ['sigs.dir', 'sigs.cust.dir'];

	var depedencyArr = anguNg.concat(anguEx, routerCtrl, cons, serv, dir);
	/**
	* sigs Module
	*
	* The main module of this application...
	*/
	angular.module('sigs', depedencyArr);

	angular.module('sigs.router', ['ui.router']);
	angular.module('sigs.constant', []);
	angular.module('sigs.sig.service', []);
	angular.module('sigs.service', []);
	angular.module('sigs.ctrl', []);
	angular.module('sigs.dir', ['sigs.service', 'sigs.sig.service']);
	angular.module('sigs.cust.dir', ['sigs.service', 'sigs.sig.service']);

})();
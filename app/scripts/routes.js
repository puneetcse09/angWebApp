'use strict';

define([], function() {
    return {
        defaultRoutePath: '/home',
        
        routes: {
        	'index': {
        		url: '/',
        		state: 'index',
        		templateUrl: '/src/index.html',
                controller: 'IndexCtrl',
                controllerPath: '../src/Index',
                displayName: 'Index'
        	},
        	'login': {
        		url: '/login',
        		state: 'login',
        		templateUrl: '/src/login/login.html',
                controller: 'LoginCtrl',
                controllerPath: '../src/login',
                displayName: 'Login'
        	},
        	'home': {
        		url: '/home',
        		state: 'home',
        		templateUrl: '/src/home/home.html',
                controller: 'HomeCtrl',
                controllerPath: '../src/home',
                displayName: 'Home'
        	},
        	'about': {
        		url: '/about',
        		state: 'about',
        		templateUrl: '/src/about/About.html',
                controller: 'AboutCtrl',
                controllerPath: '../src/about',
                displayName: 'About'
        	},
        	'contact': {
        		url: '/contact',
        		state: 'contact',
        		templateUrl: '/src/contact/Contact.html',
                controller: 'ContactCtrl',
                controllerPath: '../src/contact',
                displayName: 'Contact'
        	}
        }
    };
});

/*	define([], function() {
    return {
        defaultRoutePath: '/',
        routes: {
            '/': {
                templateUrl: '/views/home.html',
                controller: 'HomeCtrl'
            },
            '/contact': {
                templateUrl: '/views/contact/Contact.html',
                controller: 'ContactCtrl'
            },
            '/about': {
                templateUrl: '/views/about/About.html',
                controller: 'AboutCtrl'
            }
             ===== yeoman hook ===== 
             Do not remove these commented lines! Needed for auto-generation 
        }
    };
});*/

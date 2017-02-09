'use strict';

define([], function() {
	
	console.log(" service config loded.... ");
	
    return {
        BASE_API_PATH: '/API',
        
        COMMON_API: {
        	NAME: '/common',
        	PATH: {
        		homeInitial: '/initialize'
        	}
        },
        LOGIN_API: {
        	NAME: '/login',
        	PATH: {
        		loginSubmit: '/loginSubmit'
        	}
        },
        HOME_API: {
        	NAME: '/home',
        	PATH: {
        		homeInitial: '/initialize'
        	}
        },
        ABOUT_API: {
        	NAME: '/about',
        	PATH: {
        		aboutInitial: '/initialize'
        	}
        },
        CONTACT_API: {
        	NAME: '/contact',
        	PATH: {
        		contactInitial: '/initialize'
        	}
        },
        CONTENT : {
        	
        }
    };
});

'use strict';

export function registerApp(app) {	
	if (checkIfAppExists(app)) {
		throw 'app with id already exists: ' + app.id;
	}
	window.ESPA._apps.push(app);
	console.log(window.ESPA._apps);
}

function checkIfAppExists(app) {
	for (var i = 0; i < window.ESPA._apps.length; i++) {
		let appInArr = window.ESPA._apps[i];
		if (app.id === appInArr.id) {
			return true;
		}
	}
}
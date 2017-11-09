'use strict';

let startupApp;
let urlHash = '#/';
let currentApp;
let appBootstrapCache = {};

export function setupRoute() {
	window.ESPA.route.base(urlHash);
	window.ESPA.route.stop()
	window.ESPA._apps.map(function(app) {
		window.ESPA.logger.log('setup container: ' + app.matchRoute);
		$('<div id="' + app.matchRoute + '"></div>').appendTo(document.body);
		window.ESPA.logger.log('setup route: ' + app.matchRoute);		
		var subRoute = window.ESPA.route.create();
		subRoute(app.matchRoute + '..', function(name) {
  		window.ESPA.logger.log('matchRoute: ' + app.matchRoute);
  		if (window.location.hash.startsWith(urlHash + app.matchRoute)) {
  			if (currentApp) {
  				var container = $('#' + currentApp.matchRoute);
    			container.innerHTML = '';    
    		}
    		//if app has been bootstraped then dont need to call bootstrap script
    		if (appBootstrapCache[app.matchRoute]) {
    			let evt = '/espa/apps/' + app.matchRoute + '/bootstrap';
    			window.ESPA.logger.log('trigger custom event: ' + evt);
    			window.ESPA.trigger(evt);
    		} else {
					window.ESPA.loadResource.js(app.bootstrapScript + '?' + app.version)
						.then(function() {
							window.ESPA.logger.log(app.id + ' espa-bootstrap.js loaded');
							currentApp = app;		
							appBootstrapCache[app.matchRoute] = app.matchRoute;
						})
						.catch(function(e) {
							window.ESPA.logger.error(e);
						});
				}
			}
		});
		//only redirect to start up url if there's no deep linking
		if (app.startupApp === true) {
			startupApp = app			
		}
	});

	//redirect to startup app
	if (startupApp) {
		window.ESPA.logger.log('startup app: ' + startupApp.id);
		window.ESPA.route(startupApp.matchRoute, '', true);
	}
	
	//catch all route
	var subRoute = window.ESPA.route.create();
	subRoute(function() {
		let route = location.hash.replace(/\#\//gi, '');
		window.ESPA.logger.log('catch all route: ' + route);
		window.ESPA.route(route, '', true);
	});
	window.ESPA.route.start(true);
}
'use strict';

class ChildApp {
	constructor(id, bootstrapScript, version, startupApp, matchRoute) {
		if (typeof(id) === 'undefined') {
			throw 'fail to init ChildApp as id is not defined';
		}
		if (typeof(bootstrapScript) === 'undefined') {
			throw 'fail to init ChildApp as bootstrapScript is not defined';
		}
		if (typeof(version) === 'undefined') {
			throw 'fail to init ChildApp as version is not defined';
		}
		if (typeof(startupApp) === 'undefined') {
			throw 'fail to init ChildApp as startupApp is not defined';
		}
		if (typeof(matchRoute) === 'undefined') {
			throw 'fail to init ChildApp as matchRoute is not defined';
		}
		this.id = id;
		this.bootstrapScript = bootstrapScript;
		this.version = version;
		this.startupApp = startupApp;
		this.matchRoute = matchRoute;
	}
}

export default ChildApp;
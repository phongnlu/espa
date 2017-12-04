'use strict';

import observable from 'riot-observable';
import route from 'riot-route';
import Bind from './static_packages/bind.min.js';
import jBone from './static_packages/jbone.min.js';
import loadResource from './static_packages/load-resource.js';
import logger from './static_packages/console-logger.js';
import store from './static_packages/store.js';
import { getQueryString } from './static_packages/utils.js';

import { registerApp } from './src/scripts/espa.js';
import { setupRoute } from './src/scripts/espa-route.js';
import ChildApp from './src/scripts/espa-child-app.js';

window.ESPA = window.ESPA || {};
window.ESPA._apps = [];
window.ESPA.ChildApp = ChildApp;
window.ESPA.registerApp = registerApp;
window.ESPA.Bind = Bind;
window.ESPA.observable = observable;
window.ESPA.route = route;
window.ESPA.loadResource = loadResource;
window.ESPA.getQueryString = getQueryString;
window.ESPA.logger = logger;
window.ESPA.store = store;

window.ESPA.observable(window.ESPA);

setupRoute();
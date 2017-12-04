'use strict';

import './static_packages/riot-route-observable.js';
import loadResource from './static_packages/load-resource.js';
import logger from './static_packages/console-logger.js';
import store from './static_packages/store.js';
import tmpl from './static_packages/micro-template.js';
import { getQueryString, navigate, registerRoute  } from './static_packages/utils.js';

window.ESPA = window.ESPA || {};
window.ESPA.loadResource = loadResource;
window.ESPA.getQueryString = getQueryString;
window.ESPA.navigate = navigate;
window.ESPA.registerRoute = registerRoute;
window.ESPA.logger = logger;
window.ESPA.store = store;
window.ESPA.tmpl = tmpl;

window.ESPA.observable(window.ESPA);
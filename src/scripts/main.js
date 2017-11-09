'use strict';

import fetch from 'whatwg-fetch';
import Promise from 'promise-polyfill';
import observable from 'riot-observable';
import route from 'riot-route';
import Bind from '../../static_packages/bind.min.js';
import jBone from '../../static_packages/jbone.min.js';
import loadResource from '../../static_packages/load-resource.js';
import logger from '../../static_packages/console-logger.js';

import { registerApp } from './espa.js';
import { setupRoute } from './espa-route.js';
import ChildApp from './espa-child-app.js';

window.ESPA = window.ESPA || {};
window.ESPA._apps = [];
window.ESPA.ChildApp = ChildApp;
window.ESPA.registerApp = registerApp;
window.ESPA.observable = observable;
window.ESPA.route = route;
window.ESPA.loadResource = loadResource;
window.ESPA.logger = logger;

window.ESPA.observable(window.ESPA);

export function init() {
  setupRoute();
}
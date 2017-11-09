'use strict';

import fetch from 'whatwg-fetch';
import Promise from 'promise-polyfill';
import observable from 'riot-observable';
import route from 'riot-route';
import Bind from 'bind';
import jBone from 'jbone';
import loadResource from 'load-resource';
import logger from 'console-logger';

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
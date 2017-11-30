'use strict';

import observable from 'riot-observable';
import loadResource from './static_packages/load-resource.js';
import logger from './static_packages/console-logger.js';
import tmpl from './static_packages/micro-template.js';
import { getQueryString } from './static_packages/utils.js';

window.ESPA = window.ESPA || {};
window.ESPA.observable = observable;
window.ESPA.loadResource = loadResource;
window.ESPA.getQueryString = getQueryString;
window.ESPA.logger = logger;
window.ESPA.tmpl = tmpl;

window.ESPA.observable(window.ESPA);
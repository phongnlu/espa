'use strict';

import observable from 'riot-observable';
import route from 'riot-route';
import Bind from './static_packages/bind.min.js';
import loadResource from './static_packages/load-resource.js';
import logger from './static_packages/console-logger.js';
import { getQueryString } from './static_packages/utils.js';

window.ESPA = window.ESPA || {};
window.ESPA.Bind = Bind;
window.ESPA.observable = observable;
window.ESPA.route = route;
window.ESPA.loadResource = loadResource;
window.ESPA.getQueryString = getQueryString;
window.ESPA.logger = logger;

window.ESPA.observable(window.ESPA);
# ESPA - Embeddable SPA

ESPA is a custom framework that provides the ability for a parent SPA to host multiple different child SPAs. ESPA itself is framework agnostic since it tries to keep the footprint as small as possible. Think about having a host SPA built with ESPA and it can handle loading a React app, or angular1 or angular2 app, all without any page refresh. ESPA does comes with a host SPA that allows bootstrapping other child SPA apps into it. On top of it, the child SPA can be built by just leveraging what ESPA provides as the framework does include js library for building small scale SPA friendly webapp

## Highlights

- Custom framework that is heavily focused on small footprint, built on top of collection of many micro js lib
- Size:
	- Barebone package: ~16Kb min, 6Kb gzip
	- Lite package: ~28Kb min, 10Kb gzip
	- Lite-pollyfill package: ~36Kb min, 12Kb gzip
	- Main package: ~74Kb min, 27Kb gzip
- Compatible all modern browsers. Unsupported browsers will have polyfill


## What's included

- ES6 module loader (w/ tree shaking)
- Promise async (w/ polyfill)
- Fetch api (w/ polyfill)
- Event emitter
- Routing
- 2 way binding
- Remote assets loading for js/css/image
- Some utility functions
- Logger
- Super lightweight jQuery like utils function
- Google analytics

## Requirements

- npm >= 5
- jspm >= 0.17.0-beta

## Installation

```cmd
> jspm install espa=github:phongnlu/espa
```

## Usage

- Main package: ESPA + Google analytics + pollyfill

```javascript
import 'espa';
```

- Barebone package: just library code

```javascript
import 'espa/barebone';
```

- Lite package: ESPA

```javascript
import 'espa/lite';
```

- Lite package: ESPA + pollyfill

```javascript
import 'espa/lite-pollyfill';
```

## Promise

https://github.com/taylorhakes/promise-polyfill

## Fetch api

https://github.com/github/fetch

## Eventing

Exposed through window.ESPA.observable
https://github.com/riot/observable

## Routing

Exposed through window.ESPA.route
https://github.com/riot/route

## 2 way binding

https://github.com/remy/bind.js/

## Remote resources loading

Exposed through window.ESPA.loadResource. This returns a Promise

```javascript
window.ESPA.loadResource.js(url);
window.ESPA.loadResource.css(url);
window.ESPA.loadResource.img(url);
```

## Logger

Exposed through window.ESPA.logger

```javascript
window.ESPA.logger.trace();
window.ESPA.logger.log();
window.ESPA.logger.debug();
window.ESPA.logger.info();
window.ESPA.logger.warn();
window.ESPA.logger.error();
```


## Lightweight jQuery

https://github.com/kupriyanenko/jbone

## Utils

```javascript
//return the value of a quwey string. If there's no such query string, an empty string is returned
window.ESPA.getQueryString(name);
```

## Credits
- Online community
- All library authors for their awesome projects:
  - [whatwg-fetch](https://github.com/github/fetch)
  - [promise-polyfill](https://github.com/taylorhakes/promise-polyfill)
  - [riot-observable](https://github.com/riot/observable)
  - [riot-route](https://github.com/riot/route)
  - [bind.js](https://github.com/remy/bind.js/)
  - [jbone](https://github.com/kupriyanenko/jbone)

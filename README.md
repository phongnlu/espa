# ESPA - Embeddable SPA

ESPA is a custom framework that provides the ability for a parent SPA to host multiple different child SPAs. ESPA itself is framework agnostic since it tries to keep the footprint as small as possible. Think about having a host SPA built with ESPA and it can handle loading a React app, or angular1 or angular2 app, all without any page refresh. ESPA does comes with a host SPA that allows bootstrapping other child SPA apps into it. On top of it, the child SPA can be built by just leveraging what ESPA provides as the framework does include js library for building small scale SPA friendly webapp

## Highlights

- Custom framework that is heavily focused on small footprint, built on top of collection of many micro js lib
- Size:
	- Without GA: ~36Kb min, 12Kb gzip
	- With GA: ~74Kb min, 27Kb gzip
- Compatible all modern browsers. Unsupported browsers will have polyfill


## What's included

- ES6 module loader (w/ tree shaking)
- Promise async (w/ polyfill)
- Fetch api (w/ polyfill)
- Event emitter
- Routing
- 2 way binding
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

```javascript
import 'espa';
```

## Promise

https://github.com/taylorhakes/promise-polyfill

## Fetch api

https://github.com/github/fetch

## Eventing

https://github.com/riot/observable

## Routing

https://github.com/riot/route

## 2 way binding

https://github.com/remy/bind.js/

## Lightweight jQuery

https://github.com/kupriyanenko/jbone

## Credits
- Online community
- All library authors for their awesome projects:
  - [whatwg-fetch](https://github.com/github/fetch)
  - [promise-polyfill](https://github.com/taylorhakes/promise-polyfill)
  - [riot-observable](https://github.com/riot/observable)
  - [riot-route](https://github.com/riot/route)
  - [bind.js](https://github.com/remy/bind.js/)
  - [jbone](https://github.com/kupriyanenko/jbone)

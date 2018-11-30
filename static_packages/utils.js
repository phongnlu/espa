export function getQueryString(name) {
    name = name.replace(/[\[]/, '\\[').replace(/[\]]/, '\\]');
    var regex = new RegExp('[\\?&]' + name + '=([^&#]*)');
    var results = regex.exec(location.search);
    return results === null ? '' : decodeURIComponent(results[1].replace(/\+/g, ' '));
}

var routeData = {};
var routeCallback = {};

export function navigate(controller, viewData) {    
    ESPA.logger.log('navigate to: ' + controller);  

    routeData[controller] = viewData || {};
    ESPA.route(controller);       
    ESPA.trigger('/controllers', controller, routeData);    
    ESPA.trigger('/controllers/' + controller + '/view-data', routeData);
    
    //for prod code, we need to reject promise to explicitly terminate the chain
    //for unit test, we need to resolve promise so that the test does not fail prematurely
    if (ESPA.store.get('app/context/mode') === 'non-test') {
        return Promise.reject({error: 'navigating to ' + controller});
    } else {
        return Promise.resolve({data: 'navigating to ' + controller});
    }
}

export function registerRoute(controller, callback) {
    ESPA.logger.log('registerRoute: ' + controller);

    if (!callback) {
        throw new Error('callback not defined, registerRoute needs a callback');
    }

    routeCallback[controller] = callback;
    
    ESPA.route(controller, function() {
        routeCallback[controller](routeData[controller]);  
    });
}

export function factoryMixin(factory, injected) {
    if (factory === null || typeof factory === 'undefined') {
        throw new Error('factory not defined');
    }
    if (injected === null || typeof injected === 'undefined') {
        return factory;
    }
    for (var prop in factory) {
        if (factory.hasOwnProperty(prop) && injected.hasOwnProperty(prop)) {
            factory[prop] = injected[prop];
        }
    }
    return factory;
}
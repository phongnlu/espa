export function getQueryString(name) {
    name = name.replace(/[\[]/, '\\[').replace(/[\]]/, '\\]');
    var regex = new RegExp('[\\?&]' + name + '=([^&#]*)');
    var results = regex.exec(location.search);
    return results === null ? '' : decodeURIComponent(results[1].replace(/\+/g, ' '));
};

export function navigate(controller, viewData) {
    ESPA.logger.log('navigate to: ' + controller);
    ESPA.route(controller);
    ESPA.trigger('/controllers/' + controller + '/view-data', viewData || {});        
}

export function registerRoute(controller, callback) {
    ESPA.logger.log('registerRoute: ' + controller);
    (function() {
        let viewData = null;
        ESPA.route(controller, function() {
            viewData && callback(viewData);
        });
        ESPA.one('/controllers/' + controller + '/view-data', function(data) {
            viewData = data;
            callback(viewData);
        });
    })();
}
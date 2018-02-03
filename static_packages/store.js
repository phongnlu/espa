//extremely simple store for now
let store = (function() {
    let _store = [];
    function get(key) {
        let value = _store[key];
        if (typeof value !== 'undefined') {
            ESPA.logger.debug('found ' + key + ' in store with value: ', value);
            return value;
        } else {
            ESPA.logger.debug('cannot find key in store: ' + key);
            return null;
        }
    }

    function set(key, value) {
        if (key) {
            ESPA.logger.debug('save ' + key + ' in store with value: ', value);
            _store[key] = value;
        } else {
            ESPA.logger.debug('cannot set key in store as key is empty');
        }
    }

    return {
  	    get: get,
        set: set
    }
})();

export default store;
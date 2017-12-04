//extremely simple store for now
let store = (function() {
    let _store = [];
    function get(key) {
        if (_store[key]) {
            ESPA.logger.log('found key in store: ' + key);
            return _store[key];
        } else {
            ESPA.logger.error('cannot find key in store: ' + key);
            return null;
        }
    }

    function set(key) {
        if (key) {
            ESPA.logger.log('save key in store: ' + key);
            _store[key] = key;
        } else {
            ESPA.logger.error('cannot set key in store as key is empty');
        }
    }

    return {
  	    get: get,
        set: set
    }
})();

export default store;
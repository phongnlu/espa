//extremely simple store for now
let store = (function() {
    let _store = [];
    function get(key) {
        let value = _store[key];
        if (value) {
            ESPA.logger.log('found ' + key + ' in store with value: ' + value);
            return value;
        } else {
            ESPA.logger.error('cannot find key in store: ' + key);
            return null;
        }
    }

    function set(key, value) {
        if (key) {
            ESPA.logger.log('save ' + key + ' in store with value: ' + value);
            _store[key] = value;
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
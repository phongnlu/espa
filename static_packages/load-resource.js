let resourceCache = {};

let loadResource = (function() {
  function _load(tag) {
    return function(url) {
      // This promise will be used by Promise.all to determine success or failure
      return new Promise(function(resolve, reject) {
        if (resourceCache[url]) {
          resolve(url);
        } else {
          var element = document.createElement(tag);
          var parent = 'body';
          var attr = 'src';

          // Important success and error for the promise
          element.onload = function() {
            resolve(url);
            //dont cache bootstrap script
            if (url.toLowerCase().indexOf('espa-bootstrap.js') == -1) {
              resourceCache[url] = url;
            }
          };
          element.onerror = function() {
            reject(url);
          };

          // Need to set different attributes depending on tag type
          switch(tag) {
            case 'script':
              element.async = true;
              break;
            case 'link':
              element.type = 'text/css';
              element.rel = 'stylesheet';
              attr = 'href';
              parent = 'head';
          }

          // Inject into document to kick off loading
          element[attr] = url;
          document[parent].appendChild(element);
        }
      });
    };
  }

  function _loadCallback(tag) {
    return function(url, callback) {
      if (resourceCache[url]) {
        callback(url);
      } else {
        var element = document.createElement(tag);
        var parent = 'body';
        var attr = 'src';

        // Important success and error for the promise
        element.onload = function() {
          callback(url);
          //dont cache bootstrap script
          if (url.toLowerCase().indexOf('espa-bootstrap.js') == -1) {
            resourceCache[url] = url;
          }
        };
        element.onerror = function() {
          callback(url, 'fail to load resource');
        };

        // Need to set different attributes depending on tag type
        switch(tag) {
          case 'script':
            element.async = true;
            break;
          case 'link':
            element.type = 'text/css';
            element.rel = 'stylesheet';
            attr = 'href';
            parent = 'head';
        }

        // Inject into document to kick off loading
        element[attr] = url;
        document[parent].appendChild(element);
      }
    }
  }

  return {
    css: _load('link'),
    js: _load('script'),
    img: _load('img'),
    cssCallback: _loadCallback('link'),
    jsCallback: _loadCallback('script'),
    imgCallback: _loadCallback('img')
  }
})();

export default loadResource;
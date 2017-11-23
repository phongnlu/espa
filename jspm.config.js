SystemJS.config({
  paths: {
    "github:": "jspm_packages/github/",
    "npm:": "jspm_packages/npm/",
    "bind": "static_packages/bind.min.js",
    "jbone": "static_packages/jbone.min.js",
    "load-resource": "static_packages/load-resource.js",
    "console-logger": "static_packages/console-logger.js",
    "ga": "static_packages/analytics.js",
    "espa/": "src/"
  },
  browserConfig: {
    "baseURL": "/"
  },
  devConfig: {
    "map": {
      "babel-runtime": "npm:babel-runtime@5.8.38",
      "core-js": "npm:core-js@1.2.7",
      "path": "npm:jspm-nodelibs-path@0.2.3",
      "fs": "npm:jspm-nodelibs-fs@0.2.1",
      "plugin-babel": "npm:systemjs-plugin-babel@0.0.25"
    },
    "packages": {
      "npm:babel-runtime@5.8.38": {
        "map": {}
      },
      "npm:core-js@1.2.7": {
        "map": {
          "systemjs-json": "github:systemjs/plugin-json@0.1.2"
        }
      }
    }
  },
  transpiler: "plugin-babel",
  babelOptions: {
    "optional": [
      "runtime",
      "optimisation.modules.system"
    ]
  },
  meta: {
    "bind": {
      "exports": "Bind"
    },
    "jbone": {
      "exports": "jBone"
    },
    "ga": {
      "exports": "ga"
    }
  },
  map: {
    "babel": "npm:babel-core@5.8.38"
  },
  packages: {
    "espa": {
      "main": "src/scripts/main.js"
    },
    "espa-lite": {
      "main": "src/scripts/main-lite.js"
    }
  }
});

SystemJS.config({
  packageConfigPaths: [
    "npm:@*/*.json",
    "npm:*.json"
  ],
  map: {
    "assert": "npm:jspm-nodelibs-assert@0.2.1",
    "process": "npm:jspm-nodelibs-process@0.2.1",
    "promise-polyfill": "npm:promise-polyfill@6.0.2",
    "riot-observable": "npm:riot-observable@3.0.0",
    "riot-route": "npm:riot-route@3.1.2",
    "whatwg-fetch": "npm:whatwg-fetch@2.0.3"
  },
  packages: {
    "npm:riot-route@3.1.2": {
      "map": {
        "riot-observable": "npm:riot-observable@3.0.0"
      }
    }
  }
});
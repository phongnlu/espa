let logger = (function() {
	let logMethods = [
    "trace",
    "log",
    "debug",
    "info",
    "warn",
    "error"
	];

	let logLevels = {
		"TRACE": 0,
    "LOG": 1,
		"DEBUG": 2,
		"INFO": 3,
		"WARN": 4,
    "ERROR": 5
  };

  let level = logLevels.LOG;

  function setLevel(level) {
  	self.level = level;
  }

  return {
  	trace: console.trace,
    log: console.log,
    debug: console.debug,
    info: console.info,
    warn: console.warn,
    error: console.error
  }
})();

export default logger;
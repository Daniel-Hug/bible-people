(function webpackUniversalModuleDefinition(root, factory) {
	if(typeof exports === 'object' && typeof module === 'object')
		module.exports = factory();
	else if(typeof define === 'function' && define.amd)
		define("Navigo", [], factory);
	else if(typeof exports === 'object')
		exports["Navigo"] = factory();
	else
		root["Navigo"] = factory();
})(this, function() {
return /******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId])
/******/ 			return installedModules[moduleId].exports;
/******/
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			exports: {},
/******/ 			id: moduleId,
/******/ 			loaded: false
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.loaded = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(0);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ function(module, exports) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	
	var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; };
	
	function _toConsumableArray(arr) { if (Array.isArray(arr)) { for (var i = 0, arr2 = Array(arr.length); i < arr.length; i++) { arr2[i] = arr[i]; } return arr2; } else { return Array.from(arr); } }
	
	function _toArray(arr) { return Array.isArray(arr) ? arr : Array.from(arr); }
	
	var PARAMETER_REGEXP = /([:*])(\w+)/g;
	var WILDCARD_REGEXP = /\*/g;
	var REPLACE_VARIABLE_REGEXP = '([^\/]+)';
	var REPLACE_WILDCARD = '(?:.*)';
	var FOLLOWED_BY_SLASH_REGEXP = '(?:\/$|$)';
	
	function clean(s) {
	  if (s instanceof RegExp) return s;
	  return s.replace(/\/+$/, '').replace(/^\/+/, '/');
	}
	
	function regExpResultToParams(match, names) {
	  if (names.length === 0) return null;
	  if (!match) return null;
	  return match.slice(1, match.length).reduce(function (params, value, index) {
	    if (params === null) params = {};
	    params[names[index]] = value;
	    return params;
	  }, null);
	}
	
	function replaceDynamicURLParts(route) {
	  var paramNames = [],
	      regexp;
	
	  if (route instanceof RegExp) {
	    regexp = route;
	  } else {
	    regexp = new RegExp(clean(route).replace(PARAMETER_REGEXP, function (full, dots, name) {
	      paramNames.push(name);
	      return REPLACE_VARIABLE_REGEXP;
	    }).replace(WILDCARD_REGEXP, REPLACE_WILDCARD) + FOLLOWED_BY_SLASH_REGEXP);
	  }
	  return { regexp: regexp, paramNames: paramNames };
	}
	
	function getUrlDepth(url) {
	  return url.replace(/\/$/, '').split('/').length;
	}
	
	function compareUrlDepth(urlA, urlB) {
	  return getUrlDepth(urlA) < getUrlDepth(urlB);
	}
	
	function findMatchedRoutes(url) {
	  var routes = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : [];
	
	  return routes.map(function (route) {
	    var _replaceDynamicURLPar = replaceDynamicURLParts(route.route),
	        regexp = _replaceDynamicURLPar.regexp,
	        paramNames = _replaceDynamicURLPar.paramNames;
	
	    var match = url.match(regexp);
	    var params = regExpResultToParams(match, paramNames);
	
	    return match ? { match: match, route: route, params: params } : false;
	  }).filter(function (m) {
	    return m;
	  });
	}
	
	function match(url, routes) {
	  return findMatchedRoutes(url, routes)[0] || false;
	}
	
	function root(url, routes) {
	  var matched = findMatchedRoutes(url, routes.filter(function (route) {
	    var u = clean(route.route);
	
	    return u !== '' && u !== '*';
	  }));
	  var fallbackURL = clean(url);
	
	  if (matched.length > 0) {
	    return matched.map(function (m) {
	      return clean(url.substr(0, m.match.index));
	    }).reduce(function (root, current) {
	      return current.length < root.length ? current : root;
	    }, fallbackURL);
	  }
	  return fallbackURL;
	}
	
	function isPushStateAvailable() {
	  return !!(typeof window !== 'undefined' && window.history && window.history.pushState);
	}
	
	function isHashChangeAPIAvailable() {
	  return !!(typeof window !== 'undefined' && 'onhashchange' in window);
	}
	
	function extractGETParameters(url, useHash) {
	  var _url$split = url.split(/\?(.*)?$/),
	      _url$split2 = _toArray(_url$split),
	      onlyURL = _url$split2[0],
	      query = _url$split2.slice(1);
	
	  if (!useHash) {
	    onlyURL = onlyURL.split('#')[0];
	  }
	  return { onlyURL: onlyURL, GETParameters: query.join('') };
	}
	
	function manageHooks(handler, route) {
	  if (route && route.hooks && _typeof(route.hooks) === 'object') {
	    if (route.hooks.before) {
	      route.hooks.before(function () {
	        var shouldRoute = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : true;
	
	        if (!shouldRoute) return;
	        handler();
	        route.hooks.after && route.hooks.after();
	      });
	    } else if (route.hooks.after) {
	      handler();
	      route.hooks.after && route.hooks.after();
	    }
	    return;
	  }
	  handler();
	};
	
	function Navigo(r, useHash) {
	  this.root = null;
	  this._routes = [];
	  this._useHash = useHash;
	  this._paused = false;
	  this._destroyed = false;
	  this._lastRouteResolved = null;
	  this._notFoundHandler = null;
	  this._defaultHandler = null;
	  this._usePushState = !useHash && isPushStateAvailable();
	
	  if (r) {
	    this.root = r.replace(/\/$/, '/#');
	  } else if (useHash) {
	    this.root = this._cLoc().split('#')[0].replace(/\/$/, '/#');
	  }
	
	  this._listen();
	  this.updatePageLinks();
	}
	
	Navigo.prototype = {
	  helpers: {
	    match: match,
	    root: root,
	    clean: clean
	  },
	  navigate: function navigate(path, absolute) {
	    var to;
	
	    path = path || '';
	    if (this._usePushState) {
	      to = (!absolute ? this._getRoot() + '/' : '') + path.replace(/^\/+/, '/');
	      to = to.replace(/([^:])(\/{2,})/g, '$1/');
	      history[this._paused ? 'replaceState' : 'pushState']({}, '', to);
	      this.resolve();
	    } else if (typeof window !== 'undefined') {
	      window.location.href = window.location.href.replace(/#(.*)$/, '') + '#' + path;
	    }
	    return this;
	  },
	  on: function on() {
	    var _this = this;
	
	    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
	      args[_key] = arguments[_key];
	    }
	
	    if (typeof args[0] === 'function') {
	      this._defaultHandler = { handler: args[0], hooks: args[1] };
	    } else if (args.length >= 2) {
	      if (args[0] === '/') {
	        this._defaultHandler = { handler: args[1], hooks: args[2] };
	      } else {
	        this._add(args[0], args[1], args[2]);
	      }
	    } else if (_typeof(args[0]) === 'object') {
	      var orderedRoutes = Object.keys(args[0]).sort(compareUrlDepth);
	
	      orderedRoutes.forEach(function (route) {
	        _this._add(route, args[0][route]);
	      });
	    }
	    return this;
	  },
	  notFound: function notFound(handler, hooks) {
	    this._notFoundHandler = { handler: handler, hooks: hooks };
	    return this;
	  },
	  resolve: function resolve(current) {
	    var _this2 = this;
	
	    var handler, m;
	    var url = (current || this._cLoc()).replace(this._getRoot(), '');
	
	    if (this._useHash) {
	      url = url.replace(/^\/#/, '/');
	    }
	
	    var _extractGETParameters = extractGETParameters(url, this._useHash),
	        onlyURL = _extractGETParameters.onlyURL,
	        GETParameters = _extractGETParameters.GETParameters;
	
	    if (this._paused || this._lastRouteResolved && onlyURL === this._lastRouteResolved.url && GETParameters === this._lastRouteResolved.query) {
	      return false;
	    }
	
	    m = match(onlyURL, this._routes);
	
	    if (m) {
	      this._lastRouteResolved = { url: onlyURL, query: GETParameters };
	      handler = m.route.handler;
	      manageHooks(function () {
	        m.route.route instanceof RegExp ? handler.apply(undefined, _toConsumableArray(m.match.slice(1, m.match.length))) : handler(m.params, GETParameters);
	      }, m.route);
	      return m;
	    } else if (this._defaultHandler && (onlyURL === '' || onlyURL === '/' || onlyURL === '#')) {
	      manageHooks(function () {
	        _this2._lastRouteResolved = { url: onlyURL, query: GETParameters };
	        _this2._defaultHandler.handler(GETParameters);
	      }, this._defaultHandler);
	      return true;
	    } else if (this._notFoundHandler) {
	      manageHooks(function () {
	        _this2._lastRouteResolved = { url: onlyURL, query: GETParameters };
	        _this2._notFoundHandler.handler(GETParameters);
	      }, this._notFoundHandler);
	    }
	    return false;
	  },
	  destroy: function destroy() {
	    this._routes = [];
	    this._destroyed = true;
	    clearTimeout(this._listenningInterval);
	    typeof window !== 'undefined' ? window.onpopstate = null : null;
	  },
	  updatePageLinks: function updatePageLinks() {
	    var self = this;
	
	    if (typeof document === 'undefined') return;
	
	    this._findLinks().forEach(function (link) {
	      if (!link.hasListenerAttached) {
	        link.addEventListener('click', function (e) {
	          var location = link.getAttribute('href');
	
	          if (!self._destroyed) {
	            e.preventDefault();
	            self.navigate(clean(location));
	          }
	        });
	        link.hasListenerAttached = true;
	      }
	    });
	  },
	  generate: function generate(name) {
	    var data = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};
	
	    var result = this._routes.reduce(function (result, route) {
	      var key;
	
	      if (route.name === name) {
	        result = route.route;
	        for (key in data) {
	          result = result.replace(':' + key, data[key]);
	        }
	      }
	      return result;
	    }, '');
	
	    return this._useHash ? '#' + result : result;
	  },
	  link: function link(path) {
	    return this._getRoot() + path;
	  },
	  pause: function pause() {
	    var status = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : true;
	
	    this._paused = status;
	  },
	  resume: function resume() {
	    this.pause(false);
	  },
	  disableIfAPINotAvailable: function disableIfAPINotAvailable() {
	    if (!isPushStateAvailable()) {
	      this.destroy();
	    }
	  },
	  _add: function _add(route) {
	    var handler = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : null;
	    var hooks = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : null;
	
	    if ((typeof handler === 'undefined' ? 'undefined' : _typeof(handler)) === 'object') {
	      this._routes.push({
	        route: route,
	        handler: handler.uses,
	        name: handler.as,
	        hooks: hooks || handler.hooks
	      });
	    } else {
	      this._routes.push({ route: route, handler: handler, hooks: hooks });
	    }
	    return this._add;
	  },
	  _getRoot: function _getRoot() {
	    if (this.root !== null) return this.root;
	    this.root = root(this._cLoc(), this._routes);
	    return this.root;
	  },
	  _listen: function _listen() {
	    var _this3 = this;
	
	    if (this._usePushState) {
	      window.onpopstate = function () {
	        _this3.resolve();
	      };
	    } else if (isHashChangeAPIAvailable()) {
	      window.onhashchange = function () {
	        _this3.resolve();
	      };
	    } else {
	      (function () {
	        var cached = _this3._cLoc(),
	            current = void 0,
	            _check = void 0;
	
	        _check = function check() {
	          current = _this3._cLoc();
	          if (cached !== current) {
	            cached = current;
	            _this3.resolve();
	          }
	          _this3._listenningInterval = setTimeout(_check, 200);
	        };
	        _check();
	      })();
	    }
	  },
	  _cLoc: function _cLoc() {
	    if (typeof window !== 'undefined') {
	      return clean(window.location.href);
	    }
	    return '';
	  },
	  _findLinks: function _findLinks() {
	    return [].slice.call(document.querySelectorAll('[data-navigo]'));
	  }
	};
	
	exports.default = Navigo;
	module.exports = exports['default'];

/***/ }
/******/ ])
});
;
//# sourceMappingURL=navigo.js.map
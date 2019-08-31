/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
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
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = "./src/index.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _styles_index_scss__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./styles/index.scss */ \"./src/styles/index.scss\");\n/* harmony import */ var _styles_index_scss__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_styles_index_scss__WEBPACK_IMPORTED_MODULE_0__);\n\nvar ACTIVE_CLASS = 'is-active';\nvar CONTENT_CHANGE_NAME = 'fade';\nvar CONTENT_CHANGE_DURATION = 500;\nvar site = document.getElementById('site');\nvar mainContent = document.getElementById('main');\nvar nav = document.getElementById('nav');\nvar navOverlay = document.getElementById('nav-overlay');\nvar navMenu = document.getElementById('nav-menu');\nvar navToggle = document.getElementById('nav-toggle');\nvar links = document.querySelectorAll('.js-link');\nvar pages = getPages();\nvar currentPage = getCurrentPage();\nloadCurrentPage(); // NAV TOGGLE\n\nnavToggle.addEventListener('click', function () {\n  return toggleNav(true);\n});\nsite.addEventListener('click', function () {\n  return toggleNav(false);\n});\nnav.addEventListener('click', function (e) {\n  e.stopPropagation();\n});\n\nfunction toggleNav() {\n  var toggle = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : true;\n\n  if (toggle) {\n    event.preventDefault();\n    navOverlay.classList.toggle(ACTIVE_CLASS);\n    navMenu.classList.toggle(ACTIVE_CLASS);\n  } else {\n    navOverlay.classList.remove(ACTIVE_CLASS);\n    navMenu.classList.remove(ACTIVE_CLASS);\n  }\n} // PAGES LINKS\n\n\nfunction getPages() {\n  var pages = [];\n  links.forEach(function (link) {\n    var href = link.href;\n    var page = href.split('#')[1];\n    var pageInfo = new Object();\n    pageInfo = {\n      hash: \"#\".concat(page),\n      page: page,\n      url: \"/pages/\".concat(page, \".html\")\n    };\n    pages[page] = pageInfo;\n  });\n  return pages;\n} // LINKS EVENTS\n\n\nlinks.forEach(function (link) {\n  link.addEventListener('click', function (e) {\n    e.preventDefault();\n    var hash = link.href;\n    var page = hash.split('#')[1];\n    currentPage = pages[page]; // TRIGGER CLICK ON SITE TO HIDE NAV ON MOBILE\n\n    site.dispatchEvent(new Event('click'));\n\n    if (location.hash.split('#')[1] !== page) {\n      loadCurrentPage();\n    }\n  });\n}); // CURRENT PAGE\n\nfunction getCurrentPage() {\n  var defaultPage = {\n    hash: '#o-mnie',\n    page: 'o-mnie',\n    url: '/pages/o-mnie.html'\n  };\n\n  if (location.hash) {\n    var hash = location.hash;\n    var page = hash.split('#')[1];\n    return pages[page];\n  } else {\n    return defaultPage;\n  }\n} // LOAD PAGE\n\n\nfunction loadCurrentPage() {\n  location.hash = currentPage.hash;\n\n  if (currentPage.html) {\n    modifyHTML(currentPage.html);\n  } else {\n    loadHTML().then(function (response) {\n      currentPage.html = response;\n      modifyHTML(currentPage.html);\n    })[\"catch\"](function (error) {\n      console.error(error);\n    });\n  }\n} // LOAD PAGE HTML\n\n\nfunction loadHTML() {\n  return new Promise(function (resolve, reject) {\n    fetch(currentPage.url).then(function (response) {\n      return response.text();\n    }).then(function (response) {\n      var html = response;\n      resolve(html);\n    })[\"catch\"](function (error) {\n      reject(error);\n    });\n  });\n} // REPLACE PAGE CONTENT\n\n\nfunction modifyHTML(html) {\n  // GET FIRST CHILD\n  var child = mainContent.children[0]; // CREATE SECOND CHILD\n\n  var content = document.createElement('div');\n  content.id = 'content';\n  content.classList = 'c';\n  content.setAttribute('data-page', currentPage.page);\n  child.classList.add(\"\".concat(CONTENT_CHANGE_NAME, \"-out-start\"));\n  content.classList.add(\"\".concat(CONTENT_CHANGE_NAME, \"-in-start\"));\n  content.innerHTML = html; // APPEND SECOND CHILD\n\n  mainContent.append(content); // ANIMATE\n\n  contentTransition(child, content);\n}\n\nfunction contentTransition(from, to) {\n  setTimeout(function () {\n    from.classList.remove(\"\".concat(CONTENT_CHANGE_NAME, \"-out-start\"));\n    from.classList.add(\"\".concat(CONTENT_CHANGE_NAME, \"-out\"));\n    to.classList.remove(\"\".concat(CONTENT_CHANGE_NAME, \"-in-start\"));\n    to.classList.add(\"\".concat(CONTENT_CHANGE_NAME, \"-in\"));\n  }, 0);\n  setTimeout(function () {\n    from.classList.remove(\"\".concat(CONTENT_CHANGE_NAME, \"-out\"));\n    to.classList.remove(\"\".concat(CONTENT_CHANGE_NAME, \"-in\"));\n    mainContent.removeChild(from);\n  }, CONTENT_CHANGE_DURATION);\n}\n\n//# sourceURL=webpack:///./src/index.js?");

/***/ }),

/***/ "./src/styles/index.scss":
/*!*******************************!*\
  !*** ./src/styles/index.scss ***!
  \*******************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("// extracted by mini-css-extract-plugin\n\n//# sourceURL=webpack:///./src/styles/index.scss?");

/***/ })

/******/ });
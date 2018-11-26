webpackHotUpdate("static/development/pages/index.js",{

/***/ "./pages/index.js":
/*!************************!*\
  !*** ./pages/index.js ***!
  \************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(module) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return Index; });
/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/regenerator */ "./node_modules/@babel/runtime/regenerator/index.js");
/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next/link */ "./node_modules/next/link.js");
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! next/router */ "./node_modules/next/router.js");
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var isomorphic_unfetch__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! isomorphic-unfetch */ "./node_modules/isomorphic-unfetch/browser.js");
/* harmony import */ var isomorphic_unfetch__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(isomorphic_unfetch__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _components_Splash_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../components/Splash.js */ "./components/Splash.js");


function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }

function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }







var Index =
/*#__PURE__*/
function (_React$Component) {
  _inherits(Index, _React$Component);

  function Index(props) {
    var _this;

    _classCallCheck(this, Index);

    _this = _possibleConstructorReturn(this, _getPrototypeOf(Index).call(this, props));
    _this.state = {
      search: "",
      limit: 10,
      streams: []
    };
    _this.handleSearchChange = _this.handleSearchChange.bind(_assertThisInitialized(_assertThisInitialized(_this)));
    _this.handleLimitChange = _this.handleLimitChange.bind(_assertThisInitialized(_assertThisInitialized(_this)));
    _this.handleSubmit = _this.handleSubmit.bind(_assertThisInitialized(_assertThisInitialized(_this)));
    _this.handleRouteChange = _this.handleRouteChange.bind(_assertThisInitialized(_assertThisInitialized(_this)));
    _this.fetchStreams = _this.fetchStreams.bind(_assertThisInitialized(_assertThisInitialized(_this)));
    next_router__WEBPACK_IMPORTED_MODULE_3___default.a.events.on('routeChangeStart', _this.handleRouteChange);
    return _this;
  }

  _createClass(Index, [{
    key: "fetchStreams",
    value: function fetchStreams(search) {
      var _this2 = this;

      var limit = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : this.state.limit;
      isomorphic_unfetch__WEBPACK_IMPORTED_MODULE_4___default()("https://api.twitch.tv/kraken/search/streams?query=".concat(search, "&limit=").concat(limit), {
        headers: {
          "Client-ID": "o3ldtpya38q9y4y5y6rg98gqycz3pt"
        }
      }).then(function (res) {
        return res.json();
      }).then(function (json) {
        return _this2.setState({
          streams: json.streams
        });
      });
    }
  }, {
    key: "handleRouteChange",
    value: function handleRouteChange(url) {
      if (url.indexOf("search") !== -1) {
        var search = url.substring(url.lastIndexOf("=") + 1);
        this.fetchStreams(search);
      }
    }
  }, {
    key: "componentDidMount",
    value: function componentDidMount() {
      var limit = localStorage.getItem('_limit');
      if (limit) this.setState({
        limit: limit
      });
      var search = this.props.search || this.state.search || "''";
      this.fetchStreams(search, limit || this.state.limit);
    }
  }, {
    key: "componentDidUpdate",
    value: function componentDidUpdate() {
      localStorage.setItem('_limit', this.state.limit);
    }
  }, {
    key: "handleSearchChange",
    value: function handleSearchChange(e) {
      this.setState({
        search: e.target.value
      });
    }
  }, {
    key: "handleLimitChange",
    value: function handleLimitChange(e) {
      this.setState({
        limit: e.target.value
      });
    }
  }, {
    key: "handleSubmit",
    value: function handleSubmit(e) {
      e.preventDefault();
      var search = this.state.search || "''";
      this.fetchStreams(search);
      var href = "/?search=".concat(search);
      next_router__WEBPACK_IMPORTED_MODULE_3___default.a.push(href, href, {
        shallow: true
      });
    }
  }, {
    key: "render",
    value: function render() {
      var streams = this.state.streams;
      return react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_components_Splash_js__WEBPACK_IMPORTED_MODULE_5__["default"], null, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("h2", null, "A minimal twitch client"), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("form", {
        onSubmit: this.handleSubmit
      }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("label", null, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("input", {
        type: "text",
        placeholder: "Search for streams",
        value: this.state.search,
        onChange: this.handleSearchChange
      })), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("input", {
        type: "number",
        min: "1",
        max: "100",
        value: this.state.limit,
        onChange: this.handleLimitChange
      }), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("input", {
        type: "submit",
        value: "Submit"
      })), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("ul", null, streams.map(function (stream) {
        return react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("li", {
          key: stream._id
        }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("p", null, stream.channel.status), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(next_link__WEBPACK_IMPORTED_MODULE_2___default.a, {
          as: "/channel/".concat(stream.channel.name),
          href: "/channel?name=".concat(stream.channel.name)
        }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("img", {
          src: stream.preview.medium,
          alt: "stream"
        })));
      })));
    }
  }], [{
    key: "getInitialProps",
    value: function () {
      var _getInitialProps = _asyncToGenerator(
      /*#__PURE__*/
      _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee(context) {
        var search;
        return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee$(_context) {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:
                search = context.query.search || "''";
                return _context.abrupt("return", {
                  search: search
                });

              case 2:
              case "end":
                return _context.stop();
            }
          }
        }, _callee, this);
      }));

      return function getInitialProps(_x) {
        return _getInitialProps.apply(this, arguments);
      };
    }()
  }]);

  return Index;
}(react__WEBPACK_IMPORTED_MODULE_1___default.a.Component);


    (function (Component, route) {
      if(!Component) return
      if (false) {}
      module.hot.accept()
      Component.__route = route

      if (module.hot.status() === 'idle') return

      var components = next.router.components
      for (var r in components) {
        if (!components.hasOwnProperty(r)) continue

        if (components[r].Component.__route === route) {
          next.router.update(r, Component)
        }
      }
    })(typeof __webpack_exports__ !== 'undefined' ? __webpack_exports__.default : (module.exports.default || module.exports), "/")
  
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../node_modules/webpack/buildin/harmony-module.js */ "./node_modules/webpack/buildin/harmony-module.js")(module)))

/***/ })

})
//# sourceMappingURL=index.js.0acde5c64a8ed7bc8409.hot-update.js.map
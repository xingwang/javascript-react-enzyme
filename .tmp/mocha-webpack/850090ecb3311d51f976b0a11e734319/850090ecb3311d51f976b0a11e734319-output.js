/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};

/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {

/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId])
/******/ 			return installedModules[moduleId].exports;

/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			exports: {},
/******/ 			id: moduleId,
/******/ 			loaded: false
/******/ 		};

/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);

/******/ 		// Flag the module as loaded
/******/ 		module.loaded = true;

/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}


/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;

/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;

/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";

/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(0);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";

	var testsContext = __webpack_require__(1);

	var runnable = testsContext.keys();

	runnable.forEach(testsContext);

/***/ },
/* 1 */
/***/ function(module, exports, __webpack_require__) {

	var map = {
		"./components/CommentList.spec.js": 2,
		"./containers/Root.spec.js": 7,
		"./helloWorld.spec.js": 9
	};
	function webpackContext(req) {
		return __webpack_require__(webpackContextResolve(req));
	};
	function webpackContextResolve(req) {
		return map[req] || (function() { throw new Error("Cannot find module '" + req + "'.") }());
	};
	webpackContext.keys = function webpackContextKeys() {
		return Object.keys(map);
	};
	webpackContext.resolve = webpackContextResolve;
	module.exports = webpackContext;
	webpackContext.id = 1;


/***/ },
/* 2 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	var _react = __webpack_require__(3);

	var _react2 = _interopRequireDefault(_react);

	var _enzyme = __webpack_require__(4);

	var _sinon = __webpack_require__(5);

	var _sinon2 = _interopRequireDefault(_sinon);

	var _CommentList = __webpack_require__(6);

	var _CommentList2 = _interopRequireDefault(_CommentList);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	describe('(Component) CommentList', function () {

	  describe('With empty props for CommentList', function () {
	    var props = { onMount: 'someString' };
	    // const wrapper = mount(<CommentList  {...props} />);

	    it('Should throw an error', function () {
	      expect((0, _enzyme.shallow)(_react2.default.createElement(_CommentList2.default, props)).unrendered).to.not.be.null;
	      // console.log('---', wrapper.props());
	    });
	  });

	  describe('Lifecycle methods', function () {
	    it('calls componentDidMount', function () {

	      // create a spy for the componentDidMount function
	      _sinon2.default.spy(_CommentList2.default.prototype, 'componentDidMount');

	      var props = {
	        onMount: function onMount() {},
	        isActive: false
	      };

	      // using destructuring to pass props down
	      // easily and then mounting the component
	      (0, _enzyme.mount)(_react2.default.createElement(_CommentList2.default, props));

	      // CommentList's componentDidMount should have been
	      // called once. In testing it's called twice, hence
	      // 'called'. When run in dev mode it's called only once.
	      expect(_CommentList2.default.prototype.componentDidMount.called).to.be.true;
	    });

	    it('calls onMount prop once it mounts', function () {
	      // create a spy for the onMount function
	      var props = { onMount: _sinon2.default.spy() };

	      // mount our component
	      (0, _enzyme.mount)(_react2.default.createElement(_CommentList2.default, props));

	      // expect that onMount was called
	      expect(props.onMount.calledOnce).to.be.true;
	    });
	  });

	  it('should render as a <ul>', function () {
	    var props = { onMount: function onMount() {} };
	    var wrapper = (0, _enzyme.shallow)(_react2.default.createElement(_CommentList2.default, props));
	    expect(wrapper.type()).to.eql('ul');
	    expect(wrapper.find('li').props().children).to.equal('Comment One');
	    expect(wrapper.find('li').text()).to.equal('Comment One');
	  });

	  describe('when active...', function () {
	    var wrapper = (0, _enzyme.shallow)(
	    // just passing isActive is an alias for true
	    _react2.default.createElement(_CommentList2.default, { onMount: function onMount() {}, isActive: true }));
	    it('should render with className active-list', function () {
	      expect(wrapper.prop('className')).to.eql('active-list');
	    });
	  });

	  describe('when inactive...', function () {
	    var wrapper = (0, _enzyme.shallow)(
	    // just passing isActive is an alias for true
	    _react2.default.createElement(_CommentList2.default, { onMount: function onMount() {}, isActive: false }));
	    it('should render with className inactive-list', function () {
	      expect(wrapper.prop('className')).to.eql('inactive-list');
	    });
	  });
	});

	// Once we set up Karma to run our tests through webpack
	// we will no longer need to have these long relative paths

/***/ },
/* 3 */
/***/ function(module, exports) {

	module.exports = require("react");

/***/ },
/* 4 */
/***/ function(module, exports) {

	module.exports = require("enzyme");

/***/ },
/* 5 */
/***/ function(module, exports) {

	module.exports = require("sinon");

/***/ },
/* 6 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});

	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

	var _react = __webpack_require__(3);

	var _react2 = _interopRequireDefault(_react);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

	var propTypes = {
	  onMount: _react.PropTypes.func.isRequired,
	  isActive: _react.PropTypes.bool
	};

	var CommentList = function (_Component) {
	  _inherits(CommentList, _Component);

	  function CommentList() {
	    _classCallCheck(this, CommentList);

	    return _possibleConstructorReturn(this, Object.getPrototypeOf(CommentList).apply(this, arguments));
	  }

	  _createClass(CommentList, [{
	    key: 'componentDidMount',
	    value: function componentDidMount() {
	      this.props.onMount();
	    }
	  }, {
	    key: 'render',
	    value: function render() {
	      var isActive = this.props.isActive;

	      var className = isActive ? 'active-list' : 'inactive-list';

	      return _react2.default.createElement(
	        'ul',
	        { className: className },
	        _react2.default.createElement(
	          'li',
	          null,
	          'Comment One'
	        )
	      );
	    }
	  }]);

	  return CommentList;
	}(_react.Component);

	CommentList.propTypes = propTypes;
	exports.default = CommentList;

/***/ },
/* 7 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol ? "symbol" : typeof obj; };

	var _react = __webpack_require__(3);

	var _react2 = _interopRequireDefault(_react);

	var _enzyme = __webpack_require__(4);

	var _Root = __webpack_require__(8);

	var _Root2 = _interopRequireDefault(_Root);

	var _CommentList = __webpack_require__(6);

	var _CommentList2 = _interopRequireDefault(_CommentList);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	describe('(Container) Root', function () {
	  var wrapper = (0, _enzyme.shallow)(_react2.default.createElement(_Root2.default, null));
	  // console.log(wrapper.find('h1').type());
	  // console.log(wrapper.find('h1').props());
	  // console.log(wrapper.find(CommentList).type());
	  // console.log(wrapper.find(CommentList).props());

	  it('renders as a <div>', function () {
	    expect(wrapper.type()).to.equal('div');
	  });

	  it('has style with height 100%, background #99f', function () {
	    var expectedStyles = {
	      height: '100%',
	      background: '#99f'
	    };
	    expect(wrapper.prop('style')).to.eql(expectedStyles);
	  });

	  it('has one h1 tag', function () {
	    expect(wrapper.find('h1')).to.have.length(1);
	  });

	  it('has className of welcome-header for the h1', function () {
	    expect(wrapper.find('h1').props().className).to.equal('welcome-header');
	  });

	  it('has the correct text for the h1', function () {
	    expect(wrapper.find('h1').props().children).to.equal('Welcome to testing React!');
	  });

	  it('has one h4 tag', function () {
	    expect(wrapper.find('h4')).to.have.length(1);
	  });

	  it('has the correct text for the h1', function () {
	    expect(wrapper.find('h4').props().children).to.equal('Comments:');
	  });

	  it('renders a CommentList component', function () {
	    expect(wrapper.find(_CommentList2.default)).to.have.length(1);
	  });

	  it('has the correct props passed into CommentList component', function () {
	    expect(_typeof(wrapper.find(_CommentList2.default).props().onMount)).to.equal('function');
	    expect(wrapper.find(_CommentList2.default).props().isActive).to.equal(false);
	  });
	});

/***/ },
/* 8 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});

	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

	var _react = __webpack_require__(3);

	var _react2 = _interopRequireDefault(_react);

	var _CommentList = __webpack_require__(6);

	var _CommentList2 = _interopRequireDefault(_CommentList);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

	var styles = {
	  height: '100%',
	  background: '#99f'
	};

	var props = {
	  onMount: function onMount() {},
	  isActive: false
	};

	var Root = function (_Component) {
	  _inherits(Root, _Component);

	  function Root() {
	    _classCallCheck(this, Root);

	    return _possibleConstructorReturn(this, Object.getPrototypeOf(Root).apply(this, arguments));
	  }

	  _createClass(Root, [{
	    key: 'render',
	    value: function render() {
	      return _react2.default.createElement(
	        'div',
	        { style: styles },
	        _react2.default.createElement(
	          'h1',
	          { className: 'welcome-header' },
	          'Welcome to testing React!'
	        ),
	        _react2.default.createElement(
	          'h4',
	          null,
	          'Comments:'
	        ),
	        _react2.default.createElement(_CommentList2.default, props)
	      );
	    }
	  }]);

	  return Root;
	}(_react.Component);

	exports.default = Root;

/***/ },
/* 9 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	var _chai = __webpack_require__(10);

	describe('hello world', function () {
	  it('works!', function () {
	    (0, _chai.expect)(true).to.be.true;
	  });
	});

/***/ },
/* 10 */
/***/ function(module, exports) {

	module.exports = require("chai");

/***/ }
/******/ ]);
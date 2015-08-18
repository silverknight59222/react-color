/* jshint node: true, esnext: true */
"use strict";

var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ('value' in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();

var _get = function get(_x, _x2, _x3) { var _again = true; _function: while (_again) { var object = _x, property = _x2, receiver = _x3; desc = parent = getter = undefined; _again = false; if (object === null) object = Function.prototype; var desc = Object.getOwnPropertyDescriptor(object, property); if (desc === undefined) { var parent = Object.getPrototypeOf(object); if (parent === null) { return undefined; } else { _x = parent; _x2 = property; _x3 = receiver; _again = true; continue _function; } } else if ('value' in desc) { return desc.value; } else { var getter = desc.get; if (getter === undefined) { return undefined; } return getter.call(receiver); } } };

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError('Cannot call a class as a function'); } }

function _inherits(subClass, superClass) { if (typeof superClass !== 'function' && superClass !== null) { throw new TypeError('Super expression must either be null or a function, not ' + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var React = require('react');
var ReactCSS = require('reactcss');

module.exports = (function (_ReactCSS$Component) {
  _inherits(MarkdownTitle, _ReactCSS$Component);

  function MarkdownTitle() {
    _classCallCheck(this, MarkdownTitle);

    _get(Object.getPrototypeOf(MarkdownTitle.prototype), 'constructor', this).call(this);
    this.state = {
      hover: false
    };
    this.handleHover = this.handleHover.bind(this);
  }

  _createClass(MarkdownTitle, [{
    key: 'classes',
    value: function classes() {
      return {
        'default': {
          link: {
            opacity: '0',
            textDecoration: 'none',
            fill: this.props.primaryColor,
            transition: 'opacity 200ms linear'
          }
        },
        'hovered': {
          link: {
            opacity: '1'
          }
        }
      };
    }
  }, {
    key: 'styles',
    value: function styles() {
      return this.css({
        'hovered': this.state.hover
      });
    }
  }, {
    key: 'handleHover',
    value: function handleHover(e) {
      if (e.type === 'mouseenter') {
        this.setState({ hover: true });
      } else if (e.type === 'mouseleave') {
        this.setState({ hover: false });
      }
    }
  }, {
    key: 'render',
    value: function render() {
      var linkSvg = {
        __html: '\n              <svg style="width:24px;height:24px" viewBox="0 0 24 24">\n                  <path d="M10.59,13.41C11,13.8 11,14.44 10.59,14.83C10.2,15.22 9.56,15.22 9.17,14.83C7.22,12.88 7.22,9.71 9.17,7.76V7.76L12.71,4.22C14.66,2.27 17.83,2.27 19.78,4.22C21.73,6.17 21.73,9.34 19.78,11.29L18.29,12.78C18.3,11.96 18.17,11.14 17.89,10.36L18.36,9.88C19.54,8.71 19.54,6.81 18.36,5.64C17.19,4.46 15.29,4.46 14.12,5.64L10.59,9.17C9.41,10.34 9.41,12.24 10.59,13.41M13.41,9.17C13.8,8.78 14.44,8.78 14.83,9.17C16.78,11.12 16.78,14.29 14.83,16.24V16.24L11.29,19.78C9.34,21.73 6.17,21.73 4.22,19.78C2.27,17.83 2.27,14.66 4.22,12.71L5.71,11.22C5.7,12.04 5.83,12.86 6.11,13.65L5.64,14.12C4.46,15.29 4.46,17.19 5.64,18.36C6.81,19.54 8.71,19.54 9.88,18.36L13.41,14.83C14.59,13.66 14.59,11.76 13.41,10.59C13,10.2 13,9.56 13.41,9.17Z" />\n              </svg>\n              '
      };

      var title;
      if (this.props.isHeadline) {
        title = React.createElement(
          'h1',
          null,
          this.props.title,
          ' ',
          React.createElement('a', { style: this.styles().link, href: '#' + this.props.link, dangerouslySetInnerHTML: linkSvg })
        );
      } else {
        title = React.createElement(
          'h2',
          null,
          this.props.title,
          ' ',
          React.createElement('a', { style: this.styles().link, href: '#' + this.props.link, dangerouslySetInnerHTML: linkSvg })
        );
      }

      return React.createElement(
        'div',
        { onMouseEnter: this.handleHover, onMouseLeave: this.handleHover },
        title
      );
    }
  }]);

  return MarkdownTitle;
})(ReactCSS.Component);
'use strict';

var React = require('react');
var ReactCSS = require('reactcss');

class Grid extends ReactCSS.Component {

  classes() {
    return {
      'default': {
        grid: {
          position: 'relative',
        },
        left: {
          position: 'absolute',
          width: '130px',
        },
        main: {
          paddingLeft: '150px',
        },
      },
      'preset-one': {
        left: {
          width: 'auto',
          position: 'relative',
          paddingRight: '260px',
        },
        main: {
          position: 'absolute',
          right: '0',
          top: '0',
          width: '225px',
        },
      },
      'preset-two': {
        left: {
          width: '220px',
          position: 'absolute',
        },
        main: {
          paddingLeft: '267px',
        },
      },
    };
  }

  render() {
    return (
      <div is="grid">
        <div is="left">{ this.props.children[0] }</div>
        <div is="main">{ this.props.children[1] }</div>
      </div>
    );
  }
}

module.exports = Grid;

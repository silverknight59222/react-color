'use strict' /* @flow */

import React from 'react'
import reactCSS from 'reactcss'
import shallowCompare from 'react-addons-shallow-compare'

import Checkboard from './Checkboard'

export class Alpha extends React.Component {
  shouldComponentUpdate = shallowCompare.bind(this, this, arguments[0], arguments[1])

  componentWillUnmount() {
    this.unbindEventListeners()
  }

  handleChange = (e: any, skip: boolean) => {
    !skip && e.preventDefault()
    var container = this.refs.container
    var containerWidth = container.clientWidth
    var x = typeof e.pageX === 'number' ? e.pageX : e.touches[0].pageX
    var inIFrame = window.self !== window.top || window.document !== container.ownerDocument
    var left = x - (container.getBoundingClientRect().left + (inIFrame ? 0 : window.pageXOffset))

    var a
    if (left < 0) {
      a = 0
    } else if (left > containerWidth) {
      a = 1
    } else {
      a = Math.round(left * 100 / containerWidth) / 100
    }

    if (this.props.a !== a) {
      this.props.onChange({
        h: this.props.hsl.h,
        s: this.props.hsl.s,
        l: this.props.hsl.l,
        a: a,
        source: 'rgb',
      })
    }
  }

  handleMouseDown = (e: any) => {
    this.handleChange(e, true)
    window.addEventListener('mousemove', this.handleChange)
    window.addEventListener('mouseup', this.handleMouseUp)
  }

  handleMouseUp = () => {
    this.unbindEventListeners()
  }

  unbindEventListeners = () => {
    window.removeEventListener('mousemove', this.handleChange)
    window.removeEventListener('mouseup', this.handleMouseUp)
  }

  render(): any {

    const styles = reactCSS({
      'default': {
        alpha: {
          absolute: '0px 0px 0px 0px',
          borderRadius: this.props.radius,
        },
        checkboard: {
          absolute: '0px 0px 0px 0px',
          overflow: 'hidden',
        },
        gradient: {
          absolute: '0px 0px 0px 0px',
          background: 'linear-gradient(to right, rgba(' + this.props.rgb.r + ', ' + this.props.rgb.g + ', ' + this.props.rgb.b + ', 0) 0%, rgba(' + this.props.rgb.r + ', ' + this.props.rgb.g + ', ' + this.props.rgb.b + ', 1) 100%)',
          boxShadow: this.props.shadow,
          borderRadius: this.props.radius,
        },
        container: {
          position: 'relative',
          height: '100%',
          margin: '0 3px',
        },
        pointer: {
          position: 'absolute',
          left: this.props.rgb.a * 100 + '%',
        },
        slider: {
          width: '4px',
          borderRadius: '1px',
          height: '8px',
          boxShadow: '0 0 2px rgba(0, 0, 0, .6)',
          background: '#fff',
          marginTop: '1px',
          transform: 'translateX(-2px)',
        },
      },
    });

    var pointer = <div style={ styles.slider } />

    if (this.props.pointer) {
      pointer = <this.props.pointer {...this.props} />
    }

    return (
      <div style={ styles.alpha }>
        <div style={ styles.checkboard }>
          <Checkboard />
        </div>
        <div style={ styles.gradient } />
        <div style={ styles.container } ref="container" onMouseDown={ this.handleMouseDown }
            onTouchMove={ this.handleChange }
            onTouchStart={ this.handleChange }>
          <div style={ styles.pointer } ref="pointer">
            { pointer }
          </div>
        </div>
      </div>
    )
  }
}

export default Alpha

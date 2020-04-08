import React, { Component } from 'react';
import memoizeOne from 'memoize-one';
import { CacheProvider } from '@emotion/core';
import 'react-dom';
import 'prop-types';
import './utils-c4284155.esm.js';
export { y as components } from './index-d936c35d.esm.js';
import { S as Select } from './Select-f541c7bc.esm.js';
export { c as createFilter, a as defaultTheme, m as mergeStyles } from './Select-f541c7bc.esm.js';
import '@emotion/css';
import 'react-input-autosize';
import { m as manageState } from './stateManager-149692c5.esm.js';
import createCache from '@emotion/cache';

function _inheritsLoose(subClass, superClass) { subClass.prototype = Object.create(superClass.prototype); subClass.prototype.constructor = subClass; subClass.__proto__ = superClass; }

var NonceProvider =
/*#__PURE__*/
function (_Component) {
  _inheritsLoose(NonceProvider, _Component);

  function NonceProvider(props) {
    var _this;

    _this = _Component.call(this, props) || this;

    _this.createEmotionCache = function (nonce) {
      return createCache({
        nonce: nonce
      });
    };

    _this.createEmotionCache = memoizeOne(_this.createEmotionCache);
    return _this;
  }

  var _proto = NonceProvider.prototype;

  _proto.render = function render() {
    var emotionCache = this.createEmotionCache(this.props.nonce);
    return React.createElement(CacheProvider, {
      value: emotionCache
    }, this.props.children);
  };

  return NonceProvider;
}(Component);

var index = manageState(Select);

export default index;
export { NonceProvider };

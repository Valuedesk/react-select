import _extends from '@babel/runtime/helpers/esm/extends';
import * as React from 'react';
import { forwardRef } from 'react';
import { S as Select } from '../../dist/Select-fcd9bc2b.esm.js';
import { u as useStateManager } from '../../dist/useStateManager-660b59c0.esm.js';
import { u as useCreatable } from '../../dist/useCreatable-7a740669.esm.js';
export { u as useCreatable } from '../../dist/useCreatable-7a740669.esm.js';
import '../../dist/index-29c296da.esm.js';
import '@emotion/react';
import '@babel/runtime/helpers/taggedTemplateLiteral';
import '@babel/runtime/helpers/objectWithoutProperties';
import '@babel/runtime/helpers/slicedToArray';
import '@babel/runtime/helpers/typeof';
import '@babel/runtime/helpers/classCallCheck';
import '@babel/runtime/helpers/createClass';
import '@babel/runtime/helpers/inherits';
import '@babel/runtime/helpers/defineProperty';
import 'react-dom';
import '@babel/runtime/helpers/toConsumableArray';
import 'memoize-one';

var CreatableSelect = /*#__PURE__*/forwardRef(function (props, ref) {
  var creatableProps = useStateManager(props);
  var selectProps = useCreatable(creatableProps);
  return /*#__PURE__*/React.createElement(Select, _extends({
    ref: ref
  }, selectProps));
});

export default CreatableSelect;

import 'react';
import 'memoize-one';
import '@emotion/core';
import 'react-dom';
import 'prop-types';
import '../../dist/utils-9e419d6e.browser.esm.js';
import '../../dist/index-7fb35fbf.browser.esm.js';
import { S as Select } from '../../dist/Select-0984a513.browser.esm.js';
import '@emotion/css';
import 'react-input-autosize';
import { m as manageState } from '../../dist/stateManager-04f734a2.browser.esm.js';
import { makeAsyncSelect } from '../../async/dist/react-select.browser.esm.js';
import { makeCreatableSelect } from '../../creatable/dist/react-select.browser.esm.js';

var SelectCreatable = makeCreatableSelect(Select);
var SelectCreatableState = manageState(SelectCreatable);
var AsyncCreatable = makeAsyncSelect(SelectCreatableState);

export default AsyncCreatable;

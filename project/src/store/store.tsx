import {createStore} from '@reduxjs/toolkit';
import {reducer} from './reducer';
import {composeWithDevTools} from 'redux-devtools-extension';

export const store = createStore(reducer, composeWithDevTools());

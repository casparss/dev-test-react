import * as React from 'react';
import { Provider } from 'react-redux'
import Layout from './containers/Layout'
import { store } from './state'
import DictionaryManager from './containers/DictionaryManager'
import TransformView from './components/TransformView'
import TheBrief from './components/TheBrief'

const tabs: Array<Array<any>> = [
  ['Dictionary Manager', DictionaryManager],
  ['Data Transformer', TransformView],
  ['The Brief', TheBrief]
]

export default () =>
  <Provider store={store}>
    <Layout tabs={tabs} />
  </Provider>

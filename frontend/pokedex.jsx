import React from 'react';
import ReactDOM from 'react-dom';
import { receiveAllPokemon, requestAllPokemon } from './actions/pokemon_actions';
import { selectAllPokemon } from './reducers/selector';
import configureStore from './store/store';
import { fetchAllPokemon } from './util/api_util';

import Root from '../frontend/components/root';

document.addEventListener('DOMContentLoaded', () => {
    // window.getState = store.getState;
    // window.dispatch = store.dispatch;
    // window.fetchAllPokemon = fetchAllPokemon;
    // window.receiveAllPokemon = receiveAllPokemon;
    // window.requestAllPokemon = requestAllPokemon;
    // window.selectAllPokemon = selectAllPokemon;
    const store = configureStore(store);
    const root = document.getElementById('root');
    ReactDOM.render(<Root store={store}/>, root);
});
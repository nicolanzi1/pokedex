import React from 'react';
import ReactDOM from 'react-dom';
import { receiveAllPokemon, requestAllPokemon } from './actions/pokemon_actions';
import { selectAllPokemon } from './reducers/selector';
import configureStore from './store/store';
import { fetchAllPokemon } from './util/api_util';

document.addEventListener('DOMContentLoaded', () => {
    const store = configureStore(store);
    window.getState = store.getState;
    window.dispatch = store.dispatch;
    window.fetchAllPokemon = fetchAllPokemon;
    window.receiveAllPokemon = receiveAllPokemon;
    window.requestAllPokemon = requestAllPokemon;
    window.selectAllPokemon = selectAllPokemon;
    const root = document.getElementById('root');

    ReactDOM.render(<h1>Pokedex</h1>, root);
});
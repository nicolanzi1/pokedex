import React, { Component } from 'react';
import { Route } from 'react-router-dom';

import PokemonIndexItem from './pokemon_index_item';
import PokemonDetailContainer from './pokemon_detail_container';

export default class PokemonIndex extends Component {
    componentDidMount() {
        this.props.requestAllPokemon();
    }

    render () {
        const { pokemon } = this.props;

        return (
            <section className="pokedex">
                <Route
                    path="/pokemon/:pokemonId"
                    component={PokemonDetailContainer}
                />
                <ul>
                    {pokemon.map(poke => <PokemonIndexItem key={poke.id} pokemon={poke} />)}
                </ul>
            </section>
        );
    }
}
import React, { Component } from 'react';
import PokemonIndexItem from './pokemon_index_item';

export default class PokemonIndex extends Component {
    componentDidMount() {
        this.props.requestAllPokemon();
    }

    render () {
        const { pokemon } = this.props;

        const pokemonItems = pokemon.map(poke => (
            <PokemonIndexItem key={poke.id} pokemon={poke} />
        ));

        return (
            <section className="pokedex">
                <ul>
                    {pokemonItems}
                </ul>
            </section>
        );
    }
}
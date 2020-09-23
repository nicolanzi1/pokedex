import React, { Component } from 'react';
import { selectAllPokemon } from '../../reducers/selector';

export default class PokemonIndex extends Component {
    componentDidMount() {
        this.props.requestAllPokemon();
    }

    render () {
        const { pokemon } = this.props;

        return (
          <section className="pokedex">
            <ul>
              {pokemon.map((poke) => (
                <li key={poke.id}>{poke.name}</li>
              ))}
            </ul>
          </section>
        );
    }
}
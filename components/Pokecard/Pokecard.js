import React, { Component } from "react";

// const POK_API =
// "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/";

const POKE_API = "https://assets.pokemon.com/assets/cms2/img/pokedex/detail/";

let changeNum = (number) => (number <= 999 ? `00${number}`.slice(-3) : number);

class Pokecard extends Component {
  render() {
    let pokeImg = `${POK_API}${changeNum(this.props.id)}.png`;
    return (
      <div className="Pokecards">
        <img src={pokeImg} alt={this.props.name} />
        <h1 className="Pokecard-title">{this.props.name}</h1>
        <div className="Pokecard-data">Type: {this.props.type}</div>
        <div className="Pokecard-data">EXP: {this.props.exp}</div>
      </div>
    );
  }
}

export default Pokecard;

import React from 'react'
import PokemonCollection from './PokemonCollection'
import PokemonForm from './PokemonForm'
import Search from './Search'
import { Container } from 'semantic-ui-react'

class PokemonPage extends React.Component {
  constructor(){
    super()
    this.state = {
      pokemon:[],
      searchField: ""
    }
  }

  componentDidMount(){
    fetch("http://localhost:3000/pokemon")
    .then(resp => resp.json())
    .then(data => this.setState({pokemon: data}))
  }
  
  handleSearch = (event) => {
   this.setState({searchField: event.target.value})
  }


  render() {
   
    let displayPokemon = this.state.pokemon.filter((eachP) => {return eachP.name.toLowerCase().includes(this.state.searchField.toLowerCase())})
      
    return (
      <Container>
        <h1>Pokemon Searcher</h1>
        <br />
        <PokemonForm />
        <br />
        <Search handleSearch={this.handleSearch}/>
        <br />
        <PokemonCollection pokemon={displayPokemon} />
      </Container>
    )
  }
}


export default PokemonPage

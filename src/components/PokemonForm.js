import React from 'react'
import { Form } from 'semantic-ui-react'

class PokemonForm extends React.Component {

  state =  this.resetState()

  resetState(){
    return {name:'', hp:'', frontUrl:'', backUrl:''}
  }

  handleChange = (e) => {
  let name = e.target.name
  let value = e.target.value

  this.setState({[name]: value})
  }

  handleSubmit = (e) => {
    e.preventDefault()
    let {name, hp, frontUrl, backUrl} = this.state

    fetch("http://localhost:3000/pokemon", {
      method: "POST",
      headers: {"Content-Type": "application/json", "accepts":"application/json"},
      body: JSON.stringify({
        name: name,
        hp: hp,
        sprites: {front: frontUrl, back: backUrl}
      })
    }).then(r => r.json())
    .then(data => {
      this.setState(this.resetState())
      this.props.addPokemon(data)
    })
  }


  render() {
    return (
      <div>
        <h3>Add a Pokemon!</h3>
        <Form onSubmit={this.handleSubmit}>
          <Form.Group widths="equal">
            <Form.Input fluid label="Name" placeholder="Name" name="name" onChange={this.handleChange} value={this.state.name}/>
            <Form.Input fluid label="hp" placeholder="hp" name="hp" onChange={this.handleChange} value={this.state.hp} />
            <Form.Input fluid label="Front Image URL" placeholder="url" name="frontUrl" onChange={this.handleChange} value={this.state.frontUrl} />
            <Form.Input fluid label="Back Image URL" placeholder="url" name="backUrl" onChange={this.handleChange} value={this.state.backUrl} />
          </Form.Group>
          <Form.Button>Submit</Form.Button>
        </Form>
      </div>
    )
  }
}

export default PokemonForm

import React from 'react'
import { Card } from 'semantic-ui-react'

class PokemonCard extends React.Component {
  constructor(){
    super()
    this.state = {
      picture: "",
      showingFront: true
    }
    // this.pokeFlip = this.pokeFlip.bind(this)
  }

  componentDidMount(){
    this.setState({
      picture:this.props.pokeCard.sprites.front,
      showingFront: true
    })
  }
  pokeFlip = () => {
    console.log(this.state.showingFront)
    if (this.state.showingFront)
    {this.setState({ picture:this.props.pokeCard.sprites.back,
      showingFront: false})
    }else{
        this.setState({ picture:this.props.pokeCard.sprites.front,
          showingFront: true})
      }
  } 
  render() {
    return (
      <Card onClick={this.pokeFlip}>
        <div>
          <div className="image">
            <img src= {this.state.picture} alt="oh no!" />
          </div>
          <div className="content">
            <div className="header">{this.props.pokeCard.name}</div>
          </div>
          <div className="extra content">
            <span>
              <i className="icon heartbeat red" />
              {this.props.pokeCard.hp}
            </span>
          </div>
        </div>
      </Card>
    )
  }
}

export default PokemonCard

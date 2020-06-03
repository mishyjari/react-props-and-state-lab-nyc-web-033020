import React from 'react'

import Filters from './Filters'
import PetBrowser from './PetBrowser'

class App extends React.Component {
  constructor() {
    super()

    this.state = {
      pets: [],
      filters: {
        type: 'all'
      }
    }
  }

  	handleFilterChange = event => {
  		event.persist();
		const type = event.target.value;

		this.setState({
			filters: { ...this.state.filters, type: type }
		})
  	}

	handleAdoptPet = id => {
		let newPetsArray = [...this.state.pets];
		// Find the item with matching id
		newPetsArray.map(pet => {
			if (pet.id === id) { pet.isAdopted = true }
			return pet;

		})
		this.setState({
			pets: newPetsArray
		})
	}

	handleFindPetsClick = () => {
		const type = this.state.filters.type;
		

		const url = type === 'all' ? '/api/pets' : `/api/pets?type=${type}`

		fetch(url)
			.then( res => res.json() )
			.then( pets => {
				this.setState({
					pets: pets
				})
			})
			
	}

  render() {
    return (
      <div className="ui container">
        <header>
          <h1 className="ui dividing header">React Animal Shelter</h1>
        </header>
        <div className="ui container">
          <div className="ui grid">
            <div className="four wide column">
              <Filters onSelectChange={this.handleFilterChange} onFindPetsClick={this.handleFindPetsClick}/>
            </div>
            <div className="twelve wide column">
              <PetBrowser onAdoptPet={this.handleAdoptPet} pets={this.state.pets} />

            </div>
          </div>
        </div>
      </div>
    )
  }
}

export default App

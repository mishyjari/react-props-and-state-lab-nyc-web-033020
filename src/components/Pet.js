import React from 'react'

class Pet extends React.Component {

 getButton = () => {
	if(this.props.isAdopted){
      	return <button className="ui disabled button">Already adopted</button>
	} else {
		return <button 
			className="ui primary button" 
			onClick={() => this.props.onAdoptClick(this.props.id) }>
				Adopt pet
		</button>
	}
 }
  render() {


  	const pet = this.props;
    return (
      <div className="card">
        <div className="content">
          <a className="header">
              {pet.gender === 'female' ? '♀ ' : '♂ '}
          	  {pet.name}
          </a>
          <div className="meta">
            <span className="date">PET TYPE</span>
          </div>
          <div className="description">
            <p>Age: {pet.age}</p>
            <p>Weight: {pet.weight}</p>
          </div>
        </div>
        <div className="extra content">
        	{this.getButton(pet.id)}
        </div>
      </div>
    )
  }
}

export default Pet

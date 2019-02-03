import React from 'react'

const weight = 'weight as a ratio of hog to LG - 24.7 Cu. Ft. French Door Refrigerator with Thru-the-Door Ice and Water'

class HogCard extends React.Component {
  constructor() {
    super()
    this.state={
      showDetails: false
    }
  }

  handleClick = () => {
    this.setState({
      showDetails: !this.state.showDetails
    })
  }

  render() {
    return (
      <div onClick={this.handleClick}>

        <h2>{this.props.hogData.name}</h2>
        <img
          alt={this.props.hogData.name}
          src={require(`../hog-imgs/${helperFunction(this.props)}`)}
        />
        {this.state.showDetails === true ?
            <div>
              <h4>Specialty: {this.props.hogData.specialty}</h4>
              <p>Greased: {`${this.props.hogData.greased}`}</p>
              <p>{weight}: {this.props.hogData[weight]}</p>
              <p>Highest Medal Achieved: {this.props.hogData['highest medal achieved']}</p>
            </div>
          :
            null
        }

      </div>
    )
  }
}

export default HogCard

const helperFunction = (props) => {
  //take name
  let name = props.hogData.name

  //downcase
  let lowerName = name.toLowerCase()
  // lowerName = "my lovely hog"

  //wherever there's space replace w/ _
  let dashLowerName = lowerName.split(' ').join('_')
  //lowerName = "my_lovely_hog"

  //add .jpg
  return dashLowerName + ".jpg"
}

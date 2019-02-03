import React from 'react'
import HogCard from '../components/HogCard'

class HogsContainer extends React.Component {
  render() {

    return (
      <div>
        {this.props.ourHogs.map( (hogObj, index) =>
          {return <HogCard hogData={hogObj} key={index} />}
        )}
      </div>
    )
  }
}

export default HogsContainer

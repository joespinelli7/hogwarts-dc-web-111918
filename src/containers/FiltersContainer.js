import React from 'react'

class FiltersContainer extends React.Component {
  render() {
    return (
      <div>

        <select onChange={(e) => this.props.setSortState(e.target.value)}>
          <option value="name">Name</option>
          <option value="weight">Weight</option>
        </select>

        <div >
         <label htmlFor="greased"> Filter greased: </label>
         <input
           name="greased"
           type='radio'
           checked={this.props.greasedState}
           onClick={this.props.setGreasedState}
         />
         </div>

        </div>
    )
  }
}

export default FiltersContainer

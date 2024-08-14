import React from 'react'

const Card = (props) => {
  return (
        <tr>
          <th> {props.name}</th>
          <th>{props.lastname}</th>
          <th>{props.food} </th>
          <th>{props.age}</th>
        </tr>

  )
}

export default Card
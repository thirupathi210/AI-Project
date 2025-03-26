import React from 'react';
import {UserContext} from '../App';
const Second = () => {
  return (
    <div>
      <UserContext.Consumer>
        {(value)=><h1>{value}</h1>}
        </UserContext.Consumer>
    </div>
  )
}

export default Second;

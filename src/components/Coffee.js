import React from 'react';
import PropTypes from 'prop-types';

function Coffee(props){
  return (
    <>
      <div onClick = {() => props.whenCoffeeClicked(props.id)}>
        <h3>Coffee name : {props.name}  </h3>
        <h3>Roast: {props.roast}</h3>
        <h3>Price: {props.price}</h3>
        <hr/>
      </div>
    </>
  )
}

Coffee.propTypes = {
  name: PropTypes.string,
  roast: PropTypes.string,
  origin: PropTypes.string,
  price: PropTypes.string,
  id: PropTypes.string,
  whenCoffeeClicked: PropTypes.func
};

export default Coffee;



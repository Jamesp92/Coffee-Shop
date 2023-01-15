import React from 'react';
import { v4 } from 'uuid';
import PropTypes from "prop-types";
import ReusableForm from './ReusableForm';

function NewCoffeeForm(props){
  
  return (
    <>
      <ReusableForm
        formSubmissionHandler={handleNewCoffeeFormSubmission} 
        buttonText="Add" />
    </>
  );

  function handleNewCoffeeFormSubmission(e) {
    e.preventDefault();
    props.onNewCoffeeCreation({
      name: e.target.name.value, 
      roast: e.target.roast.value, 
      origin: e.target.origin.value,
      price: e.target.price.value,
      pounds: 130,
      id: v4()
    });
  }
}   
  
      

NewCoffeeForm.propTypes = {
  onNewCoffeeCreation: PropTypes.func,
};
  

export default NewCoffeeForm;
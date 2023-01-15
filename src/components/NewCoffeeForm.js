import { v4 } from 'uuid';
import PropTypes from "prop-types"; 
import ReusableForm from "./ReusableForm";

function NewCoffeeForm(props){

  function handleNewCoffeeFormSubmission(e) {
    e.preventDefault();
    props.onNewCoffeeCreation({
      name: e.target.name.value, 
      origin: e.target.origin.value, 
      price: e.target.price.value, 
      roast: e.target.roast.value,
      quantity: 130,
      id: v4()
    });
  }

  // name, origin, price, and roast

  return (
    <>
      <ReusableForm 
        formSubmissionHandler={handleNewCoffeeFormSubmission}
        buttonText="submit" />
    </>
  );
}

NewCoffeeForm.propTypes = {
  onNewCoffeeCreation: PropTypes.func
};

export default NewCoffeeForm;
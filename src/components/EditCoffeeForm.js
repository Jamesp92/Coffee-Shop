import ReusableForm from "./ReusableForm";
import PropTypes from "prop-types";

function EditCoffeeForm (props) {
  const { coffee } = props;

  function handleEditCoffeeFormSubmission(e) {
    e.preventDefault();
    props.onEditCoffee({
      name: e.target.name.value, 
      // origin: e.target.origin.value, 
      price: e.target.price.value, 
      roast: e.target.roast.value,
      quantity: 130,
      id: coffee.id
    });
  }

  return (
    <>
      <ReusableForm 
        formSubmissionHandler={handleEditCoffeeFormSubmission} 
        buttonText="Update Coffee" />
    </>
  );
}

EditCoffeeForm.propTypes = {
  onEditCoffee: PropTypes.func,
  coffee: PropTypes.object
};

export default EditCoffeeForm;
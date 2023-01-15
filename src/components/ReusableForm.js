import PropTypes from "prop-types";

function ReusableForm(props) {
  return (
    <>
        <form onSubmit={props.formSubmissionHandler}>
            <input
              type='text'
              name='name'
              placeholder='Coffee Name' />
            <input
              type='text'
              name='origin'
              placeholder='Coffee Origin' />
            <input
              type='text'
              name='roast'
              placeholder='Roast' />
            <input
              type='number'
              name='price'
              placeholder= '5' />
          <button type='submit'>{props.buttonText}</button>
        </form>
    
    </>
  );
}

ReusableForm.propTypes = {
  formSubmissionHandler: PropTypes.func,
  buttonText: PropTypes.string
};

export default ReusableForm;


// name, origin, price, and roast


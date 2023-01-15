import PropTypes from "prop-types"

function Coffee(props){
  return (
    <>
      <div onClick = {() => props.whenCoffeeClicked(props.id)}>
        <h3>{props.name} - {props.roast} - {props.origin}</h3>  
        <p>{props.price}</p>
        <hr/>
      </div>   
    </>
  );
}

Coffee.propTypes = {
  name: PropTypes.string,
  roast: PropTypes.string,
  origin: PropTypes.string,
  price: PropTypes.string,
  id: PropTypes.string,
  whenCoffeeClicked: PropTypes.func
}

export default Coffee;
// name, origin, price, and roast
import PropTypes from "prop-types"

function Coffee(props){
  return (
    <>
      <div onClick = {() => props.whenCoffeeClicked(props.id)}>
        <h3>{props.name} - {props.roast} - {props.origin} - {props.price}</h3>  
        <h2>Quatntiy: </h2>
          {props.quantity == 0 
          ? <h2>Out Of Stock</h2>
          : <h2>{props.quantity}</h2>
        }
        <hr/>
      </div>   
      <button onClick={() => props.whenBuyingPound(props.id)}> Buy Pound  </button>
      <hr/>
    </>
  );
}

Coffee.propTypes = {
  name: PropTypes.string,
  roast: PropTypes.string,
  origin: PropTypes.string,
  price: PropTypes.number,
  quantity: PropTypes.number,
  id: PropTypes.string,
  whenCoffeeClicked: PropTypes.func,
  whenBuyingPound: PropTypes.func
}

export default Coffee;
// name, origin, price, and roast

qauntity 
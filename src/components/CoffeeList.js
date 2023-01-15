import Coffee from "./Coffee";
import PropTypes from "prop-types";

function CoffeeList(props){

  return (
    <>
      <hr/>
      {props.coffeeList.map((coffee) =>
        <Coffee
          whenCoffeeClicked={props.onCoffeeSelection}
          name={coffee.names}
          origin={coffee.location}
          price={coffee.price}
          roast={coffee.roast}
          id={coffee.id}
          key={coffee.id}/>
      )}
    </>
  );
}
  // name, origin, price, and roast

CoffeeList.propTypes = {
  coffeeList: PropTypes.array,
  onCoffeeSelection: PropTypes.func
};

export default CoffeeList;
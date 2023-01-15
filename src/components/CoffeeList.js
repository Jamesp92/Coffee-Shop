import Coffee from "./Coffee";
import PropTypes from "prop-types";

function CoffeeList(props){

  return (
    <>
      <hr/>
      {props.coffeeList.map((coffee) =>
        <Coffee
          whenCoffeeClicked={props.onCoffeeSelection}
          name={coffee.name}
          origin={coffee.origin}
          price={coffee.price}
          roast={coffee.roast}
          pounds={coffee.pounds}
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
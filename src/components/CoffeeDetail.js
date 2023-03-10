import PropTypes from "prop-types";

function CoffeeDetail(props){
  const { coffee, onClickingDelete, onClickingEdit , onClickingSell } = props; 

  return (
    <>
      <h1>coffee Detail</h1>
      <h3>Coffee Name: {coffee.name} </h3>  
      <h3>Coffee Roast: {coffee.roast} </h3>   
      <h3>Coffee Price:$ {coffee.price} </h3>  
      <h4>inventory: {coffee.pounds}lbs.</h4>
      <button onClick={onClickingEdit}>Update coffee</button>
      <button onClick={()=> onClickingDelete(coffee.id)}>get rid of coffee</button>
      <button onClick={()=> onClickingSell(coffee.id)}>Sell 1 pound</button>
      <hr/>
    </>
  );
}

CoffeeDetail.propTypes = {
  coffee: PropTypes.object,
  onClickingDelete: PropTypes.func,
  onClickingEdit: PropTypes.func 
};

export default CoffeeDetail;
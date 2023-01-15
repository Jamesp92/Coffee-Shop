import PropTypes from "prop-types";

function CoffeeDetail(props){
  const { coffee, onClickingDelete, onClickingEdit } = props; 

  return (
    <>
      <h1>coffee Detail</h1>
      <h3>{props.name} - {props.roast} - {props.origin} - {props.price}</h3>  
      <button onClick={onClickingEdit}>Update coffee</button>
      <button onClick={()=> onClickingDelete(coffee.id)}>get rid of coffee</button>
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
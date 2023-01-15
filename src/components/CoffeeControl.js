
import NewCoffeeForm from "./NewCoffeeForm";
import CoffeeList from "./CoffeeList";
import CoffeeDetail from "./CoffeeDetail";
import { Container, Section } from "react-bulma-components";

class CoffeeController extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      formVisibleOnPage: false,
      mainCoffeeList: [],
      selectedCoffee: null
    };
  }

  handleChangingSelectedCoffee = (id) => {
    const newSelectedCoffee = this.state.mainCoffeeList.filter(coffee => coffee.id === id)[0];
    this.setState({selectedCoffee: newSelectedCoffee});
  }

  handleClick = () => {
    if (this.state.selectedCoffee != null) {
      this.setState({
        formVisibleOnPage: false,
        selectedCoffee: null
      });
    } else {
      this.setState(prevState => ({
        formVisibleOnPage: !prevState.formVisibleOnPage,
      }));
    }
  }

  handleAddingNewCoffeeToList = (newCoffee) => {
    const newMainCoffeeList = this.state.mainCoffeeList.concat(newCoffee);
    this.setState({mainCoffeeList: newMainCoffeeList});
    this.setState({formVisibleOnPage: false});
  }

  handleBuyingCoffee = (id) => {
    const newMainCoffeeList = this.state.mainCoffeeList
    const foundCoffee = newMainCoffeeList.findCoffee(coffee => coffee.id === id);
    const updateCoffee = newMainCoffeeList[foundCoffee]
    if (updateCoffee.quantity > 0) {
      newMainCoffeeList[foundIndex].quantity -= 1
    }
    console.log(updateCoffee.quantity)
    this.setState({mainCoffeeList: newMainCoffeeList});
  }

  render(){
    let currentlyVisisbleState = null;
    let buttonText = null;

    if (this.state.selectedCoffee != null) {
      currentlyVisisbleState = <CoffeeDetail coffee={this.state.selectedcoffee}/>
      buttonText = "Return to coffee List";
    } else if (this.state.formVisibleOnPage) {
      currentlyVisisbleState = <NewCoffeeForm onNewcoffeeCreation={this.handleAddingNewcoffeeToList}/>
      buttonText = "Return to coffee List";
    } else {
      currentlyVisisbleState = 
      <CoffeeList 
      onCoffeeSelection={this.handleChangingSelectedCoffee} 
      coffeeList={this.state.mainCoffeeList}
      onBuyingCoffeet={this.handleBuyingCoffee}/>
      buttonText = "Add New Coffee";
    }

    return(
      <>
        {currentlyVisisbleState}
        <button onClick={this.handleClick}>{buttonText}</button>
      </>
    );
  }
}
export default CoffeeController;
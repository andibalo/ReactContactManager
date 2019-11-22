import { combineReducers } from "redux";
import contactReducer from "./contactReducer";

//COMBINEREDUCERS takes all of the reducers as an object
//the state from contactReducer is avaialble from a component prop so we label it as contact
//we access the state with this.props.contact

export default combineReducers({
  contact: contactReducer
});

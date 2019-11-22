import React, { Component, Fragment } from "react";
import Contact from "./Contact";

import { getContacts } from "../actions/actionTypes";
import { connect } from "react-redux";
class Contacts extends Component {
  // componentDidMount() {
  //   //AXIOS.GET automatically parses the incoming data to json so we dont have to parse it first
  //   //FETCH, we have to parse the incoming res data to json using res.json()
  //   axios.get("https://jsonplaceholder.typicode.com/users").then(res => {
  //     this.setState({
  //       contacts: res.data
  //     });
  //   });
  // }

  //returning a component/jsx element from a map loop requires it to be put inside of a () instead of {}
  render() {
    const { contacts } = this.props;

    return (
      <Fragment>
        <div>
          <h1 className="display-3 mb-3">
            <span className="text-primary">Contact</span> List
          </h1>
          <div>
            {contacts.map(contact => (
              <Contact key={contact.id} contact={contact} />
            ))}
          </div>
        </div>
      </Fragment>
    );
  }
}

const mapStateToProps = state => ({
  contacts: state.contact.contacts
});

export default connect(mapStateToProps, { getContacts })(Contacts);

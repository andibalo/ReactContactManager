import React, { Component, Fragment } from "react";
import Contact from "./Contact";

class Contacts extends Component {
  constructor() {
    super();
    this.state = {
      contacts: [
        {
          id: 1,
          name: "Andi Balo",
          email: "andibalo213@gmail.com",
          phone: "029891292"
        },
        {
          id: 2,
          name: "John Doe",
          email: "andibalo213@gmail.com",
          phone: "029891292"
        },
        {
          id: 3,
          name: "Jane Doe",
          email: "andibalo213@gmail.com",
          phone: "029891292"
        }
      ]
    };
  }

  //returning a component/jsx element from a map loop requires it to be put inside of a () instead of {}
  render() {
    const { contacts } = this.state;

    const deleteContact = id => {
      console.log(id);

      const newContacts = contacts.filter(contact => {
        return id !== contact.id;
      });

      this.setState({
        contacts: newContacts
      });
    };

    return (
      <Fragment>
        <div>
          <h1 className="display-3 mb-3">
            <span className="text-primary">Contact</span> List
          </h1>
          <div>
            {contacts.map(contact => (
              <Contact
                deleteClickHandler={deleteContact.bind(this, contact.id)}
                key={contact.id}
                contact={contact}
              />
            ))}
          </div>
        </div>
      </Fragment>
    );
  }
}

export default Contacts;

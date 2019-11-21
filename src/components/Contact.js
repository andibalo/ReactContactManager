import React, { Fragment, Component } from "react";

class Contact extends Component {
  constructor() {
    super();
    this.state = {
      onShow: false
    };
  }

  //normal function cannot access state but arrow function can because it is a custom method
  //2nd solution is bind the method to the current class using this this.method.bind(this)
  onShowClick = () => {
    if (this.state.onShow) {
      this.setState({
        onShow: false
      });
    } else {
      this.setState({
        onShow: true
      });
    }
  };

  //UPDATE a state in a component from another component
  //The event handler in this component triggers a Function that runs in the parent component
  onDeleteClick = () => {
    this.props.deleteClickHandler();
  };

  render() {
    const { name, email, phone } = this.props.contact;
    const { onShow } = this.state;

    return (
      <Fragment>
        <div className="card card-body mb-3 ">
          <h3>
            {name}
            <i
              onClick={this.onShowClick}
              className="fas fa-sort-down ml-2"
              style={{ cursor: "pointer" }}
            ></i>

            <i
              onClick={this.onDeleteClick}
              className="fas fa-times mt-2 mr-2"
              style={{ cursor: "pointer", float: "right", color: "#fe3939" }}
            ></i>
            <i
              onClick={function() {
                console.log("edit");
              }}
              className="fas fa-edit mt-2 mr-2"
              style={{ cursor: "pointer", float: "right", color: "black" }}
            ></i>
          </h3>
          {onShow ? (
            <ul className="list-group">
              <li className="list-group-item">{email}</li>
              <li className="list-group-item">{phone}</li>
            </ul>
          ) : null}
        </div>
      </Fragment>
    );
  }
}

export default Contact;

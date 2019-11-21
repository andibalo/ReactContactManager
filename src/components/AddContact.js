import React, { Component, Fragment } from "react";

class AddContact extends Component {
  constructor() {
    super();
    this.state = {
      name: "",
      email: "",
      phone: ""
    };
  }

  onChangeHandler = e => {
    const { name, value } = e.target;

    //THE brace is used to access property value of an obj like object[propertname]
    //without the brace it will have an error bcs it suggests it is a property name instead of acccessing value from event obj
    this.setState({
      [name]: value
    });

    console.log(e.target.value);
  };

  onSubmitHandler = e => {
    e.preventDefault();
    console.log(this.state);
  };

  render() {
    const { name, email, phone } = this.state;

    return (
      <Fragment>
        <h1 className="display-3 ">
          <span className="text-primary">Add</span> Contact
        </h1>
        <div className="card mb-3 ">
          <div className="card-body">
            <form onSubmit={this.onSubmitHandler}>
              <div className="form-group">
                <label>Name</label>
                <input
                  name="name"
                  onChange={this.onChangeHandler}
                  type="text"
                  className="form-control form-control-lg"
                  placeholder="Enter Name"
                  value={name}
                />
              </div>
              <div className="form-group">
                <label>Email</label>
                <input
                  name="email"
                  type="email"
                  onChange={this.onChangeHandler}
                  className="form-control form-control-lg"
                  placeholder="Enter Email"
                  value={email}
                />
              </div>
              <div className="form-group">
                <label>Phone</label>
                <input
                  name="phone"
                  type="text"
                  onChange={this.onChangeHandler}
                  className="form-control form-control-lg"
                  placeholder="Enter Phone"
                  value={phone}
                />
              </div>
              <input
                type="submit"
                value="Add Contact"
                className="btn btn-primary btn-lg btn-block"
              />
            </form>
          </div>
        </div>
      </Fragment>
    );
  }
}

export default AddContact;

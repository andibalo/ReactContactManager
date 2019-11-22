import React, { Fragment } from "react";

const About = () => {
  return (
    <Fragment>
      <h1 className="display-3 ">
        <span className="text-primary">About</span> This App
      </h1>
      <p className="w-50 text-justify">
        This app allows you to manage your contacts easily by listing all of
        your contacts and enabling you to add,delete and edit your contacts
        list.
      </p>
      <p>
        Created By: <strong>Andi Usman Balo</strong>
      </p>
    </Fragment>
  );
};

export default About;

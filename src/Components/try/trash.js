import { graphql } from "@apollo/client/react/hoc";
import React, { Component } from "react";
import { LOAD_USERS } from "../../GraphQL/Queries";

export class Trash extends Component {
  render() {
    const data = this.props.data;
    if (!data.loading) {
      //   console.log(data.categories[0]);
    }
    // console.log(this.props.data.categories);
    return <ul id="book-list"></ul>;
  }
}

export default graphql(LOAD_USERS)(Trash);

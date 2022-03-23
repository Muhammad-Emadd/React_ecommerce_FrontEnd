import { graphql } from "@apollo/client/react/hoc";
import React, { Component } from "react";
import { LOAD_USERS } from "../../GraphQL/Queries";

export class Trash extends Component {
  constructor() {
    super();
    this.state = {
      products: [],
      searchField: "",
    };
  }
  render() {
    const data = this.props.data;
    if (!data.loading) {
      // this.setState({ products: this.props.data.categories });
      console.log(this.state);
    }
    console.log(this.props.data.categories);
    return <></>;
  }
}

export default graphql(LOAD_USERS)(Trash);

import React, { Component } from "react";
import "./App.css";

import {
  ApolloClient,
  InMemoryCache,
  ApolloProvider,
  HttpLink,
  from,
} from "@apollo/client";
import { onError } from "@apollo/client/link/error";
import NavBar from "./Components/NavBar/NavBar";
// import Trash from "./Components/try/trash";
import Trash2 from "./Components/try/Trash2";
import Body from "./Components/Body/Body";
import CartPage from "./Components/CartPage/CartPage";
// import { CATEGORIES } from "./GraphQL/Queries";

const errorLink = onError(({ graphqlErrors, networkErrors }) => {
  if (graphqlErrors) {
    graphqlErrors.map(({ message, location, path }) => {
      return alert(`Graphql error ${message}`);
    });
  }
});

const link = from([
  errorLink,
  new HttpLink({ uri: "http://localhost:4000/graphql" }),
]);

const client = new ApolloClient({
  cache: new InMemoryCache(),
  link: link,
});

export class App extends Component {
  render() {
    return (
      <ApolloProvider client={client}>
        {/* <NavBar />
        <Trash2 />
        <Body /> */}

        <CartPage />
      </ApolloProvider>
    );
  }
}

export default App;

// client
//   .query({
//     query: CATEGORIES,
//   })
//   .then((result) => console.log(result));

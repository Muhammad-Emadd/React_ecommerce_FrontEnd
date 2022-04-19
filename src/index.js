import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter } from "react-router-dom";
import { QueryClient, QueryClientProvider } from "react-query";

import App from "./App";
import { Provider } from "jotai";

const queryCliet = new QueryClient();

ReactDOM.render(
  <React.StrictMode>
    <QueryClientProvider client={queryCliet}>
      <Provider>
        <BrowserRouter>
          <App />
        </BrowserRouter>
      </Provider>
    </QueryClientProvider>
  </React.StrictMode>,

  document.getElementById("root")
);

import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter } from "react-router-dom";
import { QueryClient, QueryClientProvider } from "react-query";
import { ReactQueryDevtools } from "react-query/devtools";
import App from "./App";
import { Provider } from "jotai";

const queryCliet = new QueryClient();

ReactDOM.render(
  <React.StrictMode>
    <QueryClientProvider client={queryCliet}>
      <Provider>
        <BrowserRouter>
          <React.Suspense fallback={<div>Loading ....</div>}>
            <App />
          </React.Suspense>
          <ReactQueryDevtools initialIsOpen={true} />
        </BrowserRouter>
      </Provider>
    </QueryClientProvider>
  </React.StrictMode>,

  document.getElementById("root")
);

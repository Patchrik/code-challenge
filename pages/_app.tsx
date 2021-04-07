import "../styles/globals.css";
import React from "react";
import CssBaseline from "@material-ui/core/CssBaseline";
import ContextProviders from "../context/index";
import { QueryClient, QueryClientProvider } from "react-query";

function MyApp({ Component, pageProps }) {
  // define queryClient
  const queryClient = new QueryClient({
    defaultOptions: {
      queries: {
        staleTime: Infinity,
      },
    },
  });

  return (
    // set up clients/app
    <QueryClientProvider client={queryClient}>
      <ContextProviders>
        <CssBaseline />
        <Component {...pageProps} />
      </ContextProviders>
    </QueryClientProvider>
  );
}

export default MyApp;

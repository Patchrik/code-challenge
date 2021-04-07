import "../styles/globals.css";
import React from "react";
import type { AppProps } from "next/app";
import CssBaseline from "@material-ui/core/CssBaseline";
import ContextProviders from "../context/index";
import { QueryClient, QueryClientProvider } from "react-query";

function MyApp({ Component, pageProps }: AppProps) {
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

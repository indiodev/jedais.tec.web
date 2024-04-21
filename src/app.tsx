import { QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter } from "react-router-dom";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

import { Tanstack } from "./lib/tanstack";
import { Router } from "./routes";

export function App(): React.ReactElement {
  return (
    <QueryClientProvider client={Tanstack}>
      <BrowserRouter>
        <Router />
      </BrowserRouter>

      <ToastContainer theme="colored" />
    </QueryClientProvider>
  );
}

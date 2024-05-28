import ReactDOM from "react-dom/client";
import { BrowserRouter } from "react-router-dom";
import { NextUIProvider } from "@nextui-org/system";
import "./index.css";
import App from "./App.tsx";
import { ChakraProvider } from "@chakra-ui/react";

ReactDOM.createRoot(document.getElementById("root")!).render(
  <BrowserRouter>
    <ChakraProvider>
      <NextUIProvider>
        <App />
      </NextUIProvider>
    </ChakraProvider>
  </BrowserRouter>
);

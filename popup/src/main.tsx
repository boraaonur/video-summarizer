import React from "react";
import ReactDOM from "react-dom/client";

import { RouterProvider, createMemoryRouter } from "react-router-dom";
import Home from "./App.tsx";

import "./main.css";

// 1. import `ChakraProvider` component
import { ChakraProvider } from "@chakra-ui/react";

const routes = [
  {
    path: "/",
    element: <Home />,
    // loader: () => FAKE_EVENT,
  },
];

const router = createMemoryRouter(routes, {
  initialEntries: ["/"],
  initialIndex: 0,
});

ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
  <React.StrictMode>
    <ChakraProvider>
      <RouterProvider router={router} />
    </ChakraProvider>
  </React.StrictMode>
);

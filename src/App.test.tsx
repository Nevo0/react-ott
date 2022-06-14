import React from "react";
import { fireEvent, render, screen } from "@testing-library/react";
import { Provider } from "react-redux";
import { store } from "./app/store";
import App from "./App";


test("renders Welcome back", () => {
  const { getByText } = render(
    <Provider store={store}>
      <App />
    </Provider>
  );

  expect(getByText(/Welcome back,/i)).toBeInTheDocument();
  expect(getByText(/New here?/i)).toBeInTheDocument();
//   expect(getByText("SIGN IN")).toBeInTheDocument();
});



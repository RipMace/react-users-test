import React from "react";
import { unmountComponentAtNode } from "react-dom";
import {render, fireEvent, waitFor, screen} from '@testing-library/react'
import '@testing-library/jest-dom'
import Users from "../index";

let container = null;

it("renders with or with an empty state", () => {
  render(<Users />);
  screen()
});

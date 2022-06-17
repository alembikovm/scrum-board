import React from "react";
import { render, screen } from "@testing-library/react";
import { Header } from "../Header";

describe("column headers", () => {
  it("should render same text into 1 column", () => {
    render(<Header />);

    const headingElement = screen.getByText(/story/i);
    expect(headingElement).toBeInTheDocument();
  });

  it("should render same text into 2 column", () => {
    render(<Header />);

    const headingElement = screen.getByText(/not started/i);
    expect(headingElement).toBeInTheDocument();
  });

  it("should render same text into 3 column", () => {
    render(<Header />);

    const headingElement = screen.getByText(/in progress/i);
    expect(headingElement).toBeInTheDocument();
  });

  it("should render same text into 4 column", () => {
    render(<Header />);

    const headingElement = screen.getByText(/done/i);
    expect(headingElement).toBeInTheDocument();
  });

  it("should render 4 columns", () => {
    render(<Header />);

    const headingElement = screen.getAllByTestId("col");
    expect(headingElement.length).toBe(4);
  });
});

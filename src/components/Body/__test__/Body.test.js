import { render } from "@testing-library/react";
import { Provider } from "react-redux";
import { store } from "../../../app/store";
import { Body } from "../Body";
import reducer from "../../../entitySlice";

const wrapper = ({ children }) => <Provider store={store}>{children}</Provider>;

describe("Body", () => {
  it("should be return the initial state", async () => {
    render(<Body />, { wrapper });

    expect(reducer(undefined, {})).toEqual({
      data: [],
      status: "idle",
    });
  });
});

import * as React from "react";
import { render, screen } from "@testing-library/react";
import Header from "../components/Header";

// test("render component", async () => {
//     const
// })

it("render title", () => {
    render(<Header toggle={() => {}} title={"testowy h3"} />);
    expect(screen.getByText("testowy h3")).toBeInTheDocument();
});

import * as React from "react";
import { fireEvent, render, waitFor } from "@testing-library/react";
import CurrencyCalculator from "../CurrencyCalculator";
import validJson from "../mocks/data.json";

beforeEach(() => {
    jest.restoreAllMocks();
    const mockSuccessResponse = validJson;
    const mockJsonPromise = Promise.resolve(mockSuccessResponse);
    const mockFetchPromise = Promise.resolve({
        json: () => mockJsonPromise,
    });
    var globalRef: any = global;
    globalRef.fetch = jest.fn().mockImplementation(() => mockFetchPromise);
});

test("renders component", async () => {
    const { getByText } = render(<CurrencyCalculator />);
    expect(getByText("Please specify value")).toBeInTheDocument();
});
test("calculates result afrer user types value", async () => {
    const { getByLabelText, getByText } = render(<CurrencyCalculator />);
    const input = getByLabelText("pln-input");

    fireEvent.change(input, { target: { value: "122" } });
    // console.log(debug);
    const textNode = await waitFor(() => getByText("122,00 zł = 26,93 €"));
    // console.log(debug);
    expect(textNode).toBeInTheDocument();
});

test("renders error when json is invalid", async () => {
    const mockSuccessResponse = { error: "smth went wrong" };
    const mockJsonPromise = Promise.resolve(mockSuccessResponse);
    const mockFetchPromise = Promise.resolve({
        json: () => mockJsonPromise,
    });
    var globalRef: any = global;
    globalRef.fetch = jest.fn().mockImplementation(() => mockFetchPromise);

    const { getByText } = render(<CurrencyCalculator />);
    const textNode = await waitFor(() => getByText("Can not connect to NBP..."));

    expect(textNode).toBeInTheDocument();
});

import * as React from "react";
import { FunctionComponent, useEffect, useState } from "react";

const formatCurrency = (value: any, currency: any) =>
    parseFloat(value).toLocaleString(undefined, {
        style: "currency",
        currency,
    });

interface CurrencyCalculatorProps {}

const CurrencyCalculator: FunctionComponent<CurrencyCalculatorProps> = () => {
    const [error, setError] = useState<any>(null);
    const [value, setValue] = useState<any>("");
    const [result, setResult] = useState<any>();
    const [currency, setCurrency] = useState<any>("EUR");
    const [currencies, setCurrencies] = useState<any>([]);

    useEffect(() => {
        const fetchData = async () => {
            try {
                const url = "https://api.nbp.pl/api/exchangerates/tables/A?format=json";
                const response = await fetch(url);
                const json = await response.json();
                setCurrencies(json[0].rates);
            } catch (error) {
                // console.error(error);
                setError("Can not connect to NBP...");
            }
        };

        fetchData();
    }, []);

    useEffect(() => {
        if (value && currencies && currency) {
            const selectedCurrency = currencies.filter((c: { code: any }) => c.code === currency)[0];
            if (!selectedCurrency || !selectedCurrency.mid) {
                setError("Cannot connect to NBP...");
                return;
            }

            const calculated = parseFloat(value) / selectedCurrency.mid;

            if (calculated > 0) {
                setError(null);
                setResult(parseFloat(value) / selectedCurrency.mid);
            } else {
                setError("Wrong value...");
            }
        } else if (!value) {
            setError("Please specify value");
        } else {
            setError("Something went wrong...");
        }
    }, [value, currencies, currency]);

    return (
        <div id="calculator">
            <div className="inputBox">
                <label>PLN:</label>
                <input aria-label="pln-input" value={value} onChange={(e) => setValue(e.target.value)} />
            </div>
            <div className="inputBox">
                <label>To:</label>
                <select value={currency} onChange={(e) => setCurrency(e.target.value)}>
                    {currencies.map((c: { code: any; currency: any }) => (
                        <option key={c.code} value={c.code}>
                            {c.code} - {c.currency}
                        </option>
                    ))}
                </select>
            </div>
            {error && <p>{error}</p>}
            {result && !error && (
                <p style={{ fontSize: "1.5em" }}>
                    {formatCurrency(value, "PLN")} = {formatCurrency(result, currency)}
                </p>
            )}
        </div>
    );
};

export default CurrencyCalculator;

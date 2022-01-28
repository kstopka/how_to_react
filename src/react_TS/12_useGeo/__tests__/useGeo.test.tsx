import { act, renderHook } from "@testing-library/react-hooks";
import { useGeo } from "../hooks/useGeo";

// co gdy działa poprawnie
describe("useGeo hook works correctly", () => {
    // zwraca odpowiednią strukturę
    // zwraca stan nawigacji jesli nawigacja jest włączona
    // zwraca stan zerowy nawigacji jesli nawigacja jest wyłączona
    // zwraca informację jeśli nawigacja jest wyłączona
    // mozna właczyć i wyłaczyć nasłuch nawigacji
});

// co gdy failuje
describe("useGeo hook properly handles errors", () => {
    // urządzenie nie ma nawigacji
    // ktoś chce przeczytać lokalizacje jeśli nei zgodził się na nasłuch
    // wystąpił błąd odczytu nawigacji
});

describe("test useGeo", () => {
    beforeAll(() => {});
    afterAll(() => {
        // cleanMock
    });

    it("return object and function", () => {
        const { result } = renderHook(useGeo);
        const [state, toggleListening] = result.current;

        expect(typeof result.current[0]).toEqual("object");
        expect(typeof result.current[1]).toEqual("function");
    });

    test("should return latitude and longitude", () => {
        const { result } = renderHook(useGeo);

        expect(result.current[0].latitude).toBe(0);
        expect(result.current[0].longitude).toBe(0);
    });

    // Zamockuj window oraz metody niezbędne do geolokalizacji ustawiając:
    // defaultowo lat i long na Londyn
    // ustawiając defaultowo nasłuch na wyłączony

    it("should turn on/off listening on geolocation", () => {
        // mockOnce

        const mockGeolocation = {
            // getCurrentPosition: jest.fn().mockImplementationOnce((success) =>
            watchPosition: jest.fn().mockImplementationOnce((success) =>
                Promise.resolve(
                    success({
                        coords: {
                            latitude: 51.507351,
                            longitude: -0.127758,
                        },
                    })
                )
            ),
        };
        global.navigator.geolocation = mockGeolocation;
        const { result } = renderHook(useGeo);
        const [state, toggleListening] = result.current;
        act(() => {
            toggleListening();
        });

        expect(result.current[0].latitude).toBe(51.507351);
        expect(result.current[0].longitude).toBe(-0.127758);
    });

    // ...
});

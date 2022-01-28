import { act, renderHook } from "@testing-library/react-hooks";
import { useGeo } from "../hooks/useGeo";

// https://stackoverflow.com/questions/43008925/how-to-mock-navigator-geolocation-in-a-react-jest-test/67019816#67019816
const mockNavigatorGeolocation = () => {
    const clearWatchMock = jest.fn();
    const getCurrentPositionMock = jest.fn();
    const watchPositionMock = jest.fn();

    const geolocation = {
        clearWatch: clearWatchMock,
        getCurrentPosition: getCurrentPositionMock,
        watchPosition: watchPositionMock,
    };

    Object.defineProperty(global.navigator, "geolocation", {
        value: geolocation,
        configurable: true,
    });

    return { clearWatchMock, getCurrentPositionMock, watchPositionMock };
};

// co gdy działa poprawnie
describe("useGeo hook works correctly", () => {
    afterAll(() => {
        jest.clearAllMocks();
    });
    // zwraca odpowiednią strukturę
    it("returns correct structure", () => {
        const { result } = renderHook(useGeo);
        const [state, toggleListening] = result.current;

        expect(typeof state).toEqual("object");
        expect(typeof toggleListening).toEqual("function");
    });

    // zwraca stan nawigacji jesli nawigacja jest włączona
    it("returns correct coords if navigation is enabled", () => {
        const { watchPositionMock } = mockNavigatorGeolocation();
        watchPositionMock.mockImplementationOnce((success, rejected) =>
            success({
                coords: {
                    latitude: 51.507351,
                    longitude: -0.127758,
                },
            })
        );

        const { result } = renderHook(useGeo);
        let [{ latitude, longitude }, toggleListening] = result.current;

        expect(latitude).toBe(null);
        expect(longitude).toBe(null);
        // const toggleListening = result.current[1];

        act(() => {
            toggleListening();
        });
        // const { latitude, longitude } = result.current[0];
        latitude = result.current[0].latitude;
        longitude = result.current[0].longitude;

        expect(latitude).toBe(51.507351);
        expect(longitude).toBe(-0.127758);
        jest.clearAllMocks();
    });

    // zwraca stan zerowy nawigacji jesli nawigacja jest wyłączona
    it("returns null if navigation is disabled", () => {
        const { result } = renderHook(useGeo);
        const [{ latitude, longitude }] = result.current;

        expect(latitude).toBe(null);
        expect(longitude).toBe(null);
    });
    // zwraca informację jeśli nawigacja jest wyłączona
    it("Returns information if navigation is turned off", () => {
        //TODO: jakiś aller o wyłąćzonaj navi co ma informacje
        //TODO: to wrzucić do błędow
        const { result } = renderHook(useGeo);
        const [{ latitude, longitude }, toggleListening] = result.current;

        let error;

        const { watchPositionMock } = mockNavigatorGeolocation();
        watchPositionMock.mockImplementationOnce((success, rejected) =>
            rejected((error = "you must accept the location to use the application"))
        );

        act(() => {
            toggleListening();
            // throw new Error("you must accept the location to use the application");
        });
        //NOTE czy to ok?\/
        expect(error).toBe("you must accept the location to use the application");
    });
    // mozna właczyć i wyłaczyć nasłuch nawigacji
    it("can turn navigation on or off", () => {
        const { watchPositionMock } = mockNavigatorGeolocation();
        watchPositionMock.mockImplementationOnce((success, rejected) =>
            success({
                coords: {
                    latitude: 51.507351,
                    longitude: -0.127758,
                },
            })
        );
        const { result } = renderHook(useGeo);
        const [{ latitude, longitude }, toggleListening] = result.current;

        act(() => {
            toggleListening();
            toggleListening();
            toggleListening();
        });
        expect(toggleListening).toHaveBeenCalledTimes(3);
    });
});

// co gdy failuje
describe("useGeo hook properly handles errors", () => {
    // urządzenie nie ma nawigacji
    // ktoś chce przeczytać lokalizacje jeśli nei zgodził się na nasłuch
    // wystąpił błąd odczytu nawigacji
});

describe("test useGeo", () => {
    //     beforeAll(() => {});
    //     afterAll(() => {
    //         // cleanMock
    //     });
    //     // Zamockuj window oraz metody niezbędne do geolokalizacji ustawiając:
    //     // defaultowo lat i long na Londyn
    //     // ustawiając defaultowo nasłuch na wyłączony
    // it("should turn on/off listening on geolocation", () => {
    //     // mockOnce
    //     const mockGeolocation = {
    //         // getCurrentPosition: jest.fn().mockImplementationOnce((success) =>
    //         watchPosition: jest.fn().mockImplementationOnce((success) =>
    //             Promise.resolve(
    //                 success({
    //                     coords: {
    //                         latitude: 51.507351,
    //                         longitude: -0.127758,
    //                     },
    //                 })
    //             )
    //         ),
    //     };
    //     global.navigator.geolocation = mockGeolocation;
    //     const { result } = renderHook(useGeo);
    //     const [{}, toggleListening] = result.current;
    //     act(() => {
    //         toggleListening();
    //     });
    //     const [{ latitude, longitude }] = result.current;
    //     expect(latitude).toBe(51.507351);
    //     expect(longitude).toBe(-0.127758);
    // });
    //     // ...
});

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

// co gdy failuje
describe("useGeo hook properly handles errors", () => {
    afterAll(() => {
        jest.clearAllMocks();
        jest.restoreAllMocks();
        jest.resetAllMocks();
    });
    // urządzenie nie ma nawigacji
    it("throw error when device has no navigation", () => {
        expect(() => {
            const { result } = renderHook(useGeo);
            //NOTE: co lepsze ? \/
            // const [{}, toggleListening] = result.current;
            const toggleListening = result.current[1];
            act(() => {
                toggleListening();
            });
        }).toThrowError();
    });
    // ktoś chce przeczytać lokalizacje jeśli nie zgodził się na nasłuch
    it("throw error when someone wants to read the location if they haven't agreed to listen", () => {
        expect(() => {
            const { result } = renderHook(useGeo);
            const toggleListening = result.current[1];
            const { watchPositionMock } = mockNavigatorGeolocation();
            watchPositionMock.mockImplementationOnce((success, rejected) => rejected());
            act(() => {
                toggleListening();
            });
        }).toThrowError();
    });
    // wystąpił błąd odczytu nawigacji
    it("throw error when a navigation read error has occurred", () => {
        expect(() => {
            const { result } = renderHook(useGeo);
            const toggleListening = result.current[1];
            const { watchPositionMock } = mockNavigatorGeolocation();
            watchPositionMock.mockImplementationOnce((success, rejected) =>
                success({
                    coords: false,
                })
            );
            act(() => {
                toggleListening();
            });
        }).toThrowError();
    });
});

// co gdy działa poprawnie
describe("useGeo hook works correctly", () => {
    // let alertMock;
    beforeAll(() => {
        //https://stackoverflow.com/questions/52868727/how-to-mock-window-navigator-language-using-jest/52870312#52870312
        // alertMock = jest.spyOn(global.navigator, "geolocation", "get");
    });
    afterAll(() => {
        jest.clearAllMocks();
        jest.restoreAllMocks();
        jest.resetAllMocks();
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
        expect(latitude).toBeNull();
        expect(longitude).toBeNull();
        // const toggleListening = result.current[1];
        act(() => {
            toggleListening();
        });
        // const { latitude, longitude } = result.current[0];
        latitude = result.current[0].latitude;
        longitude = result.current[0].longitude;
        expect(latitude).toBe(51.507351);
        expect(longitude).toBe(-0.127758);
    });

    // zwraca stan zerowy nawigacji jesli nawigacja jest wyłączona
    it("returns null if navigation is disabled", () => {
        const { result } = renderHook(useGeo);
        const [{ latitude, longitude }] = result.current;

        expect(latitude).toBeNull();
        expect(longitude).toBeNull();
    });
    // zwraca informację jeśli nawigacja jest wyłączona
    it("returns information if navigation is turned off", () => {
        //TODO:
        const { result } = renderHook(useGeo);
        const toggleListening = result.current[1];
        // const alertMock = jest.spyOn(window, "alert");

        act(() => {
            toggleListening();
        });
        act(() => {
            toggleListening();
        });
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
        const toggleListening = result.current[1];

        act(() => {
            toggleListening();
            toggleListening();
            toggleListening();
        });
    });
});

//MOCKI:

// const mockGeolocation = {
//     // getCurrentPosition: jest.fn().mockImplementationOnce((success) =>
//     watchPosition: jest.fn().mockImplementationOnce((success) =>
//         Promise.resolve(
//             success({
//                 coords: {
//                     latitude: 51.507351,
//                     longitude: -0.127758,
//                 },
//             })
//         )
//     ),
// };
// global.navigator.geolocation = mockGeolocation;

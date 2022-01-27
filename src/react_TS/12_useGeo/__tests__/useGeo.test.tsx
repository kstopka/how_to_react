import { act, renderHook } from "@testing-library/react-hooks";
import { useGeo } from "../hooks/useGeo";

describe("test useGeo", () => {
    it("return object and function", () => {
        const { result } = renderHook(useGeo);
        expect(typeof result.current[0]).toEqual("object");
        expect(typeof result.current[1]).toEqual("function");
    });

    test("should return latitude and longitude", () => {
        const { result } = renderHook(useGeo);

        expect(result.current[0].latitude).toBe(0);
        expect(result.current[0].longitude).toBe(0);
    });

    it("should turn on/off listening on geolocation", () => {
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
        act(() => {
            result.current[1]();
        });

        expect(result.current[0].latitude).toBe(51.507351);
        expect(result.current[0].longitude).toBe(-0.127758);
    });
});

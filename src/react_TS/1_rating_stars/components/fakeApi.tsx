import dataRatings from "../data.json";
import { RatingType } from "../App.d";

const mockedData = (success: boolean, timeout?: number): Promise<RatingType[]> =>
    new Promise((resolve, reject) => {
        setTimeout(() => {
            if (success) {
                resolve(dataRatings.ratings);
            }
            reject({ message: "failed fetch", error: true });
        }, timeout || 2000);
    });

export default mockedData;

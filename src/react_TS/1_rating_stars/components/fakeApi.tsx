import dataRatings from "../data.json";
import { RatingType } from "../App";

const mockedData = (success: boolean, timeout?: number): Promise<RatingType[]> =>
    new Promise((resolve, reject) => {
        setTimeout(() => {
            if (success) {
                resolve(dataRatings.ratings);
            }
            reject({ error: true, message: "failed fetch" });
        }, timeout || 2000);
    });

export default mockedData;

import data from "./dataCredentials.json";
import { UserCredentials } from "../App.d";

const mockedData = (success: boolean, timeout?: number): Promise<UserCredentials[]> =>
    new Promise((resolve, reject) => {
        setTimeout(() => {
            if (success) {
                console.log(`success`);
                resolve(data.users);
            }

            reject({ error: true, message: "failed fetch" });
        }, timeout);
    });

export default mockedData;

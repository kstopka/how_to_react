import axios from "axios";
import { reportError } from "./reportError";

export interface IUser {
    email: string;
    name: string;
    id?: number;
}

interface IUserDB {
    users: IUser[];
    all(): IUser[];
    totalUsers(): number;
    add(user: IUser): IUser[];
}

class UserDB implements IUserDB {
    public users: IUser[];
    constructor(users: IUser[]) {
        this.users = users;
    }

    all = () => {
        return this.users;
    };

    totalUsers = () => {
        return this.users.length;
    };

    findBy = (attr: string, val: string | number) => {
        if (attr !== "email" && attr !== "id") return;
        return this.users.find((existingUser) => existingUser[attr] === val);
    };

    add = (user: IUser) => {
        const users = this.users;
        if (!user.email) throw new Error("email needed");
        const duplicate = this.findBy("email", user.email);
        if (duplicate) throw new Error("email no unique");

        user.id = this.all.length + 1;
        users.push(user);
        return (this.users = users);
    };

    edit(id: number, params: any) {
        const user = this.findBy("id", id);
        if (!user) throw new Error("User does not exists");
        let edited;

        this.users = this.users.map((temp) => {
            if (temp.id === id) {
                edited = { ...temp, ...params };
                return edited;
            } else {
                return temp;
            }
        });

        return edited;
    }

    random = () => {
        return new Promise((resolve, reject) => {
            setTimeout(() => {
                if (this.totalUsers() > 0) {
                    const luckyNumber = Math.floor(Math.random() * this.totalUsers());
                    resolve(this.users[luckyNumber]);
                } else {
                    reject("no users...");
                }
            }, 3);
        });
    };

    async randomAvatar() {
        try {
            const response = await axios.get("https://randomuser.me/api/");
            return response.data.results[0].picture.thumbnail;
        } catch (err: any) {
            reportError(err);
            return "/temporaryAvatar.jpg";
        }
    }
}
export default UserDB;

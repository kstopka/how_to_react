import axios from "axios";
import UserDB, { IUser } from "./UserDB";
import validAvatar from "./mock/validAvatar.json";
import invalidAvatar from "./mock/invalidAvatar.json";

describe("totalUsers", () => {
    it("returns zero when no users", () => {
        const subject = new UserDB([]);
        expect(subject.totalUsers()).toBe(0);
    });
    it("returns count of users", () => {
        const subject = new UserDB([
            { email: "michal@goo.com", name: "michal", id: 0 },
            { email: "arek@goo.com", name: "arek", id: 1 },
        ]);

        expect(subject.totalUsers()).toBe(2);
    });
});

describe("add", () => {
    it("add user", () => {
        const subject = new UserDB([]);
        const initialCount = subject.totalUsers();

        subject.add({ email: "michal@com.com", name: "michal " });
        expect(subject.totalUsers()).toBeGreaterThan(initialCount);
    });

    it("throws error when no email given", () => {
        const subject = new UserDB([]);
        expect(() => {
            subject.add({ email: "michal@com.com", name: "michal " });
        }).toThrow("email needed");
    });

    it("throws error when email duplicated", () => {
        const subject = new UserDB([]);
        subject.add({ email: "michal@com.com", name: "michal " });
        expect(() => {
            subject.add({ email: "michal@com.com", name: "michal " });
        }).toThrow("email no unique");
    });
});

describe("random", () => {
    it("rejects when no users", async () => {
        const subject = new UserDB([]);

        try {
            await subject.random();
        } catch (err) {
            expect(err).toEqual("no users...");
        }
    });

    it("returns random user", async () => {
        const subject = new UserDB([]);
        const luckyEmails = ["lucky0@gmail.com", "lucky1@gmail.com", "lucky2@gmail.com"];
        const spy = jest.spyOn(subject, "findBy");
        luckyEmails.forEach((email) => subject.add({ email, name: "name" }));

        const luckyGuy: IUser | unknown = await subject.random();
        // expect(luckyEmails).toContain(luckyGuy.email);
        expect(spy).toHaveBeenCalledTimes(3);
        expect(spy).toHaveBeenNthCalledWith(1, "email", "lucky0@gmail.com");
        spy.mockRestore();
    });
});

describe("randomAvatar returns", () => {
    it("avatrar from 3rd party service", async () => {
        const mock = jest.spyOn(axios, "get");
        mock.mockImplementationOnce(() => Promise.resolve({ data: validAvatar }));
        const subject = new UserDB([]);
        const avatar = await subject.randomAvatar();
        expect(avatar).toBe("https://randomuser.me/api/portraits/thumb/men/82.jpg");
        mock.mockRestore();
    });
    it("temp avatar when service not responding", async () => {
        const mock = jest.spyOn(axios, "get");
        mock.mockImplementationOnce(() => Promise.reject({ data: "some error..." }));
        const subject = new UserDB([]);
        const avatar = await subject.randomAvatar();
        expect(avatar).toBe("/temporaryAvatar.jpg");
        mock.mockRestore();
    });
    it("temp avatar when 3rd party payload is wrong", async () => {
        const mock = jest.spyOn(axios, "get");
        mock.mockImplementationOnce(() => Promise.resolve({ data: invalidAvatar }));
        const subject = new UserDB([]);
        const avatar = await subject.randomAvatar();
        expect(avatar).toBe("/temporaryAvatar.jpg");
        mock.mockRestore();
    });
});

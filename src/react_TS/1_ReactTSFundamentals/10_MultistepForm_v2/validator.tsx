import * as Yup from "yup";

export const MultistepSchema = Yup.object({
    name: Yup.string().required(),
    surname: Yup.string().required(),
    email: Yup.string().email().required(),
    phonenumber: Yup.string().length(9, "Phone number lenght is wrong").required(),
});

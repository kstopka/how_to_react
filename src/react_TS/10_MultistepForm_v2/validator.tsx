import * as Yup from "yup";

//TODO: poprawić validacje
export const MultistepSchema = Yup.object({
    name: Yup.string().required("Name ... "),
    surname: Yup.string().required("Surname..."),
    email: Yup.string().required("email...."),
    phonenumber: Yup.string().length(9, "Phone number ...").required("phonenumber...."),
});

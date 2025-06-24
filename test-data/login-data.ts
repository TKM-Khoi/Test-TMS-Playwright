import { LoginData } from "../data-object/login";

const AllLoginData: Record<string, Array<LoginData>> = {
    "valid": [
        {
            username: "admin",
            password: "admin",
            staffCode: "BD69"
        },
        {
            username: "Admin2",
            password: "Fxu1tw^E",
            staffCode: "IT33"
        }
    ],
    "missingUsername": [
        {
            username: "",
            password: "Fxu1tw^E"
        }
    ],
    "missingPassword": [
        {
            username: "Admin2",
            password: ""
        }
    ],
    "missingUsernameAndPassword": [
        {
            username: "",
            password: ""
        }
    ],
    "wrongUsernameOrPassword": [
        {
            username: "Admin1",
            password: "qp$#tGu3"
        }
    ]
}
export const ValidData: Array<LoginData> = AllLoginData["valid"];
export const MissingUsernameData: Array<LoginData> = AllLoginData["missingUsername"];
export const MissingPasswordData: Array<LoginData> = AllLoginData["missingPassword"];
export const MissingUsernameAndPasswordData: Array<LoginData> = AllLoginData["missingUsernameAndPassword"];
export const WrongUsernameOrPasswordData: Array<LoginData> = AllLoginData["wrongUsernameOrPassword"];
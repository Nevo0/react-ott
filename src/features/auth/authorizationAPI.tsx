import axios from "axios";
import { typeValues, AuthorizationTokenRetObj } from "./types";

export function fetchCount(initialValues: typeValues) {
  return new Promise<{ data: AuthorizationTokenRetObj }>(async (resolve,reject) => {
    const dataToSend = {
      username: initialValues.username,
      password: initialValues.password,
    };
    const dataToSend2 = {
      username: "test@bsgroup.eu",
      password: "Test12!@",
    }

    try {
      // 👇️ const data: GetUsersResponse

      const { data, status } = await axios.post(
        "https://thebetter.bsgroup.eu/Authorization/SignIn",dataToSend
        ,
        {
          headers: {
            "Content-Type": "application/json",
            Accept: "application/json",
          },
        }
      );

      // console.log(JSON.stringify(data, null, 4));

      resolve({ data: data });

      // 👇️ "response status is: 200"
      console.log("response status is: ", status);

      
    } catch (error) {
      if (axios.isAxiosError(error)) {
        console.log("error message: ", error.message);
        reject(error.message)
        return error.message;
      } else {
        reject(error)
        console.log("unexpected error: ", error);
        return "An unexpected error occurred";
      }
    }
  });
}

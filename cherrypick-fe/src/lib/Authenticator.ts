import client from "@/lib/AppwriteClient";

import { Account, ID } from "appwrite";

export const register = async (
  email: string,
  password: string,
  passwordConfirmation: string,
) => {
  if (password !== passwordConfirmation) {
    throw new Error("Passwords do not match");
  }
  const account = new Account(client);
  const promise = account.create(ID.unique(), email, password);
  promise.then(
    function (response) {
      console.log(response);
    },
    function (error) {
      console.log(error);
    },
  );
};

export const login = async (email: string, password: string) => {
  const account = new Account(client);
  const promise = account.createEmailPasswordSession(email, password);
  return await promise.then(
    async function () {
      return (await account.get()).name;
    },
    function (error) {
      console.log(error);
    },
  );
};

export const logout = async () => {
  const account = new Account(client);
  await account.deleteSession("current");
};

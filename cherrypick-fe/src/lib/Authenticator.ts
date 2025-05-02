import client from "@/lib/AppwriteClient";

import { Account, ID } from "appwrite";

const account = new Account(client);

export const register = async (
  email: string,
  password: string,
  passwordConfirmation: string,
) => {
  if (password !== passwordConfirmation) {
    throw new Error("Passwords do not match");
  }
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
  const promise = account.createEmailPasswordSession(email, password);
  return await promise.then(
    async function () {
      const user = await account.get();
      return user;
    },
    function (error) {
      console.log(error);
    },
  );
};

export const logout = async () => {
  await account.deleteSession("current");
};

export const getUser = async () => {
  return await account.get();
};

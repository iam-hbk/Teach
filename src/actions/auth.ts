"use server";

import { login } from "@/lib/auth";

export const loginAction = async (formData: FormData) => {
  await login(formData);
};

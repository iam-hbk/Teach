import { SignJWT, jwtVerify } from "jose";
import { cookies } from "next/headers";
const secretKey = "my_secret"; // to be put in .env file
const key = new TextEncoder().encode(secretKey);

export async function encrypt(payload: any) {
  return await new SignJWT(payload)
    .setProtectedHeader({ alg: "HS256" })
    .setIssuedAt()
    .setExpirationTime("10 sec from now")
    .sign(key);
}

export async function login(formData: FormData) {
  //verify the user
  const user = {
    email: formData.get("email"),
    password: formData.get("password"),
  };
  console.log("USER:", user);

  //create a session
  const expiresAt = new Date(Date.now() + 10 * 1000);
  const session = await encrypt({ user, expiresAt });
  cookies().set("session", session, { expires: expiresAt, httpOnly: true });
}

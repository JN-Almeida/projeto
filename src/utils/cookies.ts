"use server";
import { cookies } from "next/headers";

export async function setCookieCart(cart: any) {
  cookies().set("product", JSON.stringify(cart));
}

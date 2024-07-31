import { signInWithEmailAndPassword } from "firebase/auth";
import { NextApiRequest, NextApiResponse } from "next";
import { auth } from "@/apis/firebase/FirebaseConfig";
import { cookies } from "next/headers";
import { NextResponse } from "next/server";

export async function POST(req: Request) {
  const body = await req.json();
  try {
    const response = await signInWithEmailAndPassword(
      auth,
      body.username,
      body.password
    );
    // Assuming you want to store the token in a cookie
    cookies().set("AUTH", JSON.stringify(response));
    return NextResponse.json({
      status: 200,
      message: "Login Successfull",
      data: response,
    });
  } catch (error: any) {
    return NextResponse.json({ status: 400, error: "true" });
  }
}

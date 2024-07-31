import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
} from "firebase/auth";
import { NextApiRequest, NextApiResponse } from "next";
import { auth } from "@/apis/firebase/FirebaseConfig";
import { cookies } from "next/headers";
import { NextResponse } from "next/server";

export async function POST(req: Request) {
  const body = await req.json();
  console.log("Asd12345", body)
  try {
    const response = await createUserWithEmailAndPassword(
      auth,
      body.username,
      body.password
    );
    // Assuming you want to store the token in a cookie
    return NextResponse.json({
      status: 200,
      message: "Register Success",
      data: response,
    });
  } catch (error: any) {
    // console.log("errs", error);
    return NextResponse.error();
  }
}

import { signInWithEmailAndPassword } from "firebase/auth";
import { NextApiRequest, NextApiResponse } from "next";
import { auth } from "@/apis/firebase/FirebaseConfig";
import { cookies } from "next/headers";
import { NextResponse } from "next/server";
import { patchFirebaseUser } from "@/apis/user/user";

export async function POST(req: Request) {
  const body = await req.json();
  console.log("asd", body)
  try {
    const response = await patchFirebaseUser(body.id, body.name);
    // Assuming you want to store the token in a cookie
    return NextResponse.json({
      status: 200,
      message: "Update Success",
      data: response,
    });
  } catch (error: any) {
    console.log("errs", error);
    return NextResponse.error();
  }
}

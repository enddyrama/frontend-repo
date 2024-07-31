
import { cookies } from "next/headers";
import { redirect } from "next/navigation";
import { NextResponse } from "next/server";

export async function POST(req: Request) {
  try {
    // Assuming you want to store the token in a cookie
    cookies().delete("AUTH");
    // redirect("/login")
    return NextResponse.json({
      status: 200,
      message: "Logout Successfull",
      data: null,
    });
  } catch (error: any) {
    console.log("errs", error);
    return NextResponse.error();
  }
}

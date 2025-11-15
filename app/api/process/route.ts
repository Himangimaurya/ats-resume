import { NextResponse } from "next/server";

export async function POST(req: Request) {
  try {
    const formData = await req.formData();
    const resume = formData.get("resume") as File;

    console.log("Received File:", resume);

    return NextResponse.json({
      success: true,
      message: "Resume received successfully!",
    });
  } catch (error) {
    console.error("Backend error:", error);
    return NextResponse.json(
      { success: false, message: "Something went wrong!" },
      { status: 500 }
    );
  }
}
